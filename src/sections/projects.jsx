import { useState } from "react";
import { getProjectsData } from "../Data/projects";
import Project from "../Components/Project";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";

const LOCAL_STORAGE_KEY = "projects_data";

function Projects() {
  const [projects] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
    const local = getProjectsData();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(local));
    return local;
  });

  const [count, setCount] = useState(4);
  const [filtered, setFiltered] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setCount((prev) => prev + 4);
      setIsLoading(false);
    }, 800);
  };

  const handleFilterChange = (newFilter) => {
    setFiltered(newFilter);
    setCount(4);
  };

  const filteredProjects =
    filtered === "all"
      ? projects
      : projects.filter((p) => p.category === filtered);

  const hasMore = filteredProjects.length > count;

  return (
    <section id="projects" className="py-16 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header & Filter */}
        <div 
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              Achieved Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 transition-colors duration-300">
              Explore our latest digital creations
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover-glow transition-all duration-300">
            <span className="material-symbols-outlined text-slate-400 ml-2 transition-colors duration-300">
              filter_list
            </span>
            <select
              className="bg-transparent text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none pr-4 cursor-pointer transition-colors duration-300"
              value={filtered}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="web">Web Apps</option>
              <option value="app">Mobile Apps</option>
              <option value="automate">Automation</option>
            </select>
          </div>
        </div>

        {/* Project Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.slice(0, count).map((project, index) => (
            <div
              key={project.projectId}
              className={`transition-all duration-800 ${
                gridVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Project project={project} />
            </div>
          ))}
        </div>

        {/* Load More Action */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-bold text-slate-700 dark:text-white hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 active:scale-95 shadow-sm hover-glow disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <span className={`material-symbols-outlined transition-transform duration-300 ${
                isLoading ? 'animate-spin' : 'group-hover:rotate-180'
              }`}>
                {isLoading ? 'sync' : 'autorenew'}
              </span>
              {isLoading ? 'Loading...' : 'Load More Projects'}
            </button>
          </div>
        )}

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">
              search_off
            </span>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No projects found for the selected category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
