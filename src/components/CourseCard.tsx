
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
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
            <path d="M5 11H19M5 11C4.17157 11 3.5 10.3284 3.5 9.5V8C3.5 6.61929 4.61929 5.5 6 5.5H11.5M5 11C4.17157 11 3.5 11.6716 3.5 12.5V14C3.5 15.3807 4.61929 16.5 6 16.5H11.5M19 11C19.8284 11 20.5 10.3284 20.5 9.5V8C20.5 6.61929 19.3807 5.5 18 5.5H12.5M19 11C19.8284 11 20.5 11.6716 20.5 12.5V14C20.5 15.3807 19.3807 16.5 18 16.5H12.5M12 5.5V16.5"/>
          </svg>
        );
        break;
      case 'Product Knowledge':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"/>
            <circle cx="16.5" cy="8.5" r="1.5" fill="currentColor"/>
          </svg>
        );
        break;
      case 'Territory Management':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        );
        break;
      case 'Admin Compliance':
        icon = (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11.5L11 13.5L15.5 9M5.8 11.3L5.12591 8.23178C5.04785 7.86603 5.00881 7.68315 5.02154 7.51051C5.03427 7.33788 5.09658 7.17251 5.20303 7.03249C5.30948 6.89247 5.46563 6.79038 5.77793 6.58618L7.47305 5.50386C7.70791 5.35742 7.82534 5.2842 7.96193 5.24159C8.09853 5.19897 8.24191 5.19897 8.3785 5.24159C8.5151 5.2842 8.63253 5.35742 8.86738 5.50386L10.5625 6.58618C10.8748 6.79038 11.031 6.89247 11.1374 7.03249C11.2439 7.17251 11.3062 7.33788 11.3189 7.51051C11.3316 7.68315 11.2926 7.86603 11.2145 8.23178L10.5405 11.3C10.4456 11.7565 10.3982 11.9848 10.2882 12.1893C10.1781 12.3937 10.0161 12.5695 9.82 12.7C9.62395 12.8305 9.3825 12.9089 8.8996 13.0656L8.2 13.3C7.3568 13.5678 6.9352 13.7017 6.5 13.7017C6.0648 13.7017 5.6432 13.5678 4.8 13.3L4.1004 13.0656C3.6175 12.9089 3.37605 12.8305 3.18 12.7C2.9839 12.5695 2.8219 12.3937 2.7118 12.1893C2.6018 11.9848 2.5544 11.7565 2.4595 11.3L1.8 8.5M5.8 11.3L8.2 13.3M10.5405 11.3L8.2 13.3" />
            <path d="M13 2L17 2C17.9428 2 18.4142 2 18.7071 2.29289C19 2.58579 19 3.05719 19 4V20C19 20.9428 19 21.4142 18.7071 21.7071C18.4142 22 17.9428 22 17 22H13C12.0572 22 11.5858 22 11.2929 21.7071C11 21.4142 11 20.9428 11 20V4C11 3.05719 11 2.58579 11.2929 2.29289C11.5858 2 12.0572 2 13 2Z"/>
            <path d="M19 7L22 7C22.5304 7 23.0391 7.21071 23.4142 7.58579C23.7893 7.96086 24 8.46957 24 9V15C24 15.5304 23.7893 16.0391 23.4142 16.4142C23.0391 16.7893 22.5304 17 22 17L19 17"/>
          </svg>
        );
        break;
      default:
        icon = <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full" />;
    }

    return (
      <div 
        className="bg-green text-white rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover-elevate min-w-[200px] min-h-[200px]"
        onClick={handleClick}
      >
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-center font-bold text-lg">{course.category}</h3>
      </div>
    );
  }

  // For content cards
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover-elevate cursor-pointer h-full"
      onClick={handleClick}
    >
      <div className="bg-green p-2 h-40 relative">
        <img 
          src={course.image || "/lovable-uploads/84e0eefa-b5a0-4daa-8281-fc69bdf8d6ad.png"} 
          alt={course.title} 
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-md mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
        <div className="flex justify-between items-center text-xs">
          <span className="text-maroon font-medium">{course.type}</span>
          <div className="flex items-center text-gray-500">
            <Calendar size={12} className="mr-1" />
            <span>{course.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
