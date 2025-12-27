import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Update({ event }) {
  const [isHovered, setIsHovered] = useState(false);
  const [demo, setDemo] = useState(0);

  useEffect(() => {
    let interval;
    if (isHovered && event.screenshots?.length > 0) {
      interval = setInterval(() => {
        setDemo((prev) =>
          prev >= event.screenshots.length - 1 ? 0 : prev + 1
        );
      }, 600); // 2025 standard: 600ms is smoother for transition observation
    }
    return () => clearInterval(interval);
  }, [isHovered, event.screenshots]);

  return (
    <div
      className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={isHovered ? event.screenshots[demo] : event.thumbnail}
          alt={event.title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 text-center">
          <span className="block text-xs font-bold text-blue-600 uppercase tracking-tighter">
            {event.date}
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
            {event.title}
          </h3>
          <span
            className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
              event.status === "Active"
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
            }`}
          >
            {event.status}
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
            <span className="material-symbols-outlined text-lg">
              location_on
            </span>
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
            <span className="material-symbols-outlined text-lg">schedule</span>
            <span>{event.time}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            {event.category}
          </span>
          <Link
            to={event.registrationLink}
            className="flex items-center gap-1 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all active:scale-95"
          >
            Enroll{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
