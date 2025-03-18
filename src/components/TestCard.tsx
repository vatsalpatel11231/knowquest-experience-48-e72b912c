
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, PlayCircle } from 'lucide-react';
import { Test } from '@/utils/mockData';

interface TestCardProps {
  test: Test;
  categoryView?: boolean;
}

const TestCard: React.FC<TestCardProps> = ({ test, categoryView = false }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (categoryView) {
      navigate(`/test/${test.category.replace(/\s+/g, '-').toLowerCase()}`);
    } else {
      navigate(`/test/${test.category.replace(/\s+/g, '-').toLowerCase()}/${test.id}`);
    }
  };

  // For category cards
  if (categoryView) {
    return (
      <div 
        className="bg-green text-white rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover-elevate shadow-md transform transition-all duration-300 hover:-translate-y-2"
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
            <path d="M9 11.5l2 2 4-5" />
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="uppercase font-bold mb-1 text-xs tracking-wider opacity-80">ASSESSMENT</h4>
          <h3 className="font-bold text-lg">{test.category}</h3>
        </div>
      </div>
    );
  }

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="py-4 px-6 border-b">
        <div className="flex items-center">
          <div className="mr-3 bg-green bg-opacity-10 rounded-full p-2">
            {test.completed ? 
              <CheckCircle className="text-green" size={18} /> : 
              <PlayCircle className="text-maroon" size={18} />
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
          <span className="bg-green bg-opacity-10 text-green px-2 py-1 rounded-full text-xs font-medium">
            {test.score}/{test.outOf}
          </span>
        ) : (
          <span className="text-gray-400">-</span>
        )}
      </td>
      <td className="py-4 px-6 border-b text-gray-600">{test.outOf}</td>
      <td className="py-4 px-6 border-b">
        {test.completed ? (
          <button 
            onClick={handleClick}
            className="bg-green text-white px-4 py-1 rounded-md text-sm shadow-sm hover:bg-dark-green transition-colors"
          >
            VIEW
          </button>
        ) : (
          <button 
            onClick={handleClick}
            className="bg-maroon text-white px-4 py-1 rounded-md text-sm shadow-sm hover:bg-dark-maroon transition-colors"
          >
            TAKE
          </button>
        )}
      </td>
    </tr>
  );
};

export default TestCard;
