// src/data/projects.js

export const projectStatuses = ['Completed', 'Under Construction', 'Upcoming'];

export const projects = [
  {
    id: 'proj-1',
    slug: 'rk-sea-view-towers',
    title: 'RK Sea View Towers',
    description: 'A landmark development in Worli offering panoramic views of the Arabian Sea. This award-winning project redefines luxury living in Mumbai with world-class amenities and sustainable design.',
    location: 'Worli Sea Face, Mumbai',
    status: 'Completed',
    totalUnits: 120,
    unitsSold: 115,
    area: '4 Acres',
    completedYear: '2024',
    expectedCompletion: null,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
    ],
    highlights: ['IGBC Gold Certified', 'Rooftop Infinity Pool', 'Fully Equipped Gym', 'Smart Home Integration'],
    timeline: [
      { year: '2019', event: 'Land Acquisition & Design Phase' },
      { year: '2020', event: 'Foundation & Structural Works Started' },
      { year: '2022', event: 'Topping Out Ceremony' },
      { year: '2024', event: 'Project Completed & Handover Initiated' }
    ],
    featured: true,
  },
  {
    id: 'proj-2',
    slug: 'rk-pali-hill-estates',
    title: 'RK Pali Hill Estates',
    description: 'An exclusive enclave of luxury villas in Bandra. RK Pali Hill Estates offers unparalleled privacy, verdant landscapes, and bespoke architectural brilliance for Mumbai elite.',
    location: 'Pali Hill, Bandra West',
    status: 'Under Construction',
    totalUnits: 15,
    unitsSold: 8,
    area: '2 Acres',
    completedYear: null,
    expectedCompletion: '2027',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200'
    ],
    highlights: ['Private Pools', 'Home Automation', 'Exclusive Clubhouse', 'Lush Landscaping'],
    timeline: [
      { year: '2023', event: 'Project Launched & Excavation Began' },
      { year: '2024', event: 'Structure 50% Complete' },
      { year: '2026', event: 'Expected Interiors Phase' },
      { year: '2027', event: 'Expected Completion' }
    ],
    featured: true,
  },
  {
    id: 'proj-3',
    slug: 'rk-andheri-hub',
    title: 'RK Andheri Hub',
    description: 'A state-of-the-art commercial complex designed for the next generation of businesses. Featuring premium office spaces, retail outlets, and expansive collaborative areas.',
    location: 'Andheri East, Mumbai',
    status: 'Upcoming',
    totalUnits: 250,
    unitsSold: 0,
    area: '5 Acres',
    completedYear: null,
    expectedCompletion: '2029',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
    ],
    highlights: ['Grade A Offices', 'Retail Podium', 'Food Court', 'Direct Metro Access'],
    timeline: [
      { year: '2025', event: 'Expected Groundbreaking' },
      { year: '2027', event: 'Expected Core Completion' },
      { year: '2029', event: 'Expected Handover' }
    ],
  },
  {
    id: 'proj-4',
    slug: 'rk-malad-heights',
    title: 'RK Malad Heights',
    description: 'Premium residential towers offering a perfect blend of luxury and convenience. Located near the upcoming metro line with world-class podium amenities.',
    location: 'Malad West, Mumbai',
    status: 'Under Construction',
    totalUnits: 400,
    unitsSold: 250,
    area: '7 Acres',
    completedYear: null,
    expectedCompletion: '2028',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
    ],
    highlights: ['50+ Amenities', 'Rooftop Lounge', 'Olympic Size Pool', 'Metro Connectivity'],
    timeline: [
      { year: '2024', event: 'Project Launched' },
      { year: '2025', event: 'Podium Construction Completed' },
      { year: '2028', event: 'Expected Handover' }
    ],
    featured: false,
  },
  {
    id: 'proj-5',
    slug: 'rk-signature-business-park',
    title: 'RK Signature Business Park',
    description: 'An iconic commercial destination for global enterprises. Platinum LEED certified building with integrated smart technologies and sustainable design.',
    location: 'BKC, Mumbai',
    status: 'Upcoming',
    totalUnits: 150,
    unitsSold: 0,
    area: '3 Acres',
    completedYear: null,
    expectedCompletion: '2030',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200'
    ],
    highlights: ['LEED Platinum', 'Smart Building tech', 'Helipad', 'Retail Boulevard'],
    timeline: [
      { year: '2026', event: 'Expected Groundbreaking' },
      { year: '2028', event: 'Expected Structure Completion' },
      { year: '2030', event: 'Expected Delivery' }
    ],
    featured: true,
  }
];
