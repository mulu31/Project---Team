export function getContactInfo() {
  return [
    {
      contactId: 1,
      clubName: "Project Team, Hucisa Club",
      location: {
        building: "Building 2",
        room: "Room 10",
        address: "Haramaya University Main Campus",
        city: "Dire Dawa, Ethiopia",
        mapLink: "https://maps.google.com/?q=Haramaya+University+Main+Campus+Dire+Dawa",
        coordinates: {
          lat: 9.4064,
          lng: 42.0130,
        },
      },
      contactInfo: [
        "projectteam.hucisa@haramaya.edu.et",
        "hu.cisa@haramaya.edu.et",
        "+251 25 111 2222 (Univ. Extension)",
        "+251 9xx xxx xxx (Club President)",
        "+251 9xx xxx xxx (Club Secretary)",
      ],
      socialLinks: [
        {
          name: "Telegram",
          url: "https://t.me/hucisa",
          icon: "send",
        },
        {
          name: "Instagram",
          url: "https://instagram.com/projectteam_hucisa",
          icon: "photo",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/hucisa",
          icon: "work",
        },
        {
          name: "Facebook",
          url: "https://facebook.com/groups/projectteamhucisa",
          icon: "group",
        },
        {
          name: "GitHub",
          url: "https://github.com/hucisa",
          icon: "code",
        },
        {
          name: "Gmail",
          url: "mailto:projectteamhucisa@gmail.com",
          icon: "mail",
        },
      ],
      officeHours: [
        {
          day: "Monday & Wednesday",
          time: "4:00 PM - 6:00 PM",
          note: "Weekly club meetings (Building 2, Room 10)",
        },
        {
          day: "Tuesday & Thursday",
          time: "5:00 PM - 7:00 PM",
          note: "Training sessions & project work",
        },
        {
          day: "Friday",
          time: "2:00 PM - 4:00 PM",
          note: "Industry guest sessions",
        },
      ],
      quickLinks: [
        {
          text: "Join Our Team",
          url: "/join",
          icon: "person_add",
        },
        {
          text: "Training Schedule",
          url: "/training",
          icon: "calendar_month",
        },
        {
          text: "Upwork Guide",
          url: "/upwork-guide",
          icon: "work",
        },
        {
          text: "Company Partners",
          url: "/partners",
          icon: "handshake",
        },
        {
          text: "Skill Resources",
          url: "/resources",
          icon: "menu_book",
        },
      ],
    },
  ];
}