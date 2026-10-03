import React, { createContext, useContext, useState, useEffect } from 'react';
import { Review, SiteSettings, TeamMember } from '../types';
import { initialReviews, initialSiteSettings } from '../data/initialData';
import { db, auth, googleProvider, signInWithPopup, signOut, handleFirestoreError, OperationType } from '../firebase';
import { collection, doc, onSnapshot, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';

interface AppContextType {
  lang: 'en' | 'bn';
  setLang: (lang: 'en' | 'bn') => void;
  siteSettings: SiteSettings;
  updateSiteSettings: (settings: Partial<SiteSettings>) => Promise<boolean>;
  reviews: Review[];
  approvedReviews: Review[];
  pendingReviews: Review[];
  addPublicReview: (review: Omit<Review, 'id' | 'createdAt' | 'status'>) => Promise<boolean>;
  approveReview: (id: string) => Promise<boolean>;
  rejectReview: (id: string) => Promise<boolean>;
  deleteReview: (id: string) => Promise<boolean>;
  updateReview: (id: string, review: Partial<Review>) => Promise<boolean>;
  clearAllDemoReviews: () => Promise<boolean>;
  teamMembers: TeamMember[];
  addTeamMember: (member: Omit<TeamMember, 'id'>) => Promise<boolean>;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => Promise<boolean>;
  deleteTeamMember: (id: string) => Promise<boolean>;
  currentUser: User | null;
  isAdmin: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language State
  const [lang, setLangState] = useState<'en' | 'bn'>(() => {
    const saved = localStorage.getItem('prochar_lang');
    return saved === 'en' || saved === 'bn' ? saved : 'bn';
  });

  const setLang = (newLang: 'en' | 'bn') => {
    setLangState(newLang);
    localStorage.setItem('prochar_lang', newLang);
  };

  // Auth State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        setIsAdmin(true);
      }
    });
    return () => unsub();
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.warn('Google Sign In Notice:', err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.warn('Sign out notice:', err);
    }
  };

  // Site Settings - Synchronously loaded from localStorage for sub-second render
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('prochar_settings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    // Pre-cache immediately for next visit
    try {
      localStorage.setItem('prochar_settings', JSON.stringify(initialSiteSettings));
    } catch (e) {}
    return initialSiteSettings;
  });

  // Reviews State - Starts empty as requested ("রিভিউগুলো সরিয়ে দাও। কোনো রিভিউ থাকবে না")
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('prochar_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {}
    }
    return initialReviews;
  });

  // Team Members State - Admin will add from Admin Panel
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('prochar_team_members');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {}
    }
    return [];
  });

  // Sync with Firestore Real-time listeners
  useEffect(() => {
    const settingsDoc = doc(db, 'site_settings', 'main');
    const unsubSettings = onSnapshot(
      settingsDoc,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.data() as SiteSettings;
          setSiteSettings(data);
          localStorage.setItem('prochar_settings', JSON.stringify(data));
        } else {
          setDoc(settingsDoc, initialSiteSettings).catch((e) =>
            handleFirestoreError(e, OperationType.WRITE, 'site_settings/main')
          );
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'site_settings/main');
      }
    );

    // Reviews listener
    const reviewsCol = collection(db, 'reviews');
    const unsubReviews = onSnapshot(
      reviewsCol,
      (snapshot) => {
        if (!snapshot.empty) {
          const items: Review[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data() as Review;
            items.push({
              ...data,
              status: data.status || 'approved',
            });
          });
          items.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
          setReviews(items);
          localStorage.setItem('prochar_reviews', JSON.stringify(items));
        } else {
          setReviews([]);
          localStorage.setItem('prochar_reviews', JSON.stringify([]));
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, 'reviews');
      }
    );

    // Team Members listener
    const teamCol = collection(db, 'team_members');
    const unsubTeam = onSnapshot(
      teamCol,
      (snapshot) => {
        if (!snapshot.empty) {
          const items: TeamMember[] = [];
          snapshot.forEach((doc) => {
            items.push(doc.data() as TeamMember);
          });
          items.sort((a, b) => (a.order || 0) - (b.order || 0));
          setTeamMembers(items);
          localStorage.setItem('prochar_team_members', JSON.stringify(items));
        } else {
          // If empty in firestore, check local storage
          const saved = localStorage.getItem('prochar_team_members');
          if (saved) {
            try {
              setTeamMembers(JSON.parse(saved));
            } catch (e) {}
          }
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, 'team_members');
      }
    );

    return () => {
      unsubSettings();
      unsubReviews();
      unsubTeam();
    };
  }, []);

  const updateSiteSettings = async (settings: Partial<SiteSettings>): Promise<boolean> => {
    const updated = {
      ...siteSettings,
      ...settings,
      updatedAt: new Date().toISOString(),
    };
    setSiteSettings(updated);
    localStorage.setItem('prochar_settings', JSON.stringify(updated));

    try {
      await setDoc(doc(db, 'site_settings', 'main'), updated);
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, 'site_settings/main');
      return true;
    }
  };

  // Add Public Review (Visitor writes review -> status is 'pending' for admin moderation)
  const addPublicReview = async (reviewData: Omit<Review, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    const newId = 'rev-' + Date.now();
    const newReview: Review = {
      ...reviewData,
      id: newId,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('prochar_reviews', JSON.stringify(updated));

    try {
      await setDoc(doc(db, 'reviews', newId), newReview);
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `reviews/${newId}`);
      return true;
    }
  };

  // Approve Pending Review (Admin checks and approves)
  const approveReview = async (id: string): Promise<boolean> => {
    const updated = reviews.map((r) => (r.id === id ? { ...r, status: 'approved' as const } : r));
    setReviews(updated);
    localStorage.setItem('prochar_reviews', JSON.stringify(updated));

    try {
      await updateDoc(doc(db, 'reviews', id), { status: 'approved' });
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `reviews/${id}`);
      return true;
    }
  };

  // Reject / Cancel / Delete Review (Cancel bad/bogus reviews)
  const rejectReview = async (id: string): Promise<boolean> => {
    return deleteReview(id);
  };

  const deleteReview = async (id: string): Promise<boolean> => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    localStorage.setItem('prochar_reviews', JSON.stringify(updated));

    try {
      await deleteDoc(doc(db, 'reviews', id));
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `reviews/${id}`);
      return true;
    }
  };

  const updateReview = async (id: string, reviewData: Partial<Review>): Promise<boolean> => {
    const updated = reviews.map((r) => (r.id === id ? { ...r, ...reviewData } : r));
    setReviews(updated);
    localStorage.setItem('prochar_reviews', JSON.stringify(updated));

    try {
      await updateDoc(doc(db, 'reviews', id), reviewData);
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `reviews/${id}`);
      return true;
    }
  };

  // Clear all demo reviews completely
  const clearAllDemoReviews = async (): Promise<boolean> => {
    const promises = reviews.map((r) => deleteDoc(doc(db, 'reviews', r.id)).catch(() => {}));
    await Promise.all(promises);
    setReviews([]);
    localStorage.setItem('prochar_reviews', JSON.stringify([]));
    return true;
  };

  // Team Member Management
  const addTeamMember = async (memberData: Omit<TeamMember, 'id'>): Promise<boolean> => {
    const newId = 'team-' + Date.now();
    const newMember: TeamMember = {
      ...memberData,
      id: newId,
    };

    const updated = [...teamMembers, newMember];
    setTeamMembers(updated);
    localStorage.setItem('prochar_team_members', JSON.stringify(updated));

    try {
      await setDoc(doc(db, 'team_members', newId), newMember);
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `team_members/${newId}`);
      return true;
    }
  };

  const updateTeamMember = async (id: string, memberData: Partial<TeamMember>): Promise<boolean> => {
    const updated = teamMembers.map((m) => (m.id === id ? { ...m, ...memberData } : m));
    setTeamMembers(updated);
    localStorage.setItem('prochar_team_members', JSON.stringify(updated));

    try {
      await updateDoc(doc(db, 'team_members', id), memberData);
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `team_members/${id}`);
      return true;
    }
  };

  const deleteTeamMember = async (id: string): Promise<boolean> => {
    const updated = teamMembers.filter((m) => m.id !== id);
    setTeamMembers(updated);
    localStorage.setItem('prochar_team_members', JSON.stringify(updated));

    try {
      await deleteDoc(doc(db, 'team_members', id));
      return true;
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `team_members/${id}`);
      return true;
    }
  };

  // Computed lists
  const approvedReviews = reviews.filter((r) => r.status === 'approved');
  const pendingReviews = reviews.filter((r) => r.status === 'pending');

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        siteSettings,
        updateSiteSettings,
        reviews,
        approvedReviews,
        pendingReviews,
        addPublicReview,
        approveReview,
        rejectReview,
        deleteReview,
        updateReview,
        clearAllDemoReviews,
        teamMembers,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        currentUser,
        isAdmin,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
