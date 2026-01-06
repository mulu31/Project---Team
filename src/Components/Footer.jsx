import React from "react";
import { getContactInfo } from "../Data/contactInfo";
import { Link } from "react-router-dom";
import { useNewsletter } from "../Hooks/useNewsletter";

export default function Footer() {
  const contact = getContactInfo()[0];
  const { email, setEmail, isSubscribed, isLoading, error, handleSubscribe } =
    useNewsletter();

  return (
    <footer className="w-full bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 py-16 px-4 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
        {/* Section 1: Brand & Socials */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-500 dark:text-blue-400 text-4xl">
              hub
            </span>
            <h3 className="text-2xl font-bold text-white dark:text-slate-100 tracking-tight">
              {contact.clubName}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 dark:text-slate-500 max-w-xs">
            Empowering innovation through collaboration and professional
            excellence since 2025.
          </p>
          <div className="flex flex-wrap gap-3">
            {contact.socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-all"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-xl">
                  {link.icon || "share"}
                </span>
              </a>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="pt-4">
            <p className="text-sm font-medium text-white dark:text-slate-100 mb-3">
              Stay Updated
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-2.5 bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || isSubscribed}
              >
                <span className="material-symbols-outlined text-lg">
                  {isSubscribed ? "check" : isLoading ? "sync" : "send"}
                </span>
                {isSubscribed
                  ? "Subscribed"
                  : isLoading
                  ? "Subscribing..."
                  : "Join"}
              </button>
            </form>
            {error && (
              <p className="text-xs text-red-400 dark:text-red-300 mt-2">
                {error}
              </p>
            )}
            {isSubscribed && (
              <p className="text-xs text-green-400 dark:text-green-300 mt-2">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Section 2: Contact & Hours */}
        <div className="space-y-6">
          <h4 className="text-white dark:text-slate-100 font-bold uppercase text-xs tracking-widest border-b border-slate-800 dark:border-slate-700 pb-2">
            Get In Touch
          </h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-blue-500 dark:text-blue-400">
                location_on
              </span>
              <div className="text-sm">
                <p className="text-slate-100 dark:text-slate-200">
                  {contact.location.building}, {contact.location.room}
                </p>
                <p className="text-slate-400 dark:text-slate-500">
                  {contact.location.address}
                </p>
                <a
                  href={contact.location.mapLink}
                  className="text-blue-400 dark:text-blue-300 hover:underline"
                >
                  {contact.location.city}
                </a>
              </div>
            </div>

            <div className="space-y-2">
              {contact.officeHours.map((open, idx) => (
                <div
                  key={idx}
                  className="flex justify-between text-xs bg-slate-800/50 dark:bg-slate-900/50 p-2 rounded-md"
                >
                  <span className="font-bold text-slate-400 dark:text-slate-500 uppercase">
                    {open.day}
                  </span>
                  <span className="text-blue-300 dark:text-blue-400">
                    {open.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Quick Links */}
        <div className="space-y-6">
          <h4 className="text-white dark:text-slate-100 font-bold uppercase text-xs tracking-widest border-b border-slate-800 dark:border-slate-700 pb-2">
            Navigation
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {contact.quickLinks.map((quick, index) => (
              <Link
                key={index}
                to={quick.url || "/"}
                className="flex items-center gap-2 text-sm hover:text-white dark:hover:text-slate-100 transition-colors group"
              >
                <span className="material-symbols-outlined text-lg text-slate-500 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {quick.icon || "arrow_right_alt"}
                </span>
                {quick.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-600">
        <p>© 2025 {contact.clubName}. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white dark:hover:text-slate-100">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white dark:hover:text-slate-100">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
