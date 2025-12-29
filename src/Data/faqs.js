export const getFAQData = () => {
    return [
        {
            faqId: 1,
            question: "How can I join Tech Innovators Club?",
            answer: "Joining our club is simple! We have open membership for all students. You can join by attending our weekly meetings (every Thursday at 6 PM in the Innovation Center), signing up through our website's membership form, or contacting our membership coordinator. No prior experience is required - we welcome students from all majors and skill levels.",
            link: "/join",
            category: "Membership",
            importance: "high",
            lastUpdated: "2024-03-15"
        },
        {
            faqId: 2,
            question: "What kind of projects does the club work on?",
            answer: "Our club works on a diverse range of tech projects including web development (React, Node.js), mobile apps (React Native, Flutter), AI/ML projects (Python, TensorFlow), data science, IoT, and blockchain applications. We have beginner-friendly projects for those new to coding as well as advanced projects for experienced developers. Recent projects include a quantum analytics dashboard, e-commerce platform, and AR campus navigation app.",
            link: "/projects",
            category: "Projects",
            importance: "high",
            lastUpdated: "2024-02-28"
        },
        {
            faqId: 3,
            question: "Do I need coding experience to participate?",
            answer: "Absolutely not! We welcome complete beginners and provide resources to help you get started. We offer weekly workshops, coding tutorials, and mentorship programs. Many of our members started with zero coding experience and have gone on to build impressive projects. We have different tracks for different skill levels, so you can learn at your own pace while working on meaningful projects.",
            link: "/resources/beginner-guide",
            category: "Getting Started",
            importance: "medium",
            lastUpdated: "2024-03-10"
        },
        {
            faqId: 4,
            question: "How can companies collaborate with the club?",
            answer: "We offer several collaboration opportunities for companies: 1) Project sponsorships where companies can propose real-world problems for our members to solve, 2) Guest speaker sessions and workshops, 3) Hackathon sponsorships, 4) Internship and recruitment partnerships, and 5) Research collaborations. We've partnered with companies like Google, Microsoft, and Amazon on various initiatives.",
            link: "/collaborate",
            category: "Partnerships",
            importance: "medium",
            lastUpdated: "2024-01-22"
        }
    ];
};