
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ResultModalProps {
  isOpen: boolean;
  score: number;
  totalQuestions: number;
  onNext?: () => void;
  onDone: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  score,
  totalQuestions,
  onNext,
  onDone,
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 animate-fade-in">
      <div className="relative bg-white rounded-lg overflow-hidden shadow-xl w-full max-w-md mx-4 animate-scale-in">
        <div className="border-4 border-maroon rounded-lg">
          <div className="p-6 flex flex-col items-center">
            <div className="w-20 h-20 mb-4">
              <img 
                src="/lovable-uploads/5b2d782e-67e8-4ab3-b4b3-a3025bd22634.png" 
                alt="Trophy" 
                className="w-full h-full object-contain animate-fade-in" 
              />
            </div>
            
            <h2 className="text-4xl font-bold mb-6">{score}/{totalQuestions}</h2>
            
            <div className="w-full border-t border-gray-200 my-4"></div>
            
            <div className="w-full text-center mb-6">
              <p className="flex justify-between mb-2">
                <span className="font-medium">Total Questions:</span>
                <span>{totalQuestions}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Total Correct Answers:</span>
                <span>{score}</span>
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              {onNext && (
                <button 
                  onClick={onNext}
                  className="lms-button-primary"
                >
                  NEXT
                </button>
              )}
              
              <button 
                onClick={onDone}
                className="lms-button-primary"
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
