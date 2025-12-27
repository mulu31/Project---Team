
// Teams Data (7 teams)
export const getTeamsData = () => {
    return [
        {
            teamId: 1,
            name: "Quantum Developers",
            members: [1, 5, 9, 12], // Alex, David, Ryan, Kevin
            bio: "Building the future with quantum-inspired applications and cutting-edge web technologies.",
            motto: "Code Beyond Limits",
            projects: [1, 5], // Quantum Analytics, Blockchain Voting
            status: "active",
            techStack: ["React", "Node.js", "TypeScript", "AWS"],
            formedDate: "2023-01-15",
            achievements: ["Won 2023 Hackathon", "Published 2 research papers"]
        },
        {
            teamId: 2,
            name: "AI Innovators",
            members: [3, 8, 10, 13], // Michael, Olivia, Sophia, Grace
            bio: "Pushing the boundaries of artificial intelligence and machine learning to solve real-world problems.",
            motto: "Intelligent Solutions for Tomorrow",
            projects: [3, 4, 11], // EcoTrack, MediCare, FoodWise
            status: "active",
            techStack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
            formedDate: "2022-11-01",
            achievements: ["Published ML research", "Won AI competition"]
        },
        {
            teamId: 3,
            name: "Mobile Mavericks",
            members: [4, 7, 11, 14], // Emma, James, Daniel, Brian
            bio: "Creating innovative mobile experiences that combine security, performance, and beautiful design.",
            motto: "Mobile First, Quality Always",
            projects: [3, 6], // EcoTrack, AR Campus Nav
            status: "active",
            techStack: ["React Native", "Flutter", "Firebase", "Docker"],
            formedDate: "2023-02-20",
            achievements: ["App Store featured app", "1000+ downloads"]
        },
        {
            teamId: 4,
            name: "Design Collective",
            members: [2, 6, 9, 13], // Sarah, Lisa, Ryan, Grace
            bio: "Crafting beautiful, user-centered designs that make technology accessible to everyone.",
            motto: "Design with Purpose",
            projects: [1, 2, 10], // Quantum Analytics, SwiftCart, LearnSphere
            status: "active",
            techStack: ["Figma", "Adobe Creative Suite", "Webflow", "Three.js"],
            formedDate: "2023-03-10",
            achievements: ["Design awards", "Client satisfaction 95%"]
        },
        {
            teamId: 5,
            name: "Startup Squad",
            members: [1, 2, 6, 10], // Alex, Sarah, Lisa, Sophia
            bio: "Building minimum viable products and validating startup ideas through rapid prototyping.",
            motto: "Build Fast, Learn Faster",
            projects: [2, 7, 9], // SwiftCart, CodeCollab, FinanceFlow
            status: "active",
            techStack: ["Next.js", "MongoDB", "Stripe", "Docker"],
            formedDate: "2023-04-05",
            achievements: ["Won startup competition", "Secured seed funding"]
        },
        {
            teamId: 6,
            name: "Open Source Heroes",
            members: [1, 5, 7, 9, 12], // Alex, David, James, Ryan, Kevin
            bio: "Contributing to open-source projects and building tools for the developer community.",
            motto: "Code for Everyone",
            projects: [8, 14], // Smart Home IoT, WeatherAI
            status: "inactive",
            techStack: ["Python", "JavaScript", "Docker", "Git"],
            formedDate: "2022-10-01",
            achievements: ["500+ GitHub stars", "Merged to major projects"]
        },
        {
            teamId: 7,
            name: "Research & Development",
            members: [3, 8, 10, 11, 13], // Michael, Olivia, Sophia, Daniel, Grace
            bio: "Exploring emerging technologies and conducting research for academic publications.",
            motto: "Innovate Through Research",
            projects: [4, 11, 13], // MediCare, FoodWise, EventFlow
            status: "active",
            techStack: ["Python", "R", "Jupyter", "LaTeX"],
            formedDate: "2022-09-15",
            achievements: ["3 published papers", "Research grants received"]
        }
    ];
};
