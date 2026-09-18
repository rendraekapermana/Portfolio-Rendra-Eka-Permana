import rendraProfileImg from '../assets/images/rendra_profile_1789711274813.jpg';
import shapeLifeImg from '../assets/images/shape_life_mockup_1789711292921.jpg';
import sreDesktopImg from '../assets/images/sre_desktop_mockup_1789711307154.jpg';
import agrivaMobileImg from '../assets/images/agriva_mockup_1789711322348.jpg';

export const HERO_DATA = {
  pillText: 'INFORMATION TECHNOLOGY · WEB DEVELOPMENT',
  name: 'Rendra.',
  greeting: "Hi, I'm",
  tagline: 'I build digital experiences with technology, design, and curiosity. Bridging architectural rigor with human-centered liquid interfaces.',
  profileImage: rendraProfileImg,
  badges: [
    { type: 'code', text: 'Web Development', position: 'top-left' },
    { type: 'status', text: 'Available for Opportunities', position: 'top-right' },
    { type: 'location', text: 'Indonesia · 2026', position: 'bottom-left' }
  ],
  primaryCta: 'Explore My Work',
  secondaryCta: 'Get in Touch'
};

export const ABOUT_DATA = {
  pill: 'PHILOSOPHIES & FOCUS',
  title: 'More than just code.',
  paragraphs: [
    'Building software should be an act of translation: turning abstract system architectures into instinctive, effortless interfaces that feel tangible and lightweight. I believe the best applications marry rock-solid backend primitives with fluid visual poise.',
    'Currently working at the intersection of modern JavaScript frameworks, distributed data storage, and micro-interaction ergonomics. Every component is treated as an optical instrument—crafted with mathematical alignment, disciplined hierarchy, and intentional restraint.'
  ],
  meta: [
    { label: 'EDUCATION', value: 'Universitas Brawijaya' },
    { label: 'DOMAIN FOCUS', value: 'Web Applications & Systems' },
    { label: 'LOCATION', value: 'Tangerang Selatan, Indonesia' },
    { label: 'INTERESTS', value: 'Technology · Design · Product' }
  ]
};

export const SKILLS_DATA = [
  {
    name: 'React',
    subtitle: 'Frontend UI Systems & Next.js',
    icon: 'Atom',
    category: 'Frontend',
    brandColor: '#00D8FE'
  },
  {
    name: 'Laravel',
    subtitle: 'Robust backend routing & MVC',
    icon: 'Layers',
    category: 'Backend',
    brandColor: '#FF2D20'
  },
  {
    name: 'JavaScript',
    subtitle: 'Modern ESNext & Runtime logic',
    icon: 'FileCode2',
    category: 'Language',
    brandColor: '#F7DF1E'
  },
  {
    name: 'Node.js',
    subtitle: 'Scalable server-side execution',
    icon: 'Server',
    category: 'Runtime',
    brandColor: '#539E43'
  },
  {
    name: 'Express',
    subtitle: 'High-throughput RESTful routing',
    icon: 'Cpu',
    category: 'Backend',
    brandColor: '#444444'
  },
  {
    name: 'MongoDB',
    subtitle: 'Document stores & Aggregations',
    icon: 'Database',
    category: 'Database',
    brandColor: '#47A248'
  },
  {
    name: 'Supabase',
    subtitle: 'PostgreSQL, Auth & Realtime',
    icon: 'Zap',
    category: 'Backend / DB',
    brandColor: '#3ECF8E'
  },
  {
    name: 'Tailwind CSS',
    subtitle: 'Token systems & Fluid responsiveness',
    icon: 'Wind',
    category: 'Styling',
    brandColor: '#38BDF8'
  }
];

export const PROJECTS_DATA = [
  {
    id: 'shape-your-life',
    num: '01',
    category: 'EDUCATION & SCHOLARSHIP PLATFORM',
    title: 'Shape Your Life',
    description:
      'A high-impact youth education and scholarship platform empowering marginalized Indonesian students toward global education and SDG 4.7. Built with responsive program catalogs, interactive mentorship flows, and publication hubs.',
    tags: ['HTML', 'SCSS', 'Javascript'],
    linkText: 'Explore Project',
    image: shapeLifeImg,
    imageAlt: 'Shape Your Life scholarship platform preview showing students achieving potential',
    layout: 'image-right',
    role: 'Staff Web Developer & UI Lead',
    timeline: 'Sep 2024 - Apr 2025',
    highlights: [
      'Engineered responsive web modules for 5,000+ prospective scholarship applicants',
      'Designed interactive mentorship application workflow with real-time field validation',
      'Optimized Core Web Vitals to achieve 98+ PageSpeed performance scores',
      'Aligned with UNESCO SDG 4.7 educational benchmarks'
    ]
  },
  {
    id: 'sre-universitas-brawijaya',
    num: '02',
    category: 'WEB PLATFORM & SUSTAINABILITY',
    title: 'SRE Universitas Brawijaya',
    description:
      'Official digital platform for Society of Renewable Energy Universitas Brawijaya. Built to foster renewable energy education, connect 120+ student associates, and showcase green energy initiatives and collaborative research.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
    linkText: 'Explore Website',
    image: sreDesktopImg,
    imageAlt: 'SRE Universitas Brawijaya website displayed on desktop iMac monitor',
    layout: 'image-left',
    role: 'Staff of IT & Web Engineer',
    timeline: 'Sep 2024 - Aug 2025',
    highlights: [
      'Showcased green energy research and collaborative community student initiatives',
      'Integrated member directory and event management pipeline for 120+ student associates',
      'Implemented clean glassmorphism UI with Tailwind token architecture',
      'Deployed on Vercel edge infrastructure with continuous CI/CD pipelines'
    ]
  },
  {
    id: 'agriva-smart-agriculture',
    num: '03',
    category: 'UI/UX DESIGN',
    title: 'Agriva — Smart Agriculture',
    description:
      'Smart agriculture & precision farming mobile platform. Features real-time weather telemetry, sensor monitoring, crop disease diagnostics, and farmer community collaboration.',
    tags: ['FIGMA'],
    linkText: 'Explore Project',
    image: agrivaMobileImg,
    imageAlt: 'Agriva smart farming mobile application screens showing sensor telemetry and crop diagnostics',
    layout: 'image-right',
    role: 'Lead UI/UX Designer',
    timeline: '2024 - 2025',
    highlights: [
      'Comprehensive design system with 80+ modular agricultural telemetry components',
      'Real-time IoT sensor telemetry UI for soil moisture, atmospheric humidity, and temperature',
      'AI-assisted crop disease scanner workflow designed for low-literacy field ergonomics',
      'High-contrast sunlight readability mode tailored for outdoors agricultural use'
    ]
  }
];

export const EXPERIENCES_DATA = [
  {
    id: 'exp-1',
    title: 'Smart City Intern',
    period: 'AUG 2025 – DEC 2025',
    organization: 'Smart ID',
    location: 'Malang City, Indonesia',
    description:
      'Assisted in creating internal modules related to SPBE completion, developed structured step-by-step guides for SPBE documentation, and contributed to company process documentation.',
    tags: ['SPBE Documentation', 'Process Optimization', 'Technical Writing'],
    category: 'work'
  },
  {
    id: 'exp-2',
    title: 'Mobile Developer Intern',
    period: 'AUG 2025 – OCT 2025',
    organization: 'Faculty of Computer Science, Universitas Brawijaya',
    location: 'Malang City, Indonesia',
    description:
      'Maintained BIMO, a Flutter-based academic information system. Re-architected and adapted the interface from mobile-centric into an ergonomic web layout, aligned UI consistency, and conducted interface testing and debugging.',
    tags: ['Flutter', 'Dart', 'UI/UX Adaptation', 'Web Systems'],
    category: 'work'
  },
  {
    id: 'exp-3',
    title: 'Practicum Assistant (Mobile Application Development)',
    period: 'FEB 2025 – JUN 2025',
    organization: 'Faculty of Computer Science, Universitas Brawijaya',
    location: 'Malang City, Indonesia',
    description:
      'Mentored weekly Android practicum sessions using Java and Android Studio, guiding students across Intent, RecyclerView, Firebase, GPS, and REST API integration, while enforcing clean coding standards.',
    tags: ['Android Studio', 'Java', 'Firebase', 'REST APIs', 'Mentorship'],
    category: 'work'
  },
  {
    id: 'exp-4',
    title: 'UI/UX Designer',
    period: 'DEC 2024 – FEB 2025',
    organization: 'Freelance at CANAFA',
    location: 'Malang City, Indonesia',
    description:
      'Designed modern e-commerce web interfaces for a Muslim fashion brand, crafted end-to-end user flows, wireframes, and design system mockups tailored to brand guidelines.',
    tags: ['UI/UX Design', 'Wireframing', 'E-Commerce', 'Design Systems'],
    category: 'work'
  },
  {
    id: 'exp-5',
    title: 'Staff of Information Technology and Multimedia',
    period: 'SEP 2024 – AUG 2025',
    organization: 'Society of Renewable Energy (SRE UB)',
    location: 'Malang City, Indonesia',
    description:
      "Maintained the organization's official web presence, implemented content updates, and ensured digital communication aligned with sustainability publishing goals.",
    tags: ['Web Maintenance', 'Multimedia', 'CMS', 'Sustainability'],
    category: 'organizational'
  },
  {
    id: 'exp-6',
    title: 'Staff Web Developer',
    period: 'SEP 2024 – APR 2025',
    organization: 'Shape Your Life',
    location: 'Malang City, Indonesia',
    description:
      'Engineered and maintained responsive web platforms using HTML, SASS, and JavaScript, translating visual mockups into accessible, high-performance interfaces for youth scholarship initiatives.',
    tags: ['HTML5', 'SASS / SCSS', 'JavaScript', 'Responsive UI'],
    category: 'organizational'
  },
  {
    id: 'exp-7',
    title: 'Staff of Strategic Studies and Action Division',
    period: 'OCT 2022 – AUG 2023',
    organization: 'BEM FILKOM Universitas Brawijaya',
    location: 'Malang City, Indonesia',
    description:
      'Awarded "Best Staff of the Month" (March – May 2023). Collaborated across institutional research, advocacy campaigns, and student data analysis.',
    tags: ['Best Staff Award', 'Strategic Research', 'Organizational Leadership'],
    category: 'organizational'
  }
];
