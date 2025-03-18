
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, BookOpen, CheckSquare } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isActive = (route: string) => {
    if (route === '/' && path === '/') return true;
    if (route !== '/' && path.startsWith(route)) return true;
    return false;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-green text-white z-10 animate-slide-in-bottom md:animate-none">
      <div className="grid grid-cols-3 h-full max-w-3xl mx-auto">
        <Link 
          to="/" 
          className={`${isActive('/') ? 'nav-item-active' : 'nav-item-inactive'} nav-item`}
        >
          <LayoutGrid className="nav-icon" />
          <span>DASHBOARD</span>
        </Link>
        
        <Link 
          to="/courses" 
          className={`${isActive('/courses') ? 'nav-item-active' : 'nav-item-inactive'} nav-item`}
        >
          <BookOpen className="nav-icon" />
          <span>COURSES</span>
        </Link>
        
        <Link 
          to="/test" 
          className={`${isActive('/test') ? 'nav-item-active' : 'nav-item-inactive'} nav-item`}
        >
          <CheckSquare className="nav-icon" />
          <span>TEST</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
