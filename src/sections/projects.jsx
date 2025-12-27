import React, { useState } from "react";
import { getProjectsData } from "../Data/projects";
import Project from "../Components/Project";

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

  const handleLoadMore = () => {
    setCount((prev) => prev + 4);
  };

  const filteredProjects =
    filtered === "all"
      ? projects
      : projects.filter((p) => p.category === filtered);

  const hasMore = filteredProjects.length > count;

  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Achieved Projects
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Explore our latest digital creations
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="material-symbols-outlined text-slate-400 ml-2">
              filter_list
            </span>
            <select
              className="bg-transparent text-sm font-semibold text-slate-700 dark:text-slate-200 outline-none pr-4 cursor-pointer"
              value={filtered}
              onChange={(e) => {
                setFiltered(e.target.value);
                setCount(4);
              }}
            >
              <option value="all">All Categories</option>
              <option value="web">Web Apps</option>
              <option value="app">Mobile Apps</option>
              <option value="automate">Automation</option>
            </select>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.slice(0, count).map((project) => (
            <Project key={project.projectId} project={project} />
          ))}
        </div>

        {/* Load More Action */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-bold text-slate-700 dark:text-white hover:border-blue-500 transition-all active:scale-95 shadow-sm"
            >
              <span className="material-symbols-outlined animate-spin-slow">
                autorenew
              </span>
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
