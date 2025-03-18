
import React, { useState } from 'react';
import { Play, CheckCircle, Clock, Calendar, User } from 'lucide-react';

const CourseContent = ({ course }) => {
  const [activeModule, setActiveModule] = useState(null);
  
  const handleModuleClick = (moduleId) => {
    if (activeModule === moduleId) {
      setActiveModule(null);
    } else {
      setActiveModule(moduleId);
    }
  };
  
  const getModuleStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green" size={18} />;
      case 'in-progress':
        return <Play className="text-maroon" size={18} />;
      default:
        return <Clock className="text-gray-400" size={18} />;
    }
  };
  
  const getModuleStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green';
      case 'in-progress':
        return 'text-maroon';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column (Course Info) */}
      <div className="md:col-span-1">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <img 
            src={course.image || '/lovable-uploads/e8ae0a33-1b95-417e-96ae-a0d71c0db2d3.jpg'} 
            alt={course.title} 
            className="w-full h-48 object-cover" 
          />
          
          <div className="p-5">
            <span className="bg-maroon text-white rounded-full px-3 py-1 text-xs font-medium">
              {course.type}
            </span>
            
            <h2 className="text-xl font-bold mt-3 mb-2">{course.title}</h2>
            
            <p className="text-gray-600 mb-4">{course.description}</p>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="course-meta-item">
                <User className="text-gray-400" size={16} />
                <span>Instructor: {course.instructor}</span>
              </div>
              
              <div className="course-meta-item">
                <Calendar className="text-gray-400" size={16} />
                <span>Released: {course.date}</span>
              </div>
              
              <div className="course-meta-item">
                <Clock className="text-gray-400" size={16} />
                <span>Duration: {course.duration}</span>
              </div>
            </div>
            
            <div className="mt-4">
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
      </div>
      
      {/* Right Column (Modules) */}
      <div className="md:col-span-2">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200">
            <h3 className="p-5 font-bold text-lg">Course Content</h3>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {course.modules.map((module) => (
              <li key={module.id}>
                <div 
                  className="p-5 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
                  onClick={() => handleModuleClick(module.id)}
                >
                  <div className="flex items-center">
                    <div className="mr-3">
                      {getModuleStatusIcon(module.status)}
                    </div>
                    <div>
                      <h4 className="font-medium">{module.title}</h4>
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                  </div>
                  <div className={getModuleStatusClass(module.status)}>
                    {module.status === 'completed' ? 'Completed' : 
                     module.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                  </div>
                </div>
                
                {activeModule === module.id && (
                  <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <div className="flex justify-between mb-3">
                      <h5 className="font-medium">Module Content</h5>
                      <span className="text-sm text-gray-500">{module.duration}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      This module covers essential concepts and practical applications related to {module.title.toLowerCase()}.
                    </p>
                    
                    <button 
                      className={`flex items-center justify-center px-4 py-2 rounded ${
                        module.status === 'completed' 
                          ? 'bg-gray-200 text-gray-700' 
                          : 'bg-maroon text-white'
                      }`}
                    >
                      {module.status === 'completed' 
                        ? <span>Completed</span> 
                        : <span>Start Learning</span>}
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
