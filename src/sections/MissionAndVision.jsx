import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getMissionVisionData,
  getExtendedMissionVisionData,
} from "../Data/missionAndVision";

const MISSION_VISION_KEY = "mission_vision";
const EXTENDED_MISSION_VISION_KEY = "extended_mission_vision";

export default function MissionAndVision() {
  const [data] = useState(() => {
    const stored = localStorage.getItem(MISSION_VISION_KEY);
    if (stored) return JSON.parse(stored);
    const local = getMissionVisionData();
    localStorage.setItem(MISSION_VISION_KEY, JSON.stringify(local));
    return local;
  });

  const [data1] = useState(() => {
    const stored = localStorage.getItem(EXTENDED_MISSION_VISION_KEY);
    if (stored) return JSON.parse(stored);
    const local = getExtendedMissionVisionData();
    localStorage.setItem(EXTENDED_MISSION_VISION_KEY, JSON.stringify(local));
    return local;
  });

  return (
    <section className="py-16 px-4 md:px-8 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Club Missions & Vision
        </h2>

        {/* Main Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-blue-600 text-4xl">
                  {item.type === "mission" ? "target" : "visibility"}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white capitalize">
                  {item.title}
                </h3>
              </div>

              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                {item.subtitle}
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {item.paragraphs.map((para, index) => (
                  <p
                    key={index}
                    className="text-slate-600 dark:text-slate-400 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-white dark:bg-slate-800 rounded-r-lg">
                <p className="italic text-slate-700 dark:text-slate-300 text-sm mb-1">
                  "{item.quote.text}"
                </p>
                <cite className="text-xs font-bold text-slate-500 uppercase not-italic">
                  — {item.quote.author}
                </cite>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Extended Strategy Section */}
        <div className="bg-slate-900 dark:bg-blue-900/20 text-white rounded-3xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-blue-400 text-4xl">
                  rocket_launch
                </span>
                <h3 className="text-3xl font-bold">
                  {data1.title || "Our Strategy"}
                </h3>
              </div>
              <p className="text-blue-300 font-medium">{data1.subtitle}</p>
            </div>
            <div className="md:w-2/3 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {data1[0]?.paragraphs.map((para, index) => (
                  <p key={index} className="text-slate-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <div className="pt-6 border-t border-slate-700">
                <p className="italic text-lg">"{data1[0]?.quote.text}"</p>
                <p className="text-sm font-bold text-blue-400 mt-2">
                  — {data1[0]?.quote.author}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-600 rounded-3xl p-10 text-center text-white shadow-xl shadow-blue-500/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Join Our Journey?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-slate-100 transition-all active:scale-95"
            >
              Register as Individual
            </Link>
            <Link
              to="/"
              className="px-8 py-3 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 border border-blue-400 transition-all active:scale-95"
            >
              Join as Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
