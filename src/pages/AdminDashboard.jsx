import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/apps_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import { getMembersData } from "../Data/member";
import {getProjectsData} from "../Data/projects";
import {getTeamsData} from "../Data/team";
import {getUpdatesData} from "../Data/updates";
import AdminNavbar from "../Components/AdminNavbar";
import Footer from "../Components/Footer";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalMembers: 0,
    totalTeams: 0,
    totalUpdates: 0,
  });

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    try {
      // Set stats
      setStats({
        totalProjects: getProjectsData().length,
        totalMembers: getMembersData().length,
        totalTeams: getTeamsData().length,
        totalUpdates: getUpdatesData().length,
      });
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (type, id) => {
    navigate(`/${type}s/${id}`);
  };

  const handleEdit = (type, id) => {
    navigate(`/${type}s/${id}/edit`);
  };

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin">
      <AdminNavbar />
      <div className="admin-dashboard">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p className="welcome-text">
            Welcome back, Admin! Here's what's happening today.
          </p>
        </div>

        {/* Stats Overview Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <img src={img} alt="Projects" />
            </div>
            <div className="stat-content">
              <h3>{stats.totalProjects}</h3>
              <p>Total Projects</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <img src={img} alt="Members" />
            </div>
            <div className="stat-content">
              <h3>{stats.totalMembers}</h3>
              <p>Total Members</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <img src={img} alt="Teams" />
            </div>
            <div className="stat-content">
              <h3>{stats.totalTeams}</h3>
              <p>Total Teams</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <img src={img} alt="Updates" />
            </div>
            <div className="stat-content">
              <h3>{stats.totalUpdates}</h3>
              <p>Events & Updates</p>
            </div>
          </div>
        </div>

        <div className="main-grid">
          <div className="left-column">
            <div className="recent-card">
              <div className="card-header">
                <h3>
                  <img src={img} alt="Members" />
                  Members
                </h3>
                <Link to="/students" className="view-all-btn">
                  View All
                  <span>→</span>
                </Link>
              </div>

              <div className="card-content">
                {stats.totalMembers.length === 0 ? (
                  <div className="empty-state">
                    <p>
                      No members found. Register new members to get started.
                    </p>
                    <Link to="/register" className="add-btn">
                      Register Member
                    </Link>
                  </div>
                ) : (
                  <div className="members-list">
                    {stats.totalMembers.map((member) => (
                      <div key={member.id} className="list-item">
                        <div className="item-info">
                          <img
                            src={member.profilePicture || img}
                            alt={member.fullName}
                            className="item-avatar"
                            onError={(e) => {
                              e.target.src = img;
                            }}
                          />
                          <div className="item-details">
                            <h4>{member.fullName}</h4>
                            <p>{member.role}</p>
                          </div>
                        </div>

                        <div className="item-actions">
                          <button
                            onClick={() =>
                              handleView("student", member.memberId)
                            }
                            className="action-btn view-btn"
                            title="View Profile"
                          >
                            <img src={img} alt="View" />
                          </button>
                          <button
                            onClick={() =>
                              handleEdit("student", member.memberId)
                            }
                            className="action-btn edit-btn"
                            title="Edit"
                          >
                            <img src={img} alt="Edit" />
                          </button>
                          <button
                            // onClick={() =>
                            //   handleDelete("member", member.id, member.fullName)
                            // }
                            className="action-btn delete-btn"
                            title="Delete"
                          >
                            <img src={img} alt="Delete" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="recent-card">
              <div className="card-header">
                <h3>
                  <img src={img} alt="Projects" />
                  Projects
                </h3>
                <Link to="/projects" className="view-all-btn">
                  View All
                  <span>→</span>
                </Link>
              </div>

              <div className="card-content">
                {stats.totalProjects.length === 0 ? (
                  <div className="empty-state">
                    <p>No projects found. Create your first project!</p>
                    <Link to="/projects/create" className="add-btn">
                      Create Project
                    </Link>
                  </div>
                ) : (
                  <div className="projects-list">
                    {stats.totalProjects.map((project) => (
                      <div key={project.projectId} className="list-item">
                        <div className="item-info">
                          <img
                            src={project.thumbnail || img}
                            alt={project.title}
                            className="item-avatar project-avatar"
                            onError={(e) => {
                              e.target.src = img;
                            }}
                          />
                          <div className="item-details">
                            <h4>{project.title}</h4>
                            <p>
                              {project.techStack?.slice(0, 2).join(", ")}
                              {project.techStack?.length > 2 && "..."}
                            </p>
                          </div>
                        </div>

                        <div className="item-actions">
                          <button
                            onClick={() =>
                              handleView("project", project.projectId)
                            }
                            className="action-btn view-btn"
                            title="View Project"
                          >
                            <img src={img} alt="View" />
                          </button>
                          <button
                            onClick={() =>
                              handleEdit("project", project.projectId)
                            }
                            className="action-btn edit-btn"
                            title="Edit"
                          >
                            <img src={img} alt="Edit" />
                          </button>
                          <button
                            // onClick={() =>
                            //   handleDelete(
                            //     "project",
                            //     project.id || project.projectId,
                            //     project.title
                            //   )
                            // }
                            className="action-btn delete-btn"
                            title="Delete"
                          >
                            <img src={img} alt="Delete" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/*Updates & Activities */}
          <div className="right-column">
            <div className="recent-card">
              <div className="card-header">
                <h3>
                  <img src={img} alt="Updates" />
                  Events
                </h3>
                <Link to="/updates" className="view-all-btn">
                  View All
                  <span>→</span>
                </Link>
              </div>

              <div className="card-content">
                {stats.totalUpdates.length === 0 ? (
                  <div className="empty-state">
                    <p>No events found. Create your first event!</p>
                    <Link to="/updates/create" className="add-btn">
                      Create Event
                    </Link>
                  </div>
                ) : (
                  <div className="updates-list">
                    {stats.totalUpdates.map((update) => (
                      <div
                        key={update.id || update.updatesId}
                        className="list-item"
                      >
                        <div className="item-info">
                          <img
                            src={update.thumbnail || img}
                            alt={update.title}
                            className="item-avatar update-avatar"
                            onError={(e) => {
                              e.target.src = img;
                            }}
                          />
                          <div className="item-details">
                            <h4>{update.title}</h4>
                            <p>{update.category}</p>
                          </div>
                        </div>

                        <div className="item-actions">
                          <button
                            onClick={() =>
                              handleView("update", update.updatesId)
                            }
                            className="action-btn view-btn"
                            title="View Event"
                          >
                            <img src={img} alt="View" />
                          </button>
                          <button
                            onClick={() =>
                              handleEdit("update", update.updatesId)
                            }
                            className="action-btn edit-btn"
                            title="Edit"
                          >
                            <img src={img} alt="Edit" />
                          </button>
                          <button
                            onClick={() =>
                              // handleDelete(
                              //   "update",
                              //   update.id || update.updatesId,
                              //   update.title
                              // )
                              alert("Not Implemented!")
                            }
                            className="action-btn delete-btn"
                            title="Delete"
                          >
                            <img src={img} alt="Delete" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions-card">
              <div className="card-header">
                <h3>Quick Actions</h3>
              </div>

              <div className="card-content">
                <div className="actions-grid">
                  <Link to="/projects/create" className="action-button">
                    <div
                      className="action-icon"
                      style={{ background: "#4776E6" }}
                    >
                      <img src={img} alt="New Project" />
                    </div>
                    <span>New Project</span>
                  </Link>

                  <Link to="/register" className="action-button">
                    <div
                      className="action-icon"
                      style={{ background: "#28a745" }}
                    >
                      <img src={img} alt="Add Member" />
                    </div>
                    <span>Add Member</span>
                  </Link>

                  <Link to="/teams/register" className="action-button">
                    <div
                      className="action-icon"
                      style={{ background: "#ff6b6b" }}
                    >
                      <img src={img} alt="Create Team" />
                    </div>
                    <span>Create Team</span>
                  </Link>

                  <Link to="/updates/create" className="action-button">
                    <div
                      className="action-icon"
                      style={{ background: "#17a2b8" }}
                    >
                      <img src={img} alt="New Event" />
                    </div>
                    <span>New Event</span>
                  </Link>

                  <Link to="/students" className="action-button">
                    <div className="action-icon">
                      <img src={img} alt="Manage Users" />
                    </div>
                    <span>Manage Users</span>
                  </Link>
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
