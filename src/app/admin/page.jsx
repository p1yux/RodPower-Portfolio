'use client';
import { useState, useEffect } from 'react';
import { volunteerService, doADeedService } from '../../lib/firebaseServices';
import AdminLogin from '../../components/AdminLogin';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('volunteers');
  const [volunteers, setVolunteers] = useState([]);
  const [deeds, setDeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDeed, setSelectedDeed] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const checkAuthentication = () => {
    const isAuth = localStorage.getItem('adminAuthenticated');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    if (isAuth === 'true' && loginTime) {
      const currentTime = Date.now();
      const timeDiff = currentTime - parseInt(loginTime);
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      
      if (timeDiff < twentyFourHours) {
        setIsAuthenticated(true);
      } else {
        // Session expired
        localStorage.removeItem('adminAuthenticated');
        localStorage.removeItem('adminLoginTime');
        setIsAuthenticated(false);
      }
    }
    setAuthLoading(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    setIsAuthenticated(false);
  };

  const loadData = async () => {
    setLoading(true);
    setError('');
    
    try {
      const [volunteersResult, deedsResult] = await Promise.all([
        volunteerService.getAll(),
        doADeedService.getAll()
      ]);

      if (volunteersResult.success) {
        setVolunteers(volunteersResult.data);
      } else {
        setError('Failed to load volunteers');
      }

      if (deedsResult.success) {
        setDeeds(deedsResult.data);
      } else {
        setError('Failed to load deeds');
      }
    } catch (error) {
      console.error('Error loading data:', error);
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVolunteer = async (id) => {
    if (!confirm('Are you sure you want to delete this volunteer?')) return;
    
    const result = await volunteerService.delete(id);
    if (result.success) {
      setVolunteers(volunteers.filter(v => v.id !== id));
    } else {
      alert('Failed to delete volunteer');
    }
  };

  const handleDeleteDeed = async (id) => {
    if (!confirm('Are you sure you want to delete this deed?')) return;
    
    const result = await doADeedService.delete(id);
    if (result.success) {
      setDeeds(deeds.filter(d => d.id !== id));
    } else {
      alert('Failed to delete deed');
    }
  };

  const handleRefresh = () => {
    loadData();
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  // Show auth loading while checking authentication
  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto mb-6"></div>
          <p className="text-white text-xl font-medium">Checking Access...</p>
          <p className="text-white/70 mt-2">Verifying credentials</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated
  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  // Show loading while fetching data
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-red-600 mx-auto mb-6"></div>
          <p className="text-white text-xl font-medium">Loading Admin Dashboard...</p>
          <p className="text-white/70 mt-2">Fetching your data securely</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-xl border-b border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-black text-white">
                Admin <span className="text-red-400">Dashboard</span>
              </h1>
              <p className="text-white/70 text-sm">Manage applications and requests</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleRefresh}
                className="group bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-1 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
              
              <button
                onClick={handleLogout}
                className="group bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center"
                title="Logout"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-red-600/20 border border-red-600/50 text-red-200 px-6 py-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        </div>
      )}

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-xs font-medium">Volunteers</p>
                <p className="text-xl font-black">{volunteers.length}</p>
              </div>
              <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-xs font-medium">Requests</p>
                <p className="text-xl font-black">{deeds.length}</p>
              </div>
              <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-xs font-medium">Total</p>
                <p className="text-xl font-black">{volunteers.length + deeds.length}</p>
              </div>
              <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700">
          <div className="border-b border-slate-700/50">
            <nav className="-mb-px flex">
              <button
                onClick={() => setActiveTab('volunteers')}
                className={`relative py-3 px-6 border-b-2 font-medium text-sm transition-all duration-200 ${
                  activeTab === 'volunteers'
                    ? 'border-red-500 text-red-400 bg-slate-700/50'
                    : 'border-transparent text-white/70 hover:text-white hover:bg-slate-700/30'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <span>Volunteers</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === 'volunteers' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-slate-600 text-white/70'
                  }`}>
                    {volunteers.length}
                  </span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('deeds')}
                className={`relative py-3 px-6 border-b-2 font-medium text-sm transition-all duration-200 ${
                  activeTab === 'deeds'
                    ? 'border-red-500 text-red-400 bg-slate-700/50'
                    : 'border-transparent text-white/70 hover:text-white hover:bg-slate-700/30'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>Requests</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === 'deeds' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-slate-600 text-white/70'
                  }`}>
                    {deeds.length}
                  </span>
                </div>
              </button>
            </nav>
          </div>

          {/* Volunteers Tab */}
          {activeTab === 'volunteers' && (
            <div className="p-4">
              {volunteers.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 text-white/30 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <p className="text-white/70 text-sm">No volunteers yet</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {volunteers.map((volunteer, index) => (
                    <div key={volunteer.id} className="bg-slate-700/30 hover:bg-slate-700/50 p-3 rounded-lg flex items-center justify-between transition-colors duration-200">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xs">
                            {volunteer.email.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-white text-sm font-medium truncate block">
                            {volunteer.email}
                          </span>
                        </div>
                        <div className="text-white/50 text-xs">
                          #{index + 1}
                        </div>
                        <div className="text-white/50 text-xs whitespace-nowrap">
                          {formatDate(volunteer.createdAt)}
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteVolunteer(volunteer.id)}
                        className="ml-3 text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-600/20 transition-colors duration-200"
                        title="Delete volunteer"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Do A Deed Tab */}
          {activeTab === 'deeds' && (
            <div className="p-4">
              {deeds.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-12 h-12 text-white/30 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <p className="text-white/70 text-sm">No community requests yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {deeds.map((deed, index) => (
                    <div 
                      key={deed.id} 
                      className="bg-slate-700/30 hover:bg-slate-700/50 p-4 rounded-lg transition-colors duration-200"
                    >
                      {/* Main Info Line */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                          <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-xs">
                              {deed.firstName.charAt(0)}{deed.lastName.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-white text-sm font-medium">
                              {deed.firstName} {deed.lastName}
                            </span>
                          </div>
                          <div className="text-white/50 text-xs">
                            #{index + 1}
                          </div>
                          <div className="text-white/50 text-xs whitespace-nowrap">
                            {formatDate(deed.createdAt)}
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteDeed(deed.id)}
                          className="ml-3 text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-600/20 transition-colors duration-200"
                          title="Delete request"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>

                      {/* Contact Info Line */}
                      <div className="flex items-center space-x-4 mb-2 ml-11 text-xs">
                        <div className="flex items-center space-x-1">
                          <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <span className="text-white/70">{deed.email}</span>
                        </div>
                        {deed.phone && (
                          <div className="flex items-center space-x-1">
                            <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="text-white/70">{deed.phone}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="ml-11 text-xs">
                        <p className="text-white/60 line-clamp-2 leading-relaxed">
                          {deed.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;