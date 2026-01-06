import { useState } from "react";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);

  // Gallery data - keeping original structure but with placeholder images
  const galleryItems = [
  {
    id: 1,
    title: "Community Service Image 1",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=500&fit=crop",
    description: "Community service activities and team collaboration"
  },
  {
    id: 2,
    title: "Community Service Image 2",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    description: "Tech innovation and community outreach programs"
  },
  {
    id: 3,
    title: "Community Service Image 3",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=500&fit=crop",
    description: "Team building and community engagement events"
  },
  {
    id: 4,
    title: "Community Service Image 4",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=500&fit=crop",
    description: "Educational workshops and skill development sessions"
  },
  {
    id: 5,
    title: "Community Service Image 5",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop",
    description: "Innovation projects and community impact initiatives"
  }
]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-100 dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Gallery
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Moments captured from our community service activities
          </p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-4"></div>
        </div>
        {/* Gallery Slider */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover-glow opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0"
          >
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 text-xl">
              chevron_left
            </span>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover-glow opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0"
          >
            <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 text-xl">
              chevron_right
            </span>
          </button>

          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-700 aspect-[16/10] shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div 
              className="flex transition-all duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {galleryItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 relative group/slide">
                  {/* Loading placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 dark:from-slate-700 dark:via-slate-600 dark:to-slate-500 animate-shimmer"></div>
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover/slide:scale-105"
                    onLoad={(e) => {
                      e.target.previousSibling.style.display = 'none';
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback for failed images */}
                  <div className="absolute inset-0 bg-slate-600 dark:bg-slate-700 items-center justify-center hidden">
                    <div className="text-center text-white">
                      <span className="material-symbols-outlined text-5xl mb-3 block opacity-50 animate-pulse">
                        image
                      </span>
                      <p className="text-lg font-medium opacity-75">Image unavailable</p>
                    </div>
                  </div>
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover/slide:opacity-80 transition-opacity duration-500" />
                  
                  {/* Content overlay with enhanced animations */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transform translate-y-4 group-hover/slide:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover/slide:translate-y-0 transition-all duration-500 delay-100">
                      {item.title}
                    </h3>
                    <p className="text-base text-white/90 leading-relaxed transform translate-y-4 group-hover/slide:translate-y-0 transition-all duration-500 delay-200">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-6 right-12 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-300"></div>
                </div>
              ))}
            </div>

            {/* Enhanced slide counter */}
            <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold z-10 border border-white/20 shadow-lg">
              <span className="text-white/80">
                {currentSlide + 1}
              </span>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white">
                {galleryItems.length}
              </span>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 z-10">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700 ease-out"
                style={{ width: `${((currentSlide + 1) / galleryItems.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Enhanced Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-500 hover:scale-125 ${
                index === currentSlide
                  ? 'w-10 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg'
                  : 'w-4 h-4 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 rounded-full shadow-md'
              }`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}