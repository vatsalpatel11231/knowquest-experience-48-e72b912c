
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        className="bg-green text-white rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover-elevate min-w-[200px] min-h-[200px]"
        onClick={handleClick}
      >
        <div className="mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-12 h-12 text-white" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M12 3v18m-9-9h18" />
            <path d="M11 10.5v5l3-2.5-3-2.5z" fill="currentColor" />
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M7 7h10" />
            <path d="M7 12h10" />
            <path d="M7 17h10" />
          </svg>
        </div>
        <div className="text-center">
          <h4 className="uppercase font-bold mb-1">EXAM</h4>
          <h3 className="font-bold text-lg">{test.category}</h3>
        </div>
      </div>
    );
  }

  return (
    <tr className="hover:bg-gray-50 transition-colors duration-200">
      <td className="py-4 px-6 border-b">{test.name}</td>
      <td className="py-4 px-6 border-b">{test.dueDate}</td>
      <td className="py-4 px-6 border-b">{test.score || "-"}</td>
      <td className="py-4 px-6 border-b">{test.outOf}</td>
      <td className="py-4 px-6 border-b">
        {test.completed ? (
          <button 
            onClick={handleClick}
            className="bg-green text-white px-4 py-1 rounded text-sm"
          >
            VIEW
          </button>
        ) : (
          <button 
            onClick={handleClick}
            className="bg-maroon text-white px-4 py-1 rounded text-sm"
          >
            TAKE
          </button>
        )}
      </td>
    </tr>
  );
};

export default TestCard;
