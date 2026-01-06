import { useState } from "react";
import { getAboutClubData } from "../Data/about";
import { useScrollAnimation, useStaggeredAnimation } from "../Hooks/useScrollAnimation";

const LOCAL_STORAGE_KEY = "about_club";

export default function About() {
  const [data] = useState(() => {
    const storedAboutData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedAboutData) return JSON.parse(storedAboutData);

    const localAboutData = getAboutClubData()[0];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localAboutData));
    return localAboutData;
  });

  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [descRef, descVisible] = useScrollAnimation(0.2);
  const [statsRef, visibleStats] = useStaggeredAnimation(5, 150);

  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">
            Discovery
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
            About {data.clubName}
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 italic transition-colors duration-300">
            "{data.tagline}"
          </p>
        </div>

        {/* Description Text */}
        <div 
          ref={descRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {data.description.map((desc, index) => (
            <div 
              key={index} 
              className={`p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover-lift hover-glow transition-all duration-800 ${
                descVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Grid - Responsive and Modern */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Active Members */}
          <StatCard 
            icon="group" 
            label="Active Members" 
            value={`${data.statistics.totalMembers}+`}
            isVisible={visibleStats.has(0)}
            delay={0}
          />

          {/* Projects */}
          <StatCard 
            icon="account_tree" 
            label="Total Projects" 
            value={`${data.statistics.totalProjects}+`}
            isVisible={visibleStats.has(1)}
            delay={150}
          />

          {/* Partners */}
          <StatCard 
            icon="handshake" 
            label="Total Partners" 
            value={data.statistics.totalPartners}
            isVisible={visibleStats.has(2)}
            delay={300}
          />

          {/* Hackathons */}
          <StatCard 
            icon="trophy" 
            label="Hackathon Wins" 
            value={data.statistics.hackathonWins}
            isVisible={visibleStats.has(3)}
            delay={450}
          />

          {/* Revenue */}
          <StatCard 
            icon="payments" 
            label="Total Revenue" 
            value={`${data.statistics.totalRevenueGenerated}+`}
            isVisible={visibleStats.has(4)}
            delay={600}
          />
          
        </div>
      </div>
    </section>
  );
}

/**
 * Enhanced Stat Card Component with animations
 */
function StatCard({ icon, label, value, isVisible, delay }) {
  return (
    <div 
      className={`flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover-lift hover-glow group cursor-pointer transition-all duration-800 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-4xl mb-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
        {icon}
      </span>
      <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1 text-center transition-colors duration-300">
        {label}
      </h4>
      <span className="text-2xl font-black text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
        {value}
      </span>
    </div>
  );
}
