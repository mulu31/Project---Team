import { useState } from "react";
import Staff from "../Components/Staff";
import { getLeadersData } from "../Data/staffs";
import { useScrollAnimation, useStaggeredAnimation } from "../Hooks/useScrollAnimation";

const LOCAL_STORAGE_KEY = "staffs_data";

function Staffs() {
  const [data] = useState(() => {
    const storedStaffs = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedStaffs) {
      return JSON.parse(storedStaffs);
    }

    const localStaffs = getLeadersData();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStaffs));

    return localStaffs;
  });

  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, visibleItems] = useStaggeredAnimation(data.length, 150);

  return (
    <section id="team" className="py-20 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-4 mx-auto"></div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Meet the passionate leaders driving innovation and excellence in our tech community
            </p>
          </div>
        </div>

        {/* Enhanced Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {data.map((staff, index) => (
            <div
              key={staff.id}
              className={`transition-all duration-800 ${
                visibleItems.has(index) 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Staff staff={staff} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staffs;
