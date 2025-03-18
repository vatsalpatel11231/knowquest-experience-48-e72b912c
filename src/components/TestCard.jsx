
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, PlayCircle, BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const TestCard = ({ test, categoryView = false }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (categoryView) {
      navigate(`/test/${test.category.replace(/\s+/g, '-').toLowerCase()}`);
    } else {
      if (test.completed) {
        navigate(`/test/${test.category.replace(/\s+/g, '-').toLowerCase()}/${test.id}`);
      } else {
        navigate(`/test/${test.category.replace(/\s+/g, '-').toLowerCase()}/${test.id}/take`);
      }
    }
  };

  // For category cards
  if (categoryView) {
    return (
      <div 
        className="bg-[#125b48] text-white rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
        onClick={handleClick}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
        
        {/* Glowing effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-[#125b48] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        <div className="mb-4 bg-white bg-opacity-10 rounded-full p-4 float-animation relative z-10">
          <BookOpen 
            className="w-12 h-12 text-white" 
            strokeWidth={1.5}
          />
        </div>
        
        <div className="text-center relative z-10">
          <h4 className="uppercase font-bold mb-1 text-xs tracking-wider opacity-80">ASSESSMENT</h4>
          <h3 className="font-bold text-lg">{test.category}</h3>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white opacity-5 rounded-tl-full"></div>
      </div>
    );
  }

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="py-4 px-6 border-b">
        <div className="flex items-center">
          <div className="mr-3 bg-[#125b48] bg-opacity-10 rounded-full p-2">
            {test.completed ? 
              <CheckCircle className="text-[#125b48]" size={18} /> : 
              <PlayCircle className="text-[#750d1f]" size={18} />
            }
          </div>
          <span className="font-medium text-gray-800">{test.name}</span>
        </div>
      </td>
      <td className="py-4 px-6 border-b">
        <div className="flex items-center">
          <Calendar size={14} className="mr-2 text-gray-400" />
          {test.dueDate}
        </div>
      </td>
      <td className="py-4 px-6 border-b">
        {test.score ? (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="font-medium text-[#125b48]">{test.score}/{test.outOf}</span>
              <span className="text-gray-500">{Math.round((test.score/test.outOf) * 100)}%</span>
            </div>
            <Progress value={(test.score/test.outOf) * 100} className="h-2" />
          </div>
        ) : (
          <span className="text-gray-400">-</span>
        )}
      </td>
      <td className="py-4 px-6 border-b text-gray-600">{test.outOf}</td>
      <td className="py-4 px-6 border-b">
        {test.completed ? (
          <button 
            onClick={handleClick}
            className="bg-[#125b48] text-white px-4 py-1 rounded-md text-sm shadow-sm hover:bg-[#0d4435] transition-colors"
          >
            VIEW
          </button>
        ) : (
          <button 
            onClick={handleClick}
            className="bg-[#750d1f] text-white px-4 py-1 rounded-md text-sm shadow-sm hover:bg-[#5a0a18] transition-colors"
          >
            TAKE
          </button>
        )}
      </td>
    </tr>
  );
};

export default TestCard;
