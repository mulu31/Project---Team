# Hucisa Club - Project Team Portfolio

## Overview

A modern, responsive web application showcasing the Hucisa Club's Project Team at Haramaya University. This React-based portfolio features stunning animations, smooth transitions, and a comprehensive display of our team's projects, leadership, testimonials, and activities. Built with performance and user experience in mind.

## ✨ Features

### 🎨 **Modern Design & Animations**
- **Smooth Transitions**: Advanced CSS animations with fade-in, slide-up, and scale effects
- **Scroll Animations**: Elements animate into view as users scroll through sections
- **Interactive Hover Effects**: Enhanced hover states with gradient borders and transforms
- **Loading States**: Shimmer effects and skeleton loaders for better perceived performance
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices

### 🌙 **Theme Support**
- **Dark/Light Mode**: Built-in theme toggle with smooth transitions
- **Persistent Preferences**: Theme choice saved in localStorage
- **Consistent Styling**: All components adapt beautifully to both themes

### 📱 **Mobile-First Experience**
- **Centered Mobile Navigation**: Optimized mobile menu with centered elements
- **Touch-Friendly Interface**: Large touch targets and intuitive gestures
- **Auto-Close Menu**: Mobile menu closes automatically after navigation

### 🏠 **Comprehensive Sections**
- **Hero Section**: Dynamic slider showcasing key highlights
- **About Us**: Mission, vision, and club information
- **Leadership Team**: Profiles of our 3 core team leaders
- **Projects**: Interactive showcase of completed and ongoing projects
- **Gallery**: Image carousel with smooth navigation
- **Testimonials**: Member feedback with interactive selection
- **Contact**: Enhanced contact form with validation and information display
- **Updates**: Latest news and announcements

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 19.2.0**: Latest React with modern hooks and concurrent features
- **React Router DOM 7.11.0**: Client-side routing with smooth navigation
- **Vite 7.2.4**: Lightning-fast build tool and development server

### **Styling & UI**
- **Tailwind CSS 3.4.19**: Utility-first CSS framework for rapid development
- **Custom CSS Animations**: Extensive animation library with keyframes
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

### **Development Tools**
- **ESLint**: Code quality and consistency
- **Modern JavaScript**: ES6+ features and best practices

### **Custom Hooks & Context**
- **ThemeContext**: Global theme management
- **useScrollAnimation**: Custom hook for scroll-triggered animations
- **useNewsletter**: Newsletter subscription handling

## 🚀 Quick Start

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mulu31/Project---Team.git
   cd hucisa-project-team
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

### **Build for Production**
```bash
npm run build
npm run preview  # Preview production build
```

## 🎯 Usage & Navigation

### **For Visitors**
- **Explore Sections**: Navigate through different sections using the responsive navbar
- **View Projects**: Browse our portfolio of completed and ongoing projects
- **Meet the Team**: Learn about our leadership team and their expertise
- **Read Testimonials**: See feedback from our community members
- **Contact Us**: Use the enhanced contact form to get in touch
- **Theme Toggle**: Switch between light and dark modes for comfortable viewing
- **Mobile Experience**: Enjoy the optimized mobile interface with centered navigation

### **Key Interactions**
- **Scroll Animations**: Elements animate as you scroll through the page
- **Hover Effects**: Interactive hover states on cards and buttons
- **Gallery Navigation**: Use arrow buttons or dots to navigate through images
- **Testimonial Selection**: Click on member names to read their feedback
- **Newsletter Signup**: Subscribe to stay updated with our latest news

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── FAQ.jsx         # FAQ component
│   ├── Footer.jsx      # Site footer with links
│   ├── Navbar.jsx      # Responsive navigation bar
│   ├── Project.jsx     # Individual project card
│   ├── Staff.jsx       # Staff member profile card
│   └── Update.jsx      # News update component
├── Data/               # Static data and content
│   ├── about.js        # About section content
│   ├── contactInfo.js  # Contact information
│   ├── faqs.js         # Frequently asked questions
│   ├── missionAndVision.js # Mission and vision statements
│   ├── projects.js     # Project portfolio data
│   ├── staffs.js       # Leadership team information
│   ├── testimonials.js # Member testimonials
│   └── updates.js      # News and updates
├── Hooks/              # Custom React hooks
│   ├── ThemeContext.jsx      # Theme management context
│   ├── useNewsletter.js      # Newsletter subscription hook
│   └── useScrollAnimation.js # Scroll animation hook
├── sections/           # Page sections
│   ├── About.jsx       # About us section
│   ├── Contact.jsx     # Contact form and info
│   ├── FAQs.jsx        # FAQ section
│   ├── Gallery.jsx     # Image gallery with carousel
│   ├── Home.jsx        # Hero section with slider
│   ├── MissionAndVision.jsx # Mission and vision
│   ├── Projects.jsx    # Projects showcase
│   ├── Staffs.jsx      # Leadership team section
│   ├── Testimonials.jsx # Member testimonials
│   └── Updates.jsx     # Latest updates
├── App.jsx             # Main application component
├── Router.jsx          # Application routing
├── main.jsx           # Application entry point
└── index.css          # Global styles and animations
```

## 🎨 Animation Features

### **Scroll Animations**
- Elements fade in and slide up as they enter the viewport
- Staggered animations for lists and grids
- Custom `useScrollAnimation` hook for reusable animation logic

### **Hover Effects**
- Gradient borders on cards and buttons
- Scale transforms on interactive elements
- Smooth color transitions

### **Loading States**
- Shimmer effects for content loading
- Skeleton loaders for better UX
- Progressive image loading

### **Transitions**
- Smooth page transitions
- Theme switching animations
- Mobile menu slide animations

## 📱 Responsive Design

- **Mobile-First Approach**: Designed for mobile devices first
- **Breakpoint System**: Tailored layouts for different screen sizes
- **Touch Optimization**: Large touch targets and gesture support
- **Performance**: Optimized images and lazy loading

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🤝 Contributing

We welcome contributions to improve the Hucisa Club Project Team portfolio!

### **How to Contribute**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Contribution Guidelines**
- Follow the existing code style and conventions
- Test your changes thoroughly
- Update documentation if needed
- Keep commits focused and descriptive

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

**Hucisa Club - Project Team**  
Haramaya University, Ethiopia

- **Email**: hucisa.projectteam@haramaya.edu.et
- **Location**: Computer Science Department, Haramaya University
- **Website**: [Visit our portfolio](https://hucisa-project-team.vercel.app)

### **Connect With Us**
- Follow our projects and updates
- Join our community initiatives
- Participate in tech workshops and training

## 🙏 Acknowledgments

- **Haramaya University** - For providing the platform and support
- **Hucisa Club** - For fostering innovation and collaboration
- **React Community** - For the amazing ecosystem and tools
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite** - For the fast and efficient build tool

---

**Built with ❤️ by the Hucisa Club Project Team**
