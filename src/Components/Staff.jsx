import { useState } from "react";

function Staff({ staff }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover-lift hover-glow transition-all duration-500 h-full">
      {/* Gradient overlay for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8 flex flex-col items-center text-center h-full">
        {/* Enhanced Profile Image */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
            {!imageLoaded && !imageError && (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 animate-pulse"></div>
            )}
            {!imageError && (
              <img
                src={staff.profilePicture}
                alt={staff.fullName}
                className={`w-full h-full object-cover rounded-full transition-all duration-500 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            )}
            {imageError && (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-3xl">
                  person
                </span>
              </div>
            )}
          </div>
          
          {/* Status indicator */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white text-sm">
              check
            </span>
          </div>
        </div>

        {/* Name and Role */}
        <div className="mb-6 space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {staff.fullName}
          </h3>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-sm">
              star
            </span>
            <p className="text-blue-700 dark:text-blue-300 font-bold text-sm uppercase tracking-wider">
              {staff.role}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 italic flex-grow">
          {staff.description}
        </p>

        {/* Academic Info */}
        <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6 bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-xl w-full justify-center transition-all duration-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-700">
          <span className="material-symbols-outlined text-lg text-blue-500 dark:text-blue-400">
            school
          </span>
          <span className="font-bold">{staff.year}</span>
          <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
          <span>{staff.major}</span>
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium mb-8 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl w-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined text-blue-500 dark:text-blue-400">
            mail
          </span>
          <a
            href={`mailto:${staff.email}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 truncate"
          >
            {staff.email}
          </a>
        </div>

        {/* Enhanced Achievements */}
        <div className="w-full border-t border-slate-200 dark:border-slate-700 pt-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="material-symbols-outlined text-orange-500 dark:text-orange-400 text-lg">
              trophy
            </span>
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Achievements
            </h4>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {staff.achievements.map((achiev, index) => (
              <span
                key={achiev}
                className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  index % 3 === 0
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                    : index % 3 === 1
                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                    : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
                }`}
              >
                {achiev}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-10 w-2 h-2 bg-purple-500/30 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
}

export default Staff;