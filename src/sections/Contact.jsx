import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "../Components/Message";
import { getContactInfo } from "../Data/contactInfo";
import { useNewsletter } from "../Hooks/useNewsletter";

const LOCAL_STORAGE_KEY = "contact_info";

export default function Contact() {
  const [data] = useState(() => {
    const storedContactInfo = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedContactInfo) return JSON.parse(storedContactInfo);

    const localContactInfo = getContactInfo()[0];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localContactInfo));
    return localContactInfo;
  });

  const { email, setEmail, isSubscribed, isLoading, error, handleSubscribe } =
    useNewsletter();

  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center lg:text-left">
          Contact Us
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Message Form */}
          <div className="w-full lg:w-3/5 bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <Message />
          </div>

          {/* Right Side: Contact Info */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-600">
                {data.clubName}
              </h3>

              {/* Location Block */}
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-slate-400 mt-1">
                  location_on
                </span>
                <div className="text-slate-600 dark:text-slate-400">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest mb-1">
                    Location
                  </h4>
                  <p>
                    {data.location.building}, {data.location.room}
                  </p>
                  <p>{data.location.address}</p>
                  <p>{data.location.city}</p>
                </div>
              </div>

              {/* Contact Details Block */}
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-slate-400 mt-1">
                  alternate_email
                </span>
                <div className="text-slate-600 dark:text-slate-400 space-y-1">
                  <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest mb-1">
                    Communication
                  </h4>
                  <p className="text-sm">
                    Primary: {data.location.primaryEmail}
                  </p>
                  <p className="text-sm">Phone: {data.location.phone}</p>
                  <p className="text-sm italic">Fax: {data.location.fax}</p>
                </div>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Office Hours */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-blue-600">
                  schedule
                </span>
                <h4 className="font-bold uppercase text-xs tracking-widest">
                  Office Hours
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.officeHours.map((open, index) => (
                  <div
                    key={index}
                    className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800"
                  >
                    <h5 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {open.day}{" "}
                      <span className="text-blue-600 ml-1">{open.time}</span>
                    </h5>
                    <p className="text-xs text-slate-500 mt-1">{open.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800" />

            {/* Social Links */}
            {/* Social Media Grid */}
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest px-1">
                Connect With Us
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {data.socialLinks.map((link, index) => {
                  // Determine icon based on name (Case-insensitive)
                  const name = (link.name ?? link).toLowerCase();
                  let icon = "link"; // Default icon
                  if (name.includes("facebook")) icon = "facebook";
                  if (name.includes("twitter") || name.includes("x"))
                    icon = "brand_awareness";
                  if (name.includes("instagram")) icon = "photo_camera";
                  if (name.includes("linkedin")) icon = "work";
                  if (name.includes("github")) icon = "code";

                  return (
                    <Link
                      key={index}
                      to={link.url ?? link}
                      className="group flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-500 hover:shadow-md transition-all duration-300"
                    >
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600 transition-colors mb-2">
                        {icon}
                      </span>
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 truncate w-full text-center">
                        {link.name ?? link}
                      </span>
                    </Link>
                  );
                })}
              </div>
              {/* Newsletter Subscription */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-600">
                    mail
                  </span>
                  Stay Connected
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Subscribe to our newsletter for the latest updates and news.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading || isSubscribed}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {isSubscribed ? "check" : isLoading ? "sync" : "send"}
                    </span>
                    {isSubscribed
                      ? "Subscribed!"
                      : isLoading
                      ? "Subscribing..."
                      : "Subscribe"}
                  </button>
                </form>
                {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
                {isSubscribed && (
                  <p className="text-xs text-green-600 mt-2">
                    Thank you for subscribing!
                  </p>
                )}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
