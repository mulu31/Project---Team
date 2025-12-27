import React, { useState } from "react";
import Staff from "../Components/Staff";
import { getLeadersData } from "../Data/staffs";

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

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((staff) => (
            <Staff key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Staffs;
