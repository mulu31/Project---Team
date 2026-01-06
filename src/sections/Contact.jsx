import { useState } from "react";
import { getContactInfo } from "../Data/contactInfo";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";

const LOCAL_STORAGE_KEY = "contact_info";

export default function Contact() {
  const [data] = useState(() => {
    const storedContactInfo = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedContactInfo) return JSON.parse(storedContactInfo);

    const localContactInfo = getContactInfo()[0];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localContactInfo));
    return localContactInfo;
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [headerRef, headerVisible] = useScrollAnimation(0.2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Information */}
          <div 
            ref={headerRef}
            className={`transition-all duration-800 ${
              headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-6">
              {/* Visit Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">
                    location_on
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Visit Us
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {data.location.building}, {data.location.room}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {data.location.address}
                  </p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">
                    email
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Email Us
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {data.contactInfo?.[0]}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {data.contactInfo?.[1]}
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">
                    phone
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Call Us
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {data.contactInfo?.[2]}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {data.contactInfo?.[3]}
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-400">
                    schedule
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Office Hours
                  </h4>
                  {data.officeHours?.map((hours, index) => (
                    <p key={index} className="text-slate-600 dark:text-slate-400 text-sm">
                      {hours.day}: {hours.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Contact Form */}
          <div className={`transition-all duration-800 ${
            headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 transition-colors duration-300 group-focus-within:text-orange-500">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="form-input peer"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 transition-colors duration-300 group-focus-within:text-orange-500">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="form-input peer"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 transition-colors duration-300 group-focus-within:text-orange-500">
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="form-input peer"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 transition-colors duration-300 group-focus-within:text-orange-500">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Write your message here..."
                      className="form-input peer resize-none"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                      send
                    </span>
                    <span className="font-semibold tracking-wide">Send Message</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}