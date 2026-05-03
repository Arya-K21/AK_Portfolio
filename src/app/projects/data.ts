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
    githubUrl?: string;      // Optional: GitHub repo link
    externalUrl?: string;    // Optional: External link (for Publications)
    abstract?: string;       // Optional: Long abstract for detailed view
    domain: "Design" | "Development" | "Publications";
}

export const projects: Project[] = [

    // ── DESIGN ──────────────────────────────────────────────────────────────
    {
        id: "1",
        slug: "musikko",
        title: "Musikko",
        description: "A bold, free music streaming app designed to eliminate the trade-off between a premium feel and accessibility. Focused on seamless browsing, personalized discovery, and non-intrusive monetization.",
        year: "2025",
        role: "2025 · UI/UX Case Study · Mobile App",
        gradient: "linear-gradient(135deg, #c9a227 0%, #1a1a1a 100%)",
        categories: ["Product Design", "Mobile App", "Music"],
        techStack: ["Figma", "User Research", "Prototyping", "Design Systems"],
        domain: "Design"
    },
    // 🔧 Add more Design projects here

    // ── DEVELOPMENT ──────────────────────────────────────────────────────────
    {
        id: "2",
        slug: "space-debris-dashboard",
        title: "Space Debris Dashboard",
        description: "A real-time web dashboard built as a PBL-IV project to visualize and track space debris data. Designed with a focus on data clarity and interactive charts for non-specialist audiences.",
        year: "2026",
        role: "2026 · Full-Stack Developer · Data Dashboard",
        gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
        categories: ["Web App", "Data Visualization"],
        techStack: ["JavaScript", "HTML/CSS", "Chart.js", "APIs"],
        githubUrl: "https://github.com/Arya-K21/space_debris_dashboard",
        domain: "Development"
    },
    {
        id: "3",
        slug: "heart-risk-app",
        title: "Heart Risk Predictor",
        description: "An AI-powered web app that assesses cardiovascular risk based on user health inputs. Built with a clean, calm UI to make sensitive medical data approachable and easy to understand.",
        year: "2026",
        role: "2026 · Frontend Developer · Health Tech",
        gradient: "linear-gradient(135deg, #f953c6 0%, #b91d73 100%)",
        categories: ["Web App", "Health Tech", "AI"],
        techStack: ["JavaScript", "HTML/CSS", "Machine Learning"],
        githubUrl: "https://github.com/Arya-K21/heart-risk-app",
        domain: "Development"
    },
    {
        id: "4",
        slug: "windows-clone",
        title: "Windows OS Clone",
        description: "A fully interactive browser-based Windows OS clone built in TypeScript. Features a working taskbar, draggable windows, and a functional file explorer — all running in the browser.",
        year: "2025",
        role: "2025 · Frontend Developer · Browser Simulation",
        gradient: "linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)",
        categories: ["Web App", "Creative Dev"],
        techStack: ["TypeScript", "React", "Next.js", "CSS Modules"],
        githubUrl: "https://github.com/Arya-K21/Windows_Clone",
        domain: "Development"
    },
    {
        id: "5",
        slug: "library-web-app",
        title: "Library Management System",
        description: "A full-stack library management web application with book inventory, issue/return workflows, and a modern 'Sea Vibes' UI. Built with Java Servlets and JSP on Apache Tomcat.",
        year: "2026",
        role: "2026 · Full-Stack Developer · Web App",
        gradient: "linear-gradient(135deg, #43b89c 0%, #2c7873 100%)",
        categories: ["Web App", "Full-Stack"],
        techStack: ["Java", "JSP", "Servlets", "MySQL", "Tomcat"],
        githubUrl: "https://github.com/Arya-K21/MPJ_LibraryWebApp",
        domain: "Development"
    },
    // 🔧 Add more Development projects here

    // ── PUBLICATIONS ─────────────────────────────────────────────────────────
    {
        id: "6",
        slug: "automotive-cybersecurity",
        title: "Automotive Cybersecurity",
        description: "A book chapter exploring the dual forces of modern automotive cybersecurity: the vulnerabilities of Connected Autonomous Vehicles (CAVs) and the technological opportunities to secure them.",
        abstract: `The evolution of the transportation sector and mobility solutions for the future is not just a reinvention — it is a revolution. The automotive industry is a vast and complex sector, globally. It is one of the technical industries at the forefront of economic as well as technological markets. The continuous developments in this area have led to the evolution from veteran vehicles to AI-operated automobiles. Modern Automobiles are designed to integrate artificial intelligence, complex technologies, user safety, and various environmental aspects. Nowadays the word 'Connected Autonomous Vehicles (CAV)' is used for automobiles connected to the internet, directly or indirectly. These vehicles employ various external systems and sophisticated System-on-chip (SoC) systems to interact with surroundings and make smart choices. However, with greater connectivity and autonomy, the vulnerability of these vehicles to cyber-attacks is an addressable fact. In this chapter, we discuss the dual forces acting in the field of Automotive Cybersecurity: Challenges faced in designing, manufacturing, and meeting public demand, and Opportunities that are being presented every day in this evolving field.`,
        year: "2025",
        role: "2025 · Book Chapter · Accepted · Awaiting Publication",
        gradient: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
        categories: ["Research", "Cybersecurity", "AI"],
        techStack: ["Research", "Data Analysis"],
        //externalUrl: "https://arxiv.org/your-paper-link",
        domain: "Publications"
    },
];