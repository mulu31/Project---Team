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