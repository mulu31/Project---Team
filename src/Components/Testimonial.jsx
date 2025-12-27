import React from "react";

export default function Testimonial({ testimonial }) {
  // Logic to render 5 stars based on the rating data
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`material-symbols-outlined text-xl ${
          i < rating ? "text-yellow-500 fill-1" : "text-slate-300 dark:text-slate-700"
        }`}
        style={{ fontVariationSettings: i < rating ? "'FILL' 1" : "'FILL' 0" }}
      >
        star
      </span>
    ));
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {renderStars(testimonial.stars || 5)}
      </div>

      {/* Feedback Quote */}
      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 italic">
        "{testimonial.feedback}"
      </p>

      {/* User Info */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white dark:border-slate-800 shadow-sm">
          <img 
            src={testimonial.profilePicture} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
          {testimonial.name}
        </h4>
        
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-sm text-slate-500 dark:text-slate-500 font-medium">
          <span className="text-blue-600 dark:text-blue-400">{testimonial.role}</span>
          <span className="hidden sm:inline">•</span>
          <span>{testimonial.company}</span>
        </div>
      </div>
    </div>
  );
}
