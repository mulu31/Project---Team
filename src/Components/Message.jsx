import React, { useState } from "react";

function Message() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh in 2025 standards
    // logic to send to backend
    console.log("Form Submitted:", formData);
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-blue-600">send</span>
        Send us a Message
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
            person
          </span>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-700 dark:text-slate-200 transition-all"
            value={formData.name}
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
            mail
          </span>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-700 dark:text-slate-200 transition-all"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-4 text-slate-400 text-xl">
            chat
          </span>
          <textarea
            placeholder="Put your idea here..."
            rows="4"
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-700 dark:text-slate-200 transition-all resize-none"
            value={formData.message}
            required
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined">forward_to_inbox</span>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Message;
