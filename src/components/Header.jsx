
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, LogOut, Settings, Bell } from 'lucide-react';
import { logout, getCurrentUser } from '@/utils/auth';
import { toast } from 'sonner';

const Header = ({
  title = 'RX LMS',
  showBackButton = false,
  showDate = true,
}) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const user = getCurrentUser();
  const userName = user?.name || 'DELA CRUZ, JUAN';
  const userAvatar = user?.avatar || '/lovable-uploads/dba0b434-1b1e-4f5a-b6c0-e1742bb9f595.png';
  
  const today = new Date();
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);
  const month = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    logout();
  };
  
  const handleProfileClick = () => {
    setShowDropdown(false);
    navigate('/profile');
  };
  
  const handleNotification = () => {
    toast.info("Notifications", { 
      description: "You have no new notifications" 
    });
  };

  return (
    <header className="w-full">
      <div className="lms-header">
        <div className="flex items-center">
          {showBackButton && (
            <button 
              onClick={handleBack} 
              className="mr-4 text-white hover:text-gray-200 transition-colors duration-200"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleNotification}
            className="p-2 text-white hover:bg-[#1a7868] rounded-full transition-colors"
          >
            <Bell size={20} />
          </button>
          
          <span className="text-sm font-medium hidden md:block">{userName}</span>
          
          <div className="relative">
            <div 
              className="cursor-pointer transition-all duration-200 hover:ring-2 ring-white ring-opacity-50 rounded-full" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img 
                src={userAvatar}
                alt="User avatar" 
                className="w-8 h-8 rounded-full border-2 border-white" 
              />
            </div>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fade-in">
                <button 
                  onClick={handleProfileClick}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <User size={16} className="mr-2" />
                  Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  <LogOut size={16} className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {showDate && (
        <div className="bg-white p-3 flex justify-between items-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 animate-fade-in">
            {title !== 'RX LMS' ? title : 'DASHBOARD'}
          </h2>
          <div className="text-right">
            <p className="text-gray-600 text-sm">{month}</p>
            <p className="text-gray-500 text-xs">As of {formattedDate}</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
