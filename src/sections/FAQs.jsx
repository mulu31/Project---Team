import React, { useState } from "react";
import { getFAQData } from "../Data/faqs";
import FAQ from "../Components/FAQ";

const LOCAL_STORAGE_KEY = "faqs_data";

export default function FAQs() {
  const [faqs] = useState(() => {
    const storedFaqs = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedFaqs) return JSON.parse(storedFaqs);

    const localFaqs = getFAQData();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localFaqs));
    return localFaqs;
  });

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Everything you need to know about our project and collaboration process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQ key={faq.faqId} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

