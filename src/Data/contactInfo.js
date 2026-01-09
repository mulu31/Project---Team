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
        mapLink: "https://maps.google.com/?q=Haramaya+University+Main+Campus+Haramaya+University+Dire+Dawa+Ethiopia",
        coordinates: {
          lat: 9.4064,
          lng: 42.0130,
        },
      },
      contactInfo: [
        "https://github.com/hucisa",
        "abdulfetahjemal7se@gmail.com",
        "+251 961 219 838 (Hucisa Team Head)",
        "+251 945 618 348 (Club President)",
        "+251 906 260 008 (Club Secretary)",
      ],
      socialLinks: [
        {
          name: "Telegram",
          url: "https://t.me/hucisa",
          icon: "send",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/company/hucisa",
          icon: "work",
        },
        {
          name: "GitHub",
          url: "https://github.com/hucisa",
          icon: "code",
        },
        {
          name: "Gmail",
          url: "mailto:abdulfetahjemal7se@gmail.com",
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