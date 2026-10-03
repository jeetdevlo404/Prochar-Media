import { TeamMember } from '../types';

export const initialTeamMembers: TeamMember[] = [
  // 1. Leadership (CEO & Founder)
  {
    id: 'team-ceo',
    name: 'Masuma Afroj Mim',
    role: 'Chief Executive Officer (CEO)',
    department: 'Business Operations & Social Media Management',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.19.jpeg',
    order: 1,
    featured: true,
  },
  {
    id: 'team-founder',
    name: 'Jony Islam',
    role: 'Founder',
    department: 'Business Development & Digital Marketing',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.18.jpeg',
    order: 2,
    featured: true,
  },

  // 2. Strategic Consultation & Core Tech
  {
    id: 'team-consultant',
    name: 'Mahibur Rahman Orikto',
    role: 'Senior Consultant & Meta Ads Expert',
    department: 'Strategic Campaign Growth & Meta Funnels',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.22 (1).jpeg',
    order: 3,
    featured: true,
  },
  {
    id: 'team-dev',
    name: 'Jeet Ghosh',
    role: 'Website Development & Developer',
    department: 'Web Systems, Scalability & Architecture',
    company: 'Prochar Media',
    image: '', // No profile pic as requested by user
    isDevNoPhoto: true,
    order: 4,
    featured: true,
  },

  // 3. Marketing & Creative Executives
  {
    id: 'team-mkt-exec',
    name: 'Md Fahim Sharriyar Nihal',
    role: 'Digital Marketing & Social Media Executive',
    department: 'Content Strategy & Campaign Execution',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.20 (1).jpeg',
    order: 5,
  },
  {
    id: 'team-design',
    name: 'Emanul Hasan Jihad',
    role: 'Digital Marketing & Graphic Design Executive',
    department: 'Visual Brand Identity & Creative Design',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.21.jpeg',
    order: 6,
  },
  {
    id: 'team-ai-video',
    name: 'Saleha Khanom',
    role: 'Digital Marketer & AI Video Creator',
    department: 'AI Video Production & Digital Storytelling',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.22.jpeg',
    order: 7,
  },

  // 4. Video & Media Production
  {
    id: 'team-video-1',
    name: 'Ovi Chandra Sarker',
    role: 'Video Editor',
    department: 'Short-Form Reels & Cinematic Edits',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.20.jpeg',
    order: 8,
  },
  {
    id: 'team-video-2',
    name: 'Md. Shariar Islam Shihab',
    role: 'Video Editor & Videographer',
    department: 'Video Production & Visual Direction',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.23.jpeg',
    order: 9,
  },
  {
    id: 'team-mkt-video',
    name: 'Siam Al Shahid',
    role: 'Marketing Executive & Videographer',
    department: 'Field Marketing & Visual Storytelling',
    company: 'Prochar Media',
    image: 'WhatsApp Image 2026-10-03 at 02.30.23 (1).jpeg',
    order: 10,
  },
];
