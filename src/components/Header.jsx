
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { logout } from '../utils/auth';

const Header = ({
  title = 'RX LMS',
  showBackButton = false,
  showDate = true,
  userName = 'DELA CRUZ, JUAN',
  userAvatar = '/lovable-uploads/dba0b434-1b1e-4f5a-b6c0-e1742bb9f595.png',
}) => {
  const navigate = useNavigate();
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
    navigate('/');
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
          <span className="text-sm font-medium hidden md:block">{userName}</span>
          <div className="relative hover-scale cursor-pointer" onClick={handleLogout}>
            <img 
              src={userAvatar}
              alt="User avatar" 
              className="w-8 h-8 rounded-full border-2 border-white" 
            />
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
