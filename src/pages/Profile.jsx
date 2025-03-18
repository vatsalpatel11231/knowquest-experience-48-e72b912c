
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated, getCurrentUser, logout } from '@/utils/auth';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { User, Mail, Briefcase, Calendar, Building, Award, LogOut } from 'lucide-react';
import { toast } from 'sonner';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    // Get user data
    const userData = getCurrentUser();
    setUser(userData);
    
    // Simulate data loading
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [navigate]);

  const handleLogout = () => {
    logout();
  };
  
  const handleChangePassword = () => {
    toast.info("Feature coming soon", {
      description: "Password change functionality will be available in the next update."
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
        <Header title="PROFILE" showBackButton />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-[#125b48] mb-3"></div>
            <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 w-48 bg-gray-200 rounded mb-6"></div>
            <p className="text-gray-500">Loading profile...</p>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col pb-20">
      <Header title="PROFILE" showBackButton />
      
      <div className="lms-container flex-1">
        <div className="max-w-3xl mx-auto">
          {/* Profile header */}
          <div className="bg-gradient-to-r from-[#125b48] to-[#1a7868] rounded-lg shadow-lg mb-6 p-6 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white overflow-hidden">
                <img 
                  src={user?.avatar || "/lovable-uploads/dba0b434-1b1e-4f5a-b6c0-e1742bb9f595.png"} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold mb-1">{user?.name}</h2>
              <p className="text-white text-opacity-90 mb-4">{user?.position}</p>
              
              <div className="flex justify-center space-x-2">
                <span className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm">
                  {user?.department}
                </span>
                <span className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm">
                  Staff ID: {user?.id}
                </span>
              </div>
            </div>
          </div>
          
          {/* Profile details */}
          <div className="bg-white rounded-lg shadow-md mb-6 divide-y divide-gray-100">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-[#125b48] bg-opacity-10 p-2 rounded-full mr-3">
                    <User className="text-[#125b48]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-800">{user?.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#125b48] bg-opacity-10 p-2 rounded-full mr-3">
                    <Mail className="text-[#125b48]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium text-gray-800">{user?.email || "juan.delacruz@example.com"}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#125b48] bg-opacity-10 p-2 rounded-full mr-3">
                    <Briefcase className="text-[#125b48]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Position</p>
                    <p className="font-medium text-gray-800">{user?.position || "Senior Sales Representative"}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#125b48] bg-opacity-10 p-2 rounded-full mr-3">
                    <Building className="text-[#125b48]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="font-medium text-gray-800">{user?.department || "Sales"}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#125b48] bg-opacity-10 p-2 rounded-full mr-3">
                    <Calendar className="text-[#125b48]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Join Date</p>
                    <p className="font-medium text-gray-800">{user?.joinDate || "January 15, 2022"}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#125b48] bg-opacity-10 p-2 rounded-full mr-3">
                    <Award className="text-[#125b48]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Training Level</p>
                    <p className="font-medium text-gray-800">Advanced</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Account Settings</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={handleChangePassword}
                  className="w-full text-left flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Change Password</p>
                    <p className="text-sm text-gray-500">Update your password</p>
                  </div>
                </button>
                
                <button 
                  onClick={handleLogout}
                  className="w-full text-left flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <LogOut className="w-5 h-5 text-[#750d1f]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#750d1f]">Logout</p>
                    <p className="text-sm text-gray-500">Sign out of your account</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500">
            <p>RX LMS v1.0</p>
            <p>© 2023 RX Agad Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Profile;
