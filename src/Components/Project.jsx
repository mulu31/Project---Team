import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProjectItem({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [demoIndex, setDemoIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isHovered && project.screenshots?.length > 0) {
      interval = setInterval(() => {
        setDemoIndex((prev) => (prev >= project.screenshots.length - 1 ? 0 : prev + 1));
      }, 800); // Slower for better UX in 2025
    } else {
      setDemoIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.screenshots]);

  return (
    <div
      className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover-lift hover-glow transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Header */}
      <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={isHovered ? project.screenshots[demoIndex] : project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-slate-100 dark:border-slate-700 transition-all duration-300 group-hover:scale-110">
          {project.category}
        </div>
        
        {/* Hover overlay with play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 animate-pulse">
            <span className="material-symbols-outlined text-white text-2xl">
              play_arrow
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed transition-colors duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <Link 
            to={project.links.live} 
            className="flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 hover:translate-x-1 group/link"
          >
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover/link:rotate-45">
              open_in_new
            </span> 
            Live Demo
          </Link>
          <Link 
            to={project.links.github} 
            className="flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-x-1 group/link"
          >
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover/link:scale-110">
              code
            </span> 
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
