import React, { useState } from "react";
import { getUpdatesData } from "../Data/updates";
import Update from "../Components/Update";

const LOCAL_STORAGE_KEY = "updates_data";

export default function Updates() {
  const [data] = useState(() => {
    const storedUpdates = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedUpdates) return JSON.parse(storedUpdates);

    const localUpdates = getUpdatesData();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localUpdates));
    return localUpdates;
  });

  const [count, setCount] = useState(4);
  const hasMore = data.length > count;

  const handleLoadMore = () => {
    setCount((prev) => prev + 4);
  };

  return (
    <section id="updates" className="py-16 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Events & Updates
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Stay updated with our latest activities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {data.slice(0, count).map((event) => (
            <Update key={event.updatesId} event={event} />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full font-bold text-slate-700 dark:text-white hover:border-blue-500 transition-all active:scale-95 shadow-sm"
            >
              <span className="material-symbols-outlined animate-spin-slow">
                autorenew
              </span>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
