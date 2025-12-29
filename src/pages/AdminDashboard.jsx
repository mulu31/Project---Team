import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMembersData } from "../Data/member";
import { getProjectsData } from "../Data/projects";
import { getTeamsData } from "../Data/team";
import { getUpdatesData } from "../Data/updates";
import AdminNavbar from "../Components/AdminNavbar";
import Footer from "../Components/Footer";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalMembers: 0,
    totalTeams: 0,
    totalUpdates: 0,
  });

  const [recentMembers, setRecentMembers] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentUpdates, setRecentUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    try {
      const projects = getProjectsData();
      const members = getMembersData();
      const teams = getTeamsData();
      const updates = getUpdatesData();

      setStats({
        totalProjects: projects.length,
        totalMembers: members.length,
        totalTeams: teams.length,
        totalUpdates: updates.length,
      });

      setRecentMembers(members.slice(0, 5));
      setRecentProjects(projects.slice(0, 5));
      setRecentUpdates(updates.slice(0, 5));
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (type, id) => {
    navigate(`/${type}/${id}`);
  };

  const handleEdit = (type, id) => {
    navigate(`/${type}/${id}/edit`);
  };

  const statCards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      icon: "folder",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      link: "/projects"
    },
    {
      title: "Total Members",
      value: stats.totalMembers,
      icon: "people",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      link: "/students"
    },
    {
      title: "Total Teams",
      value: stats.totalTeams,
      icon: "groups",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      link: "/teams"
    },
    {
      title: "Events & Updates",
      value: stats.totalUpdates,
      icon: "event",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      link: "/updates"
    }
  ];

  const quickActions = [
    {
      title: "New Project",
      icon: "add_box",
      color: "bg-blue-500",
      link: "/projects/create"
    },
    {
      title: "Add Member",
      icon: "person_add",
      color: "bg-green-500",
      link: "/register"
    },
    {
      title: "Create Team",
      icon: "group_add",
      color: "bg-purple-500",
      link: "/teams/register"
    },
    {
      title: "New Event",
      icon: "event_available",
      color: "bg-orange-500",
      link: "/updates/create"
    },
    {
      title: "Manage Users",
      icon: "manage_accounts",
      color: "bg-gray-500",
      link: "/students"
    },
    {
      title: "Settings",
      icon: "settings",
      color: "bg-indigo-500",
      link: "/admin/settings"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined animate-spin text-4xl text-blue-500">
            progress_activity
          </span>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <AdminNavbar />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8 px-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
            Welcome back, Admin! Here's what's happening today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 px-2">
          {statCards.map((stat, index) => (
            <Link key={index} to={stat.link} className="block">
              <div className={`${stat.bgColor} rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow h-full`}>
                <div className="flex items-center justify-between">
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 truncate">
                      {stat.title}
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-1 sm:mt-2 truncate">
                      {stat.value}
                    </p>
                  </div>
                  <div className="p-2 sm:p-3 rounded-full ml-3 flex-shrink-0">
                    <span className={`material-symbols-outlined text-xl sm:text-2xl ${stat.color}`}>
                      {stat.icon}
                    </span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm text-gray-500">
                  <span>View all</span>
                  <span className="material-symbols-outlined ml-1 text-xs sm:text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2">
          {/* Left Column - Members & Projects */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Recent Members */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="material-symbols-outlined text-green-500 flex-shrink-0">
                    people
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                    Recent Members
                  </h3>
                </div>
                <Link 
                  to="/students" 
                  className="text-xs sm:text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1 whitespace-nowrap flex-shrink-0 ml-2"
                >
                  View all
                  <span className="material-symbols-outlined text-xs sm:text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 max-h-[400px] overflow-y-auto">
                {recentMembers.length === 0 ? (
                  <div className="text-center py-6 sm:py-8">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-gray-400">
                      person_off
                    </span>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">No members found</p>
                    <Link 
                      to="/register" 
                      className="inline-flex items-center gap-1 sm:gap-2 mt-3 sm:mt-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
                    >
                      <span className="material-symbols-outlined text-sm sm:text-base">
                        person_add
                      </span>
                      Register Member
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-2 sm:space-y-3">
                    {recentMembers.map((member) => (
                      <div 
                        key={member.memberId} 
                        className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {member.profilePicture ? (
                              <img 
                                src={member.profilePicture} 
                                alt={member.fullName}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "";
                                }}
                              />
                            ) : (
                              <span className="material-symbols-outlined text-gray-500 text-sm sm:text-base">
                                person
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white truncate text-sm sm:text-base">
                              {member.fullName}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                              {member.role || "Member"}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 sm:gap-2 ml-2 flex-shrink-0">
                          <button
                            onClick={() => handleView("student", member.memberId)}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                            title="View Profile"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              visibility
                            </span>
                          </button>
                          <button
                            onClick={() => handleEdit("student", member.memberId)}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              edit
                            </span>
                          </button>
                          <button
                            onClick={() => alert("Delete member - Not implemented")}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="material-symbols-outlined text-blue-500 flex-shrink-0">
                    folder
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                    Recent Projects
                  </h3>
                </div>
                <Link 
                  to="/projects" 
                  className="text-xs sm:text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1 whitespace-nowrap flex-shrink-0 ml-2"
                >
                  View all
                  <span className="material-symbols-outlined text-xs sm:text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 max-h-[400px] overflow-y-auto">
                {recentProjects.length === 0 ? (
                  <div className="text-center py-6 sm:py-8">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-gray-400">
                      folder_off
                    </span>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">No projects found</p>
                    <Link 
                      to="/projects/create" 
                      className="inline-flex items-center gap-1 sm:gap-2 mt-3 sm:mt-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
                    >
                      <span className="material-symbols-outlined text-sm sm:text-base">
                        add
                      </span>
                      Create Project
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-2 sm:space-y-3">
                    {recentProjects.map((project) => (
                      <div 
                        key={project.projectId} 
                        className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {project.thumbnail ? (
                              <img 
                                src={project.thumbnail} 
                                alt={project.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "";
                                }}
                              />
                            ) : (
                              <span className="material-symbols-outlined text-gray-500 text-sm sm:text-base">
                                code
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white truncate text-sm sm:text-base">
                              {project.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                              {project.techStack?.slice(0, 3).join(", ")}
                              {project.techStack?.length > 3 && "..."}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 sm:gap-2 ml-2 flex-shrink-0">
                          <button
                            onClick={() => handleView("project", project.projectId)}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                            title="View Project"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              visibility
                            </span>
                          </button>
                          <button
                            onClick={() => handleEdit("project", project.projectId)}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              edit
                            </span>
                          </button>
                          <button
                            onClick={() => alert("Delete project - Not implemented")}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Updates & Quick Actions */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Recent Updates/Events - FIXED OVERFLOW */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <span className="material-symbols-outlined text-orange-500 flex-shrink-0">
                    event
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                    Recent Events
                  </h3>
                </div>
                <Link 
                  to="/updates" 
                  className="text-xs sm:text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1 whitespace-nowrap flex-shrink-0 ml-2"
                >
                  View all
                  <span className="material-symbols-outlined text-xs sm:text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 max-h-[400px] overflow-y-auto">
                {recentUpdates.length === 0 ? (
                  <div className="text-center py-6 sm:py-8">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-gray-400">
                      event_busy
                    </span>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">No events found</p>
                    <Link 
                      to="/updates/create" 
                      className="inline-flex items-center gap-1 sm:gap-2 mt-3 sm:mt-4 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
                    >
                      <span className="material-symbols-outlined text-sm sm:text-base">
                        add
                      </span>
                      Create Event
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-2 sm:space-y-3">
                    {recentUpdates.map((update) => (
                      <div 
                        key={update.updatesId} 
                        className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {update.thumbnail ? (
                              <img 
                                src={update.thumbnail} 
                                alt={update.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "";
                                }}
                              />
                            ) : (
                              <span className="material-symbols-outlined text-gray-500 text-sm sm:text-base">
                                notifications
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white truncate text-sm sm:text-base">
                              {update.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                              {update.category || "Event"}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-1 sm:gap-2 ml-2 flex-shrink-0">
                          <button
                            onClick={() => handleView("update", update.updatesId)}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                            title="View Event"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              visibility
                            </span>
                          </button>
                          <button
                            onClick={() => handleEdit("update", update.updatesId)}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              edit
                            </span>
                          </button>
                          <button
                            onClick={() => alert("Delete event - Not implemented")}
                            className="p-1.5 sm:p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-sm sm:text-base">
                              delete
                            </span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-slate-800">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-1 sm:gap-2 truncate">
                  <span className="material-symbols-outlined text-blue-500 flex-shrink-0">
                    bolt
                  </span>
                  Quick Actions
                </h3>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.link}
                      className="flex flex-col items-center p-3 sm:p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group"
                    >
                      <div className={`${action.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <span className="material-symbols-outlined text-white text-sm sm:text-base">
                          {action.icon}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center leading-tight truncate w-full">
                        {action.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}