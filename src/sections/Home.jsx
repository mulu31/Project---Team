import { useState, useEffect } from "react";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroRef, heroVisible] = useScrollAnimation(0.1);

  // Hero slides data
  const slides = [
    {
      title: "Innovating Tomorrow's Technology",
      subtitle: "Building the Future Together",
      description: "We are a community of passionate developers, designers, and innovators creating cutting-edge solutions that shape the digital landscape.",
      image: "/api/placeholder/1200/600",
      cta: "Explore Our Work"
    },
    {
      title: "Collaborative Excellence",
      subtitle: "Where Ideas Come to Life",
      description: "Join our vibrant community where creativity meets technology. Together, we transform ideas into impactful digital experiences.",
      image: "/api/placeholder/1200/600",
      cta: "Join Our Team"
    },
    {
      title: "Innovation at Scale",
      subtitle: "Pushing Boundaries",
      description: "From web applications to mobile solutions, we deliver innovative projects that make a difference in the digital world.",
      image: "/api/placeholder/1200/600",
      cta: "View Projects"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-all duration-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC40Ij48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      {/* Hero Content */}
      <div 
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            heroVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold">
                <span className="material-symbols-outlined text-lg animate-pulse">
                  bolt
                </span>
                {slides[currentSlide].subtitle}
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                {slides[currentSlide].title.split(' ').map((word, index) => (
                  <span 
                    key={index}
                    className={`inline-block transition-all duration-700 ${
                      heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover-glow overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="material-symbols-outlined transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110 relative z-10">
                  arrow_forward
                </span>
                <span className="relative z-10 tracking-wide">
                  {slides[currentSlide].cta}
                </span>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
              
              <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 text-slate-700 dark:text-slate-200 font-bold rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="material-symbols-outlined transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 relative z-10">
                  play_circle
                </span>
                <span className="relative z-10 tracking-wide">Watch Demo</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-200 dark:border-slate-700">
              {[
                { value: "50+", label: "Projects", icon: "account_tree" },
                { value: "25+", label: "Members", icon: "group" },
                { value: "5+", label: "Awards", icon: "trophy" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                      {stat.icon}
                    </span>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-blue-600 dark:text-blue-400 mb-1 transition-all duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Content */}
          <div className={`relative transition-all duration-1000 ${
            heroVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                      <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400 animate-pulse">
                        hub
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Innovation Hub
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Where technology meets creativity
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center animate-bounce">
                <span className="material-symbols-outlined text-2xl text-yellow-900">
                  star
                </span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-xl flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-xl text-green-900">
                  check_circle
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110"
          >
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">
              chevron_left
            </span>
          </button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 dark:bg-blue-400 w-8' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-110"
          >
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300">
              chevron_right
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <span className="material-symbols-outlined text-2xl">
            keyboard_arrow_down
          </span>
        </div>
      </div>
    </section>
  );
}