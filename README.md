# Project Team v2

## Overview

Project Team v2 is a comprehensive web application built for the Tech Innovators Club, designed to showcase team members, projects, testimonials, and provide an admin dashboard for content management. This React-based application features a modern, responsive design with dark/light theme support, user authentication, and dynamic content management.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Theme Support**: Built-in dark and light mode toggle for better user experience
- **Admin Dashboard**: Secure admin panel for managing content, staff, projects, and testimonials
- **User Authentication**: Login system for admin access
- **Dynamic Content**: Easily manageable sections including:
  - Team member profiles and staff information
  - Project showcases with detailed descriptions
  - Customer testimonials
  - FAQ section
  - Mission and vision statements
  - Contact information with interactive map
- **Newsletter Subscription**: Integrated newsletter signup functionality
- **Toast Notifications**: User-friendly notifications for actions and feedback

## Tech Stack

### Frontend

- **React 19.2.0**: Modern JavaScript library for building user interfaces
- **React Router DOM 7.11.0**: Declarative routing for React applications
- **Tailwind CSS 3.4.19**: Utility-first CSS framework for rapid UI development
- **Vite 7.2.4**: Fast build tool and development server

### Development Tools

- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing tool
- **Autoprefixer**: CSS vendor prefixing

### Additional Libraries

- **React Toastify 11.0.5**: Toast notifications for React

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/project-team-v2.git
   cd project-team-v2
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Usage

### For Visitors

- Browse team members, projects, and testimonials
- View contact information and location on the map
- Subscribe to the newsletter
- Toggle between light and dark themes

### For Admins

1. Navigate to the admin login page
2. Enter your credentials
3. Access the dashboard to:
   - Add/edit/delete staff members
   - Manage projects and their details
   - Update testimonials
   - Modify FAQs and other content

## Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── AdminNavbar.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Message.jsx
│   ├── Navbar.jsx
│   ├── Project.jsx
│   ├── Staff.jsx
│   ├── Testimonial.jsx
│   └── Update.jsx
├── Data/               # Static data files
│   ├── about.js
│   ├── contactInfo.js
│   ├── faqs.js
│   ├── member.js
│   ├── missionAndVision.js
│   ├── projects.js
│   ├── staffs.js
│   ├── team.js
│   ├── testimonials.js
│   └── updates.js
├── Hooks/              # Custom React hooks
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── useNewsletter.js
├── pages/              # Page components
│   ├── AdminDashboard.jsx
│   └── adminLogin.jsx
├── sections/           # Section components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── FAQs.jsx
│   ├── MissionAndVision.jsx
│   ├── projects.jsx
│   ├── Staffs.jsx
│   ├── Testimonials.jsx
│   └── Updates.jsx
├── service/            # Service files
│   └── team.js
├── App.css
├── App.jsx
├── index.css
├── main.jsx
└── User.jsx
```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run lint`: Run ESLint for code linting
- `npm run preview`: Preview the production build locally

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Tech Innovators Club

- Email: contact@techinnovators.edu
- Location: Innovation Center, Room 301, 123 Tech Avenue, University Campus, San Francisco, CA 94107
- [View on Map](https://maps.google.com/?q=Innovation+Center+University+Campus+San+Francisco)

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and components inspired by modern web design practices
