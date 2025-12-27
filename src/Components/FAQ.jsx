import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <div className="flex flex-col gap-1">
          <h4 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">
            {faq.question}
          </h4>
          <Link
            to={faq.link}
            onClick={(e) => e.stopPropagation()} // Prevents toggling FAQ when clicking the link
            className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:underline"
          >
            {faq.category}
          </Link>
        </div>

        <span
          className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "close" : "expand_more"}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed pt-3">
              {faq.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
