export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const quickInfo = [
  { title: 'Experience', value: '4+ Years', detail: 'AI & Frontend' },
  { title: 'Projects', value: '24', detail: 'Production builds' },
  { title: 'Tech Stack', value: 'React / AI', detail: 'Full-stack ready' },
];

export const focusAreas = [
  { title: 'AI Chatbots', detail: 'OpenAI, RAG, Pinecone, LangChain orchestration.' },
  { title: 'Computer Vision', detail: 'YOLO, OpenCV pipelines, tracking + analytics.' },
  { title: 'Frontend Engineering', detail: 'React, Vite, Tailwind, design systems.' },
  { title: 'API Backend', detail: 'FastAPI, Flask, secure REST + auth.' },
];

export const skills = {
  Frontend: [
    { name: 'React', level: 92 },
    { name: 'Vite', level: 90 },
    { name: 'Tailwind', level: 94 },
    { name: 'JavaScript', level: 95 },
    { name: 'UI/UX', level: 88 },
  ],
  Backend: [
    { name: 'FastAPI', level: 88 },
    { name: 'Flask', level: 86 },
    { name: 'REST APIs', level: 90 },
    { name: 'Auth & Security', level: 82 },
  ],
  'AI/ML': [
    { name: 'RAG Systems', level: 90 },
    { name: 'LLMs / Prompting', level: 92 },
    { name: 'Pinecone', level: 85 },
    { name: 'YOLO / CV', level: 84 },
    { name: 'Ollama', level: 80 },
  ],
  Tools: [
    { name: 'GitHub', level: 94 },
    { name: 'Docker', level: 86 },
    { name: 'VS Code', level: 96 },
    { name: 'Firebase', level: 82 },
  ],
};

export const projects = [
  {
    title: 'NovaChat AI Chatbot',
    description: 'Multi-channel chatbot with FastAPI, RAG, Pinecone, and Ollama for private models.',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'FastAPI', 'RAG', 'Pinecone', 'Ollama'],
    category: 'AI',
    demo: '#',
    repo: '#',
  },
  {
    title: 'AI Exam Cheating Detection',
    description: 'YOLO + OpenCV pipeline with tracking and alert dashboard for invigilation.',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
    tags: ['YOLO', 'OpenCV', 'Tracking'],
    category: 'Computer Vision',
    demo: '#',
    repo: '#',
  },
  {
    title: 'AI Travel Planner',
    description: 'Personalized itineraries with map SDK integration and recommendation engine.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Maps', 'Recommendations'],
    category: 'Full Stack',
    demo: '#',
    repo: '#',
  },
  {
    title: 'AI Portfolio Generator',
    description: 'Prompt-to-UI builder that ships ready-to-host portfolios with animations.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tags: ['Next.js', 'AI', 'Design'],
    category: 'Frontend',
    demo: '#',
    repo: '#',
  },
];

export const experiences = [
  {
    year: '2025',
    title: 'AI Engineer - Freelance',
    detail: 'Built custom RAG chatbots and analytics dashboards for SaaS teams.',
  },
  {
    year: '2024',
    title: 'Frontend Lead - Hackathons',
    detail: 'Won 2 hackathons with realtime collaboration UIs and AI copilots.',
  },
  {
    year: '2023',
    title: 'Intern - Computer Vision',
    detail: 'Implemented YOLO-based detection, tracking, and alerting pipelines.',
  },
  {
    year: '2022',
    title: 'Certifications',
    detail: 'Azure AI-900, TensorFlow Developer, Meta Frontend Cert.',
  },
];

export const services = [
  {
    title: 'AI Chatbot Development',
    description: 'Conversational AI with retrieval, grounding, and analytics.',
    icon: '🤖',
  },
  {
    title: 'Full Stack Web Apps',
    description: 'From UX to APIs to deployment with CI/CD.',
    icon: '🧭',
  },
  {
    title: 'Computer Vision Systems',
    description: 'Detection, tracking, and video intelligence pipelines.',
    icon: '🎥',
  },
  {
    title: 'UI/UX Frontend Development',
    description: 'Design systems, motion, accessibility, and polish.',
    icon: '✨',
  },
  {
    title: 'API Development + Deployment',
    description: 'FastAPI/Flask services, monitoring, security best practices.',
    icon: '🛠️',
  },
];

export const testimonials = [
  {
    name: 'Sara Kim',
    role: 'Product Lead, SaaS',
    feedback: 'Delivered a polished AI chatbot with analytics in record time. Communication was proactive and clear.',
  },
  {
    name: 'Ishan Verma',
    role: 'CTO, HealthTech',
    feedback: 'Frontend quality is outstanding—responsive, fast, and production-ready. Our team loved the DX improvements.',
  },
  {
    name: 'Priya Nair',
    role: 'Founder, EduTech',
    feedback: 'Built a YOLO-based invigilation system that just works. Great focus on reliability and privacy.',
  },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'in' },
  { label: 'GitHub', href: 'https://github.com', icon: 'gh' },
  { label: 'Email', href: 'mailto:hello@ajay.dev', icon: 'mail' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'ig' },
];

export const contactCards = [
  { label: 'Email', value: 'hello@ajay.dev' },
  { label: 'Location', value: 'Remote / Worldwide' },
  { label: 'Phone', value: '+1 (555) 123-4567' },
];
