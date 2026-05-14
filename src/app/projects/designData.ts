// ========================================
// DESIGN GALLERY DATA
//
// Each folder groups related design work.
// Replace imagePath with your PNG files (drop into /public/design/<folder-id>/)
// Replace driveLink with your actual Google Drive share link.
// ========================================

export interface DesignItem {
    id: string;
    title: string;
    imagePath?: string;  // Path relative to /public, e.g. "/design/posters/poster1.png" (optional)
    images?: string[];   // Array of paths for multi-slide carousels (optional)
    driveLink?: string;  // Google Drive/Canva link opened when image is clicked (optional)
}

export interface DesignFolder {
    id: string;
    name: string;
    description: string;
    accentColor: string; // CSS color for the folder card glow
    icon: string;        // Emoji icon for the folder
    items: DesignItem[];
}

export const designFolders: DesignFolder[] = [
    {
        id: "posters",
        name: "Posters",
        description: "Event posters, campaign visuals & print designs",
        accentColor: "#c9a227",
        icon: "🎨",
        items: [
            {
                id: "thumb-1",
                title: "Introduction Caraousal",
                imagePath: "/design/posters/poster-1.png",
            },
        ],
    },
    {
        id: "carousels",
        name: "Carousels",
        description: "Carousels for Instagram posts",
        accentColor: "#FD8D67",
        icon: "🖼️",
        items: [
            {
                id: "thumb-1",
                title: "Introduction Carousel",
                imagePath: "/design/carousels/Introduction.png",
                driveLink: "https://canva.link/cqr77xsuytt83ii",
            },
            {
                id: "thumb-2",
                title: "Carousal",
                imagePath: "/design/carousels/Lighting.png",
                driveLink: "https://drive.google.com/file/d/1DjR9tXVcFsvlDLf2vnpcq1IF3EwH4HmT/view?usp=drive_link",
            },
            {
                id: "thumb-3",
                title: "Carousal",
                imagePath: "/design/carousels/Backpack.png",
                driveLink: "https://drive.google.com/file/d/1Hd8MtVUZhpLAxv-ytSiF1yp86NGuSr92/view?usp=drive_link",
            },
            {
                id: "thumb-4",
                title: "Carousal",
                imagePath: "/design/carousels/CSR.png",
                driveLink: "https://drive.google.com/file/d/13s-dhIWjiT6qLtyuB4ANGhZL-nneXCt7/view?usp=drive_link",
            },
            {
                id: "thumb-5",
                title: "Carousal",
                imagePath: "/design/carousels/pen.png",
                driveLink: "https://drive.google.com/file/d/1FF8j9dYN3by7uc-bpWaAFe6z0M51NTnI/view?usp=drive_link",
            },
        ],
    },
    {
        id: "social-media",
        name: "Social Media",
        description: "Instagram posts, stories & social graphics",
        accentColor: "#a855f7",
        icon: "📱",
        items: [
            {
                id: "posts",
                title: "Post Design 1",
                driveLink: "https://drive.google.com/drive/folders/1rTCTHiJt2NVCX01rXOjFoHddgHg2dfCc?usp=sharing",
            },
        ],
    },
    {
        id: "event-graphics",
        name: "Event Graphics",
        description: "Banners, invitations & event visual identities",
        accentColor: "#22c55e",
        icon: "🎉",
        items: [
            {
                id: "event-1",
                title: "Event Graphic 1",
                //imagePath: "/design/event-graphics/event-1.webp",
                driveLink: "https://www.figma.com/design/PF1pYJmCdazmhWwRdEOFJc/Brochure-Design?node-id=0-1&t=8UL6IQSgs8A15957-1",
            },
        ],
    },
    {
        id: "figma-designs",
        name: "Some Website designs on Figma",
        description: "Website designs",
        accentColor: "#22c55e",
        icon: "🎉",
        items: [
            {
                id: "figma-1",
                title: "Website Design on Figma",
                //imagePath: "...",
                driveLink: "https://drive.google.com/file/d/1kNC_rmM2Aq143TsiDJqDWW604lY_ccba/view?usp=drive_link",
            },
        ],
    },
];
