
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, GraduationCap, FileCheck } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route) => {
    if (route === '/' && path === '/') return true;
    if (route !== '/' && path.startsWith(route)) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 h-16 bg-green rounded-full text-white z-10 shadow-float animate-slide-in-bottom md:animate-none">
      <div className="grid grid-cols-3 h-full max-w-md mx-auto px-8">
        <Link 
          to="/" 
          className={`${isActive('/') ? 'nav-item-active' : 'nav-item-inactive'} nav-item px-4`}
        >
          <LayoutDashboard className="nav-icon" />
          <span className="text-xs tracking-wide">DASHBOARD</span>
        </Link>
        
        <Link 
          to="/courses" 
          className={`${isActive('/courses') ? 'nav-item-active' : 'nav-item-inactive'} nav-item px-4`}
        >
          <GraduationCap className="nav-icon" />
          <span className="text-xs tracking-wide">COURSES</span>
        </Link>
        
        <Link 
          to="/test" 
          className={`${isActive('/test') ? 'nav-item-active' : 'nav-item-inactive'} nav-item px-4`}
        >
          <FileCheck className="nav-icon" />
          <span className="text-xs tracking-wide">TEST</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
