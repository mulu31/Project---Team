import React, { useState } from "react";
import { getTestimonialsData } from "../Data/testimonials";
import Testimonial from "../Components/Testimonial";

const LOCAL_STORAGE_KEY = "testimonials_data";

export default function Testimonials() {
  const [data] = useState(() => {
    const storedTestimonials = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTestimonials) return JSON.parse(storedTestimonials);

    const localTestimonials = getTestimonialsData();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localTestimonials));
    return localTestimonials;
  });

  const [count, setCount] = useState(4);
  const hasMore = data.length > count;

  const handleLoadMore = () => {
    setCount((prev) => prev + 4);
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {data.slice(0, count).map((test) => (
            <Testimonial key={test.testimonialId} testimonial={test} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-8 py-3 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all active:scale-95 border border-slate-200 dark:border-slate-800"
            >
              <span className="material-symbols-outlined">expand_more</span>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
