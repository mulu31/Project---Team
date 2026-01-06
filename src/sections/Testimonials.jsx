import { useState } from "react";
import { getTestimonialsData } from "../Data/testimonials";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";

const LOCAL_STORAGE_KEY = "testimonials_data";

export default function Testimonials() {
  const [data] = useState(() => {
    const storedTestimonials = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTestimonials) return JSON.parse(storedTestimonials);

    const localTestimonials = getTestimonialsData();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localTestimonials));
    return localTestimonials;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const currentTestimonial = data[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block">
            <div className="w-12 h-1 bg-orange-500 mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Members Testimonial
            </h2>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Member List */}
          <div className="space-y-4">
            {data.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.testimonialId}
                onClick={() => setCurrentIndex(index)}
                className={`group flex items-center gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] ${
                  index === currentIndex
                    ? 'bg-white dark:bg-slate-800 shadow-xl border-2 border-orange-200 dark:border-orange-800 transform scale-[1.02]'
                    : 'hover:bg-white/70 dark:hover:bg-slate-800/70 hover:shadow-lg'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-700 shadow-lg transition-all duration-300 group-hover:ring-orange-200 dark:group-hover:ring-orange-800">
                    <img
                      src={testimonial.profilePicture || '/api/placeholder/64/64'}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {index === currentIndex && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full border-3 border-white dark:border-slate-800 flex items-center justify-center animate-pulse">
                      <span className="material-symbols-outlined text-white text-xs">
                        check
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1 transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2 truncate">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm transition-all duration-300 ${
                            i < Math.floor(testimonial.stars)
                              ? 'text-orange-500 scale-110'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {testimonial.stars} • {new Date(testimonial.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
                <div className={`transition-all duration-300 ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}>
                  <span className="material-symbols-outlined text-orange-500 text-2xl">
                    arrow_forward_ios
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Testimonial Text */}
          <div className="relative">
            <div className="card-glass p-10 relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-6xl text-orange-500/20 dark:text-orange-400/20">
                <span className="material-symbols-outlined text-inherit">
                  format_quote
                </span>
              </div>
              
              <div className="relative z-10">
                <div className="mb-8 min-h-[120px] flex items-center">
                  <p className="text-xl italic text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    "{currentTestimonial?.feedback}"
                  </p>
                </div>
                
                {/* Author info */}
                <div className="flex items-center gap-4 mb-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <img
                    src={currentTestimonial?.profilePicture || '/api/placeholder/48/48'}
                    alt={currentTestimonial?.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-200 dark:ring-orange-800"
                  />
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white">
                      {currentTestimonial?.name}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {currentTestimonial?.role}
                    </p>
                  </div>
                </div>
                
                {/* Enhanced Pagination Dots */}
                <div className="flex items-center gap-3">
                  {data.slice(0, 3).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative transition-all duration-500 hover:scale-125 ${
                        index === currentIndex
                          ? 'w-12 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg'
                          : 'w-4 h-4 bg-gray-300 dark:bg-gray-600 hover:bg-orange-300 dark:hover:bg-orange-700 rounded-full shadow-md'
                      }`}
                    >
                      {index === currentIndex && (
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-full animate-float"></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-orange-500/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
