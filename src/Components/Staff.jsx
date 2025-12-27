import React from "react";

function Staff({ staff }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="p-8 flex flex-col items-center text-center flex-grow">
        {/* Profile Image with 2025 Border Styling */}
        <div className="w-32 h-32 rounded-full p-1 border-2 border-blue-500 mb-6">
          <img
            src={staff.profilePicture}
            alt={staff.fullName}
            className="w-full h-full object-cover rounded-full bg-slate-100"
          />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {staff.fullName}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">
          {staff.role}
        </p>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 italic">
          {staff.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-500 mb-6 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
          <span className="material-symbols-outlined text-sm">school</span>
          {staff.year} • {staff.major}
        </div>

        {/* Email with Material Symbol */}
        <div className="flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-medium mb-8">
          <span className="material-symbols-outlined text-blue-500">mail</span>
          <a
            href={`mailto:${staff.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            {staff.email}
          </a>
        </div>

        {/* Achievements */}
        <div className="w-full border-t border-slate-100 dark:border-slate-800 pt-6">
          <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-4">
            Notable Achievements
          </h4>
          <ul className="flex flex-wrap justify-center gap-2">
            {staff.achievements.map((achiev) => (
              <li
                key={achiev}
                className="text-[10px] font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-100 dark:border-blue-800"
              >
                {achiev}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Staff;
