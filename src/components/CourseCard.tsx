
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Course } from '@/utils/mockData';

interface CourseCardProps {
  course: Course;
  categoryView?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, categoryView = false }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (categoryView) {
      navigate(`/courses/${course.category.replace(/\s+/g, '-').toLowerCase()}`);
    } else {
      navigate(`/courses/${course.category.replace(/\s+/g, '-').toLowerCase()}/${course.id}`);
    }
  };

  // For category cards
  if (categoryView) {
    let icon;
    
    switch (course.category) {
      case 'Selling Skills':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <path d="M20 8v6"></path>
            <path d="M23 11h-6"></path>
          </svg>
        );
        break;
      case 'Product Knowledge':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        );
        break;
      case 'Territory Management':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        );
        break;
      case 'Admin Compliance':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 12 2 2 4-4"></path>
            <path d="M12 3c-1.2 0-2.4.6-3 1.7A4 4 0 0 0 5.5 9a4 4 0 0 0 1.1 7.8 4 4 0 0 0 7.1 1.1 4 4 0 0 0 6.2-4.7 4 4 0 0 0-1.4-7.9c-.7-1-2-1.7-3-1.7-1.2 0-2.3.7-3 1.7-.7-1-1.8-1.7-3-1.7Z"></path>
          </svg>
        );
        break;
      default:
        icon = <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full" />;
    }

    return (
      <div 
        className="bg-green text-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover-elevate min-w-[200px] min-h-[200px] transform transition-all duration-300 hover:-translate-y-2"
        onClick={handleClick}
      >
        <div className="mb-4 bg-white bg-opacity-10 rounded-full p-3 float-animation">
          {icon}
        </div>
        <h4 className="uppercase font-bold mb-1 text-xs tracking-wider opacity-80">CATEGORY</h4>
        <h3 className="text-center font-bold text-lg">{course.category}</h3>
      </div>
    );
  }

  // For content cards
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-card hover-elevate cursor-pointer h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="h-40 overflow-hidden">
          <img 
            src={course.image || "/lovable-uploads/84e0eefa-b5a0-4daa-8281-fc69bdf8d6ad.png"} 
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div className="absolute top-3 right-3">
          <span className={`card-badge ${
            course.type === 'Video' ? 'bg-green text-white' : 
            course.type === 'PDF' ? 'bg-maroon text-white' : 
            'bg-blue-500 text-white'
          }`}>
            {course.type}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-md mb-2 text-gray-800">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
        
        <div className="border-t border-gray-100 pt-3 mt-2">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center text-gray-500">
              <Calendar size={12} className="mr-1" />
              <span>{course.date}</span>
            </div>
            
            <div className="flex items-center text-green">
              <Clock size={12} className="mr-1" />
              <span>30 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
