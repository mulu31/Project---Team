export const getLeadersData = () => {
    return [
        {
            id: 1,
            profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            fullName: "Alex Chen",
            role: "President & Founder",
            socialLinks: {
                telegram: "https://t.me/alexchen",
                linkedIn: "https://linkedin.com/in/alexchen",
                github: "https://github.com/alexchen"
            },
            description: "Computer Science senior with 3+ years of leadership experience. Founded Tech Innovators Club in 2022. Specializes in AI/ML and full-stack development. Led the club to win 4 national hackathons and establish partnerships with Google, Microsoft, and Amazon. Passionate about creating inclusive tech communities and mentoring junior developers.",
            expertise: ["AI/ML", "Leadership", "Full-Stack Development", "Public Speaking"],
            year: "Senior",
            major: "Computer Science",
            email: "alex.chen@techinnovators.edu",
            achievements: [
                "Founded Tech Innovators Club (2022)",
                "Led 4 winning hackathon teams",
                "Established 15+ industry partnerships",
                "Mentored 50+ junior developers"
            ],
            tenure: "2 years"
        },
        {
            id: 2,
            profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b786d4d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            fullName: "Maria Rodriguez",
            role: "VP of Technology",
            socialLinks: {
                telegram: "https://t.me/mariarod",
                linkedIn: "https://linkedin.com/in/mariarodriguez",
                github: "https://github.com/mariarod"
            },
            description: "Software Engineering senior with expertise in full-stack development and cloud architecture. Previously interned at Google and Microsoft. Leads our technical workshops, hackathon preparations, and project mentorship programs. Built our club's project management system and technical curriculum. Passionate about making complex technologies accessible to everyone.",
            expertise: ["React/Next.js", "Cloud Architecture", "System Design", "Technical Mentoring"],
            year: "Senior",
            major: "Software Engineering",
            email: "maria.rodriguez@techinnovators.edu",
            achievements: [
                "Developed club's project management system",
                "Led 20+ technical workshops",
                "Mentored 8 successful project teams",
                "Former Google & Microsoft intern"
            ],
            tenure: "1.5 years"
        },
        {
            id: 3,
            profilePicture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            fullName: "James Wilson",
            role: "VP of Operations",
            socialLinks: {
                telegram: "https://t.me/jameswilson",
                linkedIn: "https://linkedin.com/in/jameswilson",
                github: "https://github.com/jameswilson"
            },
            description: "Business & Technology dual major with exceptional organizational skills. Manages club logistics, sponsorships, event planning, and budget. Organized our largest hackathon with 500+ participants and secured $50k+ in sponsorships. Bridges the gap between technical teams and business stakeholders. Creates sustainable systems for club growth and member engagement.",
            expertise: ["Project Management", "Sponsorship Acquisition", "Event Planning", "Strategic Planning"],
            year: "Junior",
            major: "Business & Technology",
            email: "james.wilson@techinnovators.edu",
            achievements: [
                "Secured $50k+ in sponsorships",
                "Organized 500+ participant hackathon",
                "Built club's operational framework",
                "Increased member retention by 40%"
            ],
            tenure: "1 year"
        }
    //     {
    //         id: 4,
    //         profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    //         fullName: "Robert Kim",
    //         role: "VP of Community",
    //         socialLinks: {
    //             telegram: "https://t.me/robertkim",
    //             linkedIn: "https://linkedin.com/in/robertkim",
    //             github: "https://github.com/robertkim"
    //         },
    //         description: "Computer Engineering junior passionate about building inclusive tech communities. Manages member onboarding, mentorship programs, and community engagement initiatives. Created our peer mentorship program that pairs 100+ students annually. Focuses on diversity, equity, and inclusion in tech. Organized successful networking events with industry partners and alumni.",
    //         expertise: ["Community Building", "Mentorship Programs", "DEI Initiatives", "Public Relations"],
    //         year: "Junior",
    //         major: "Computer Engineering",
    //         email: "robert.kim@techinnovators.edu",
    //         achievements: [
    //             "Created peer mentorship program",
    //             "Increased female participation by 60%",
    //             "Organized 10+ networking events",
    //             "Built alumni network of 200+"
    //         ],
    //         tenure: "1 year"
    //     },
    //     {
    //         id: 5,
    //         profilePicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    //         fullName: "Sophia Lee",
    //         role: "VP of Marketing & Outreach",
    //         socialLinks: {
    //             telegram: "https://t.me/sophialee",
    //             linkedIn: "https://linkedin.com/in/sophialee",
    //             github: "https://github.com/sophialee"
    //         },
    //         description: "Design & Technology major with expertise in digital marketing and brand development. Manages club's social media presence, website, and promotional materials. Increased our online following by 300% and improved event attendance by 50%. Creates engaging content and establishes partnerships with other student organizations. Passionate about telling compelling stories about technology and innovation.",
    //         expertise: ["Digital Marketing", "Brand Strategy", "Content Creation", "UI/UX Design"],
    //         year: "Sophomore",
    //         major: "Design & Technology",
    //         email: "sophia.lee@techinnovators.edu",
    //         achievements: [
    //             "Increased social media following by 300%",
    //             "Redesigned club website and branding",
    //             "Improved event attendance by 50%",
    //             "Established 10+ cross-club partnerships"
    //         ],
    //         tenure: "8 months"
    //     }
    ];
};

// Extended leaders data for additional coverage
export const getExtendedLeaders = () => {
    return [
        {
            id: 6,
            profilePicture: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            fullName: "David Park",
            role: "Technical Lead - AI/ML",
            socialLinks: {
                telegram: "https://t.me/davidpark",
                linkedIn: "https://linkedin.com/in/davidpark",
                github: "https://github.com/davidpark"
            },
            description: "AI Research assistant with focus on machine learning and computer vision. Leads our AI/ML project teams and research initiatives. Published research in ML conferences and contributes to open-source AI projects. Teaches machine learning workshops and mentors students interested in AI careers.",
            expertise: ["Machine Learning", "Computer Vision", "Research", "Python"],
            year: "Senior",
            major: "Artificial Intelligence",
            email: "david.park@techinnovators.edu",
            achievements: [
                "Published AI research papers",
                "Led 5 ML project teams",
                "Created AI curriculum for club",
                "Open-source contributor"
            ],
            tenure: "1 year"
        },
        {
            id: 7,
            profilePicture: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            fullName: "Michael Thompson",
            role: "Technical Lead - Web Development",
            socialLinks: {
                telegram: "https://t.me/michaelthompson",
                linkedIn: "https://linkedin.com/in/michaelthompson",
                github: "https://github.com/michaelthompson"
            },
            description: "Full-stack developer specializing in modern web technologies. Leads our web development workshops and project teams. Previously interned at GitHub and contributed to major open-source projects. Creates comprehensive learning resources and maintains our technical documentation.",
            expertise: ["React/Next.js", "Node.js", "TypeScript", "DevOps"],
            year: "Junior",
            major: "Web Technologies",
            email: "michael.thompson@techinnovators.edu",
            achievements: [
                "Contributed to open-source projects",
                "Led 10+ web development workshops",
                "Built club's technical documentation",
                "Former GitHub intern"
            ],
            tenure: "1.5 years"
        }
    ];
};