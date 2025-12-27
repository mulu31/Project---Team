import React, { useState, useEffect } from "react";
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
      className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Header */}
      <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={isHovered ? project.screenshots[demoIndex] : project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-600 border border-slate-100 dark:border-slate-700">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <Link 
            to={project.links.live} 
            className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">open_in_new</span> Live Demo
          </Link>
          <Link 
            to={project.links.github} 
            className="flex items-center gap-1 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">code</span> GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
