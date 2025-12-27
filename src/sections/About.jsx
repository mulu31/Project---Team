import React, { useState } from "react";
import { getAboutClubData } from "../Data/about";

const LOCAL_STORAGE_KEY = "about_club";

export default function About() {
  const [data] = useState(() => {
    const storedAboutData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedAboutData) return JSON.parse(storedAboutData);

    const localAboutData = getAboutClubData()[0];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localAboutData));
    return localAboutData;
  });

  return (
    <section className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">
            Discovery
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            About {data.clubName}
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 italic">
            "{data.tagline}"
          </p>
        </div>

        {/* Description Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {data.description.map((desc, index) => (
            <div 
              key={index} 
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Grid - Responsive and Modern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Active Members */}
          <StatCard 
            icon="group" 
            label="Active Members" 
            value={`${data.statistics.totalMembers}+`} 
          />

          {/* Projects */}
          <StatCard 
            icon="account_tree" 
            label="Total Projects" 
            value={`${data.statistics.totalProjects}+`} 
          />

          {/* Partners */}
          <StatCard 
            icon="handshake" 
            label="Total Partners" 
            value={data.statistics.totalPartners} 
          />

          {/* Hackathons */}
          <StatCard 
            icon="trophy" 
            label="Hackathon Wins" 
            value={data.statistics.hackathonWins} 
          />

          {/* Revenue */}
          <StatCard 
            icon="payments" 
            label="Total Revenue" 
            value={`${data.statistics.totalRevenueGenerated}+`} 
          />
          
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable Stat Card Component for a cleaner main component
 */
function StatCard({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 transition-transform hover:scale-105 duration-200">
      <span className="material-symbols-outlined text-blue-600 text-4xl mb-3">
        {icon}
      </span>
      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1 text-center">
        {label}
      </h4>
      <span className="text-2xl font-black text-slate-900 dark:text-white">
        {value}
      </span>
    </div>
  );
}
