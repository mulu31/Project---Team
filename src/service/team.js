// utils/teamStorage.js
export const teamStorage = {
  // Get all registered teams
  getAllTeams: () => {
    try {
      return JSON.parse(localStorage.getItem('registeredTeams') || '[]');
    } catch (error) {
      console.error('Error getting teams:', error);
      return [];
    }
  },

  // Get team by ID
  getTeamById: (teamId) => {
    try {
      const teams = JSON.parse(localStorage.getItem('registeredTeams') || '[]');
      return teams.find(team => team.id === teamId);
    } catch (error) {
      console.error('Error getting team:', error);
      return null;
    }
  },

  // Get teams by member ID
  getTeamsByMember: (memberId) => {
    try {
      const teams = JSON.parse(localStorage.getItem('registeredTeams') || '[]');
      return teams.filter(team => team.members.includes(memberId));
    } catch (error) {
      console.error('Error getting teams by member:', error);
      return [];
    }
  },

  // Update team data
  updateTeam: (teamId, updatedData) => {
    try {
      const teams = JSON.parse(localStorage.getItem('registeredTeams') || '[]');
      const teamIndex = teams.findIndex(team => team.id === teamId);
      
      if (teamIndex !== -1) {
        teams[teamIndex] = { ...teams[teamIndex], ...updatedData };
        localStorage.setItem('registeredTeams', JSON.stringify(teams));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating team:', error);
      return false;
    }
  },

  // Delete team
  deleteTeam: (teamId) => {
    try {
      const teams = JSON.parse(localStorage.getItem('registeredTeams') || '[]');
      const filteredTeams = teams.filter(team => team.id !== teamId);
      localStorage.setItem('registeredTeams', JSON.stringify(filteredTeams));
      
      // Remove team from members' data
      const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const updatedUsers = users.map(user => ({
        ...user,
        teams: (user.teams || []).filter(id => id !== teamId)
      }));
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
      
      return true;
    } catch (error) {
      console.error('Error deleting team:', error);
      return false;
    }
  },

  // Add member to team
  addMemberToTeam: (teamId, memberId) => {
    try {
      const teams = JSON.parse(localStorage.getItem('registeredTeams') || '[]');
      const teamIndex = teams.findIndex(team => team.id === teamId);
      
      if (teamIndex !== -1 && !teams[teamIndex].members.includes(memberId)) {
        teams[teamIndex].members.push(memberId);
        teams[teamIndex].performance.memberCount = teams[teamIndex].members.length;
        localStorage.setItem('registeredTeams', JSON.stringify(teams));
        
        // Update user's teams
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const userIndex = users.findIndex(user => user.id === memberId);
        if (userIndex !== -1) {
          users[userIndex].teams = [...(users[userIndex].teams || []), teamId];
          localStorage.setItem('registeredUsers', JSON.stringify(users));
        }
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error adding member to team:', error);
      return false;
    }
  },

  // Remove member from team
  removeMemberFromTeam: (teamId, memberId) => {
    try {
      const teams = JSON.parse(localStorage.getItem('registeredTeams') || '[]');
      const teamIndex = teams.findIndex(team => team.id === teamId);
      
      if (teamIndex !== -1) {
        teams[teamIndex].members = teams[teamIndex].members.filter(id => id !== memberId);
        teams[teamIndex].performance.memberCount = teams[teamIndex].members.length;
        localStorage.setItem('registeredTeams', JSON.stringify(teams));
        
        // Update user's teams
        const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        const userIndex = users.findIndex(user => user.id === memberId);
        if (userIndex !== -1) {
          users[userIndex].teams = (users[userIndex].teams || []).filter(id => id !== teamId);
          localStorage.setItem('registeredUsers', JSON.stringify(users));
        }
        
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error removing member from team:', error);
      return false;
    }
  },

  // Clear all teams (for testing)
  clearAllTeams: () => {
    localStorage.removeItem('registeredTeams');
    return true;
  }
};