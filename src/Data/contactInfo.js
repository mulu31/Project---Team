export function getContactInfo() {
  return [
    {
      contactId: 1,
      clubName: "Tech Innovators Club",
      location: {
        building: "Innovation Center",
        room: "Room 301",
        address: "123 Tech Avenue, University Campus",
        city: "San Francisco, CA 94107",
        mapLink:
          "https://maps.google.com/?q=Innovation+Center+University+Campus+San+Francisco",
        coordinates: {
          lat: 37.7749,
          lng: -122.4194,
        },
      },

      contactInfo: [
        "contact@techinnovators.edu",
        "info@techinnovators.edu",
        "+1 (555) 123-4567",
        "+1 (555) 987-6543",
        "+1 (555) 123-4568",
      ],
      socialLinks: [
        {
          name: "Discord",
          url: "https://discord.gg/techinnovators",
          icon: "chat",
        },
        {
          name: "Telegram",
          url: "https://t.me/techinnovators",
          icon: "send",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/tech-innovators-club",
          icon: "work",
        },
        {
          name: "GitHub",
          url: "https://github.com/tech-innovators",
          icon: "code",
        },
        {
          name: "Instagram",
          url: "https://instagram.com/techinnovators",
          icon: "photo",
        },
        {
          name: "Twitter",
          url: "https://twitter.com/techinnovators",
          icon: "chat",
        },
        {
          name: "Facebook",
          url: "https://facebook.com/techinnovators",
          icon: "group",
        },
        {
          name: "YouTube",
          url: "https://youtube.com/techinnovators",
          icon: "play_circle",
        },
      ],
      officeHours: [
        {
          day: "Monday - Friday",
          time: "10:00 AM - 4:00 PM",
          note: "Walk-ins welcome",
        },
        {
          day: "Saturday",
          time: "11:00 AM - 3:00 PM",
          note: "By appointment only",
        },
      ],
      quickLinks: [
        {
          text: "Join Our Club",
          url: "/join",
          icon: "person_add",
        },
        {
          text: "Upcoming Events",
          url: "/events",
          icon: "calendar_month",
        },
        {
          text: "Project Gallery",
          url: "/projects",
          icon: "schema",
        },
        {
          text: "Resources",
          url: "/resources",
          icon: "menu_book",
        },
        {
          text: "Donate",
          url: "/donate",
          icon: "volunteer_activism",
        },
      ],
    },
  ];
}

// // Extended contact information for multiple campuses
// export const getExtendedContactInfo = () => {
//   return [
//     {
//       contactId: 2,
//       clubName: "Tech Innovators Club - Downtown Campus",
//       location: {
//         building: "Tech Hub",
//         room: "Suite 205",
//         address: "456 Innovation Street, Downtown",
//         city: "San Francisco, CA 94105",
//         mapLink: "https://maps.google.com/?q=Tech+Hub+Downtown+San+Francisco",
//         coordinates: {
//           lat: 37.7895,
//           lng: -122.3973,
//         },
//       },
//       openDays: [
//         {
//           day: "Monday",
//           time: "4:00 PM - 7:00 PM",
//           activities: ["Industry Talks", "Networking"],
//         },
//         {
//           day: "Wednesday",
//           time: "3:00 PM - 8:00 PM",
//           activities: ["Workshops", "Project Work"],
//         },
//         {
//           day: "Friday",
//           time: "5:00 PM - 9:00 PM",
//           activities: ["Social Events", "Movie Nights"],
//         },
//       ],
//       contactInfo: {
//         primaryEmail: "downtown@techinnovators.edu",
//         phone: "+1 (555) 234-5678",
//         emergencyPhone: "+1 (555) 876-5432",
//       },
//       socialLinks: {
//         discord: "https://discord.gg/techinnovators-downtown",
//         instagram: "https://instagram.com/techinnovators_dt",
//         linkedIn: "https://linkedin.com/company/tech-innovators-downtown",
//       },
//     },
//     {
//       contactId: 3,
//       clubName: "Tech Innovators Club - Online Community",
//       location: {
//         building: "Virtual",
//         room: "Online Platform",
//         address: "Available Worldwide",
//         city: "Online",
//         mapLink: null,
//         coordinates: null,
//       },
//       openDays: [
//         {
//           day: "24/7",
//           time: "Always Open",
//           activities: [
//             "Online Forums",
//             "Virtual Events",
//             "Remote Collaboration",
//           ],
//         },
//       ],
//       contactInfo: {
//         primaryEmail: "online@techinnovators.edu",
//         discord: "https://discord.gg/techinnovators-online",
//       },
//       socialLinks: {
//         discord: "https://discord.gg/techinnovators-online",
//         slack: "https://techinnovators.slack.com",
//         github: "https://github.com/tech-innovators-online",
//         linkedIn: "https://linkedin.com/company/tech-innovators-online",
//       },
//       virtualPlatforms: [
//         {
//           name: "Discord",
//           url: "https://discord.gg/techinnovators-online",
//           purpose: "Main communication hub",
//         },
//         {
//           name: "GitHub",
//           url: "https://github.com/tech-innovators-online",
//           purpose: "Code collaboration",
//         },
//         {
//           name: "Notion",
//           url: "https://techinnovators.notion.site",
//           purpose: "Documentation & Resources",
//         },
//       ],
//     },
//   ];
// };

// export default { getContactInfo };
