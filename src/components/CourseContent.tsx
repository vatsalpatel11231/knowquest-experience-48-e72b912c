
import React from 'react';
import { Video, FileText, Download, ExternalLink, Clock, Calendar, Award } from 'lucide-react';

interface CourseContentProps {
  course: {
    title: string;
    description: string;
    type: string;
    date: string;
    image: string;
    content?: string;
  }
}

const CourseContent: React.FC<CourseContentProps> = ({ course }) => {
  const getContentIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return <Video className="text-green" size={20} />;
      case 'PDF':
        return <FileText className="text-maroon" size={20} />;
      case 'Interactive':
        return <ExternalLink className="text-blue-500" size={20} />;
      default:
        return <FileText className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green p-4 text-white">
        <h2 className="text-xl font-bold">{course.title}</h2>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - course image and info */}
          <div className="md:w-1/3">
            <div className="mb-6">
              <img 
                src={course.image || "/lovable-uploads/84e0eefa-b5a0-4daa-8281-fc69bdf8d6ad.png"} 
                alt={course.title} 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            
            <div className="bg-light-gray rounded-lg p-4 mb-6">
              <h3 className="font-bold text-gray-800 mb-3">Course Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-3">
                    {getContentIcon(course.type)}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-medium">{course.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-3">
                    <Clock className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">30 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-3">
                    <Calendar className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{course.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-full mr-3">
                    <Award className="text-gray-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Certificate</p>
                    <p className="font-medium">Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button className="lms-button-secondary w-full">
                <Download className="mr-2" size={16} />
                DOWNLOAD MATERIALS
              </button>
            </div>
          </div>
          
          {/* Right side - course content */}
          <div className="md:w-2/3">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Description</h3>
              <p className="text-gray-700">{course.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Learning Objectives</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">Understand key selling techniques in pharmaceutical sales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">Apply effective communication strategies with healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">Master product knowledge presentation for maximum impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green mr-2">•</span>
                  <span className="text-gray-700">Learn objection handling techniques specific to medical settings</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-3">Content</h3>
              
              {course.type === 'Video' && (
                <div className="bg-light-gray rounded-lg p-6 flex flex-col items-center justify-center">
                  <div className="w-full h-0 pb-[56.25%] relative mb-4">
                    <div className="absolute inset-0 bg-black rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-green bg-opacity-80 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">Click to play the training video</p>
                </div>
              )}
              
              {course.type === 'PDF' && (
                <div className="bg-light-gray rounded-lg p-6 flex flex-col items-center justify-center">
                  <FileText className="text-maroon mb-3" size={48} />
                  <p className="text-gray-600 mb-3">Course materials are available as PDF</p>
                  <button className="lms-button-primary">
                    <Download className="mr-2" size={16} />
                    VIEW PDF
                  </button>
                </div>
              )}
              
              {course.type === 'Interactive' && (
                <div className="bg-light-gray rounded-lg p-6 flex flex-col items-center justify-center">
                  <ExternalLink className="text-blue-500 mb-3" size={48} />
                  <p className="text-gray-600 mb-3">Interactive content available</p>
                  <button className="lms-button-primary">
                    START INTERACTIVE MODULE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
