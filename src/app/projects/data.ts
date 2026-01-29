// ========================================
// PROJECT DATA STRUCTURE
// 
// This file contains all your projects.
// Edit this file to add/remove/update projects.
// ========================================

export interface Project {
    id: string;              // Unique ID (just use "1", "2", "3", etc.)
    slug: string;            // URL-friendly name (e.g., "fintech-dashboard")
    title: string;           // Project name shown on cards
    description: string;     // Short description (1-2 sentences)
    year: string;            // Year completed (e.g., "2024")
    role: string;            // Your role with context (e.g., "2024 · Lead Designer · Web Dashboard")
    gradient: string;        // Background gradient for project card
    categories: string[];    // Tags/categories (e.g., ["Product Design", "Fintech"])
    techStack: string[];     // Technologies used (shown as tags)
    githubUrl?: string;      // Optional: GitHub repo link (for Development projects)
    externalUrl?: string;    // Optional: External link (for Publications - paper URLs)
    domain: "Design" | "Development" | "Publications"; // Category filter
}

// ========================================
// YOUR PROJECTS
// 
// HOW TO ADD A NEW PROJECT:
// 1. Copy an existing project block
// 2. Update all fields with your project info
// 3. Choose the correct domain: "Design", "Development", or "Publications"
// 4. For Publications: Add externalUrl (paper link)
// 5. For Design/Development: Create a detail page in /projects/[slug]/
// ========================================

export const projects: Project[] = [
    // DESIGN PROJECTS (2)
    {
        id: "1",
        slug: "fintech-dashboard",
        title: "FinanceFlow",
        description: "Personal finance dashboard designed to reduce decision fatigue for young professionals managing multiple accounts. Focused on data hierarchy and actionable insights over visual complexity.",
        year: "2025",
        role: "2025 · Lead Designer · Web Dashboard",
        gradient: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)",
        categories: ["Product Design", "Fintech"],
        techStack: ["Figma", "User Research", "Design System"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Design"
    },
    {
        id: "2",
        slug: "travel-app",
        title: "Vanderlust",
        description: "Mobile travel app designed to reduce decision fatigue for solo travelers. Prioritizes spontaneous discovery over endless scrolling through reviews and options.",
        year: "2024",
        role: "2024 · UX/UI Designer · Mobile App",
        gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
        categories: ["Mobile App", "Travel"],
        techStack: ["Figma", "Prototyping", "User Testing"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Design"
    },

    // DEVELOPMENT PROJECTS (2)
    {
        id: "3",
        slug: "health-tracker",
        title: "Vitality",
        description: "Health tracking web app built to encourage positive habits without overwhelming users with data. Focused on progressive disclosure and contextual insights.",
        year: "2024",
        role: "2024 · Frontend Developer · Web App",
        gradient: "linear-gradient(135deg, #f0fdf4 0%, #16a34a 100%)",
        categories: ["Web App", "Health"],
        techStack: ["Vue.js", "Pinia", "Chart.js"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Development"
    },
    {
        id: "4",
        slug: "smart-home",
        title: "Lumina Hub",
        description: "IoT control platform designed for accessibility-first smart home management. Built to work seamlessly for users with motor impairments and visual limitations.",
        year: "2024",
        role: "2024 · Full-Stack Developer · IoT Platform",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        categories: ["IoT", "Accessibility"],
        techStack: ["React", "Socket.io", "Node.js"],
        githubUrl: "https://github.com/Arya-K21",
        domain: "Development"
    },

    // PUBLICATIONS (2)
    {
        id: "5",
        slug: "ai-ux-research-paper",
        title: "AI-Driven UX Research",
        description: "Research paper exploring how AI tools can augment (not replace) qualitative user research. Published at HCI Conference 2024. Focused on ethical implications and practical frameworks.",
        year: "2024",
        role: "2024 · Research Paper · HCI Conference",
        gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        categories: ["Research", "AI", "UX"],
        techStack: ["Research", "Data Analysis", "ML"],
        externalUrl: "https://arxiv.org", // Replace with actual paper URL
        domain: "Publications"
    },
    {
        id: "6",
        slug: "design-systems-accessibility",
        title: "Accessible Design Systems",
        description: "Framework for building inclusive design systems that scale across organizations. Published at Design Conference 2023. Includes audit tools and implementation guidelines.",
        year: "2023",
        role: "2023 · Research Paper · Design Conference",
        gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
        categories: ["Research", "Accessibility", "Design Systems"],
        techStack: ["Research", "Case Studies", "Framework"],
        externalUrl: "https://arxiv.org", // Replace with actual paper URL
        domain: "Publications"
    },
];