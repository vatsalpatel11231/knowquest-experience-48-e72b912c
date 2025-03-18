
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const CourseCard = ({ course, categoryView = false }) => {
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
    return (
      <div 
        className="bg-maroon text-white rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover-elevate shadow-md transform transition-all duration-300 hover:-translate-y-2"
        onClick={handleClick}
      >
        <div className="mb-4 bg-white bg-opacity-10 rounded-full p-3 float-animation">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-12 h-12 text-white" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="uppercase font-bold mb-1 text-xs tracking-wider opacity-80">COURSE</h4>
          <h3 className="font-bold text-lg">{course.category}</h3>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-[-4px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={course.image || '/lovable-uploads/e8ae0a33-1b95-417e-96ae-a0d71c0db2d3.jpg'} 
          alt={course.title} 
          className="w-full h-40 object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <span className="bg-maroon rounded-full px-3 py-1 text-xs font-medium">
            {course.type}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold mb-2 text-gray-800 line-clamp-2">{course.title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{course.date}</span>
          <span className="mx-2">•</span>
          <Clock size={14} className="mr-1" />
          <span>{course.duration}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green rounded-full h-2" 
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-500">Progress</span>
            <span className="text-xs font-medium">{course.progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
