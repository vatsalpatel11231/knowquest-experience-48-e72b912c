
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, ThumbsUp, AlertCircle } from 'lucide-react';

const ResultModal = ({
  isOpen,
  score,
  totalQuestions,
  onNext,
  onDone,
}) => {
  const navigate = useNavigate();
  const scorePercentage = (score / totalQuestions) * 100;
  
  if (!isOpen) return null;

  // Determine the icon and class based on the score percentage
  let icon = <ThumbsUp className="text-green-500" size={32} />;
  let messageClass = "text-green-500";
  let message = "Great job!";
  
  if (scorePercentage < 60) {
    icon = <AlertCircle className="text-maroon" size={32} />;
    messageClass = "text-maroon";
    message = "Keep practicing!";
  } else if (scorePercentage >= 90) {
    icon = <Award className="text-yellow-500" size={32} />;
    messageClass = "text-yellow-500";
    message = "Excellent work!";
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 animate-fade-in">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl w-full max-w-md mx-4 animate-scale-in">
        <div className="border-[6px] border-maroon rounded-2xl">
          <div className="p-8 flex flex-col items-center">
            <div className="w-24 h-24 mb-6 trophy-animation">
              <img 
                src="/lovable-uploads/ff1b645c-fa6c-4f12-a950-80516e2a1042.png" 
                alt="Trophy" 
                className="w-full h-full object-contain animate-fade-in" 
              />
            </div>
            
            <h2 className="text-5xl font-bold mb-2">{score}/{totalQuestions}</h2>
            <p className={`${messageClass} font-medium mb-6`}>{message}</p>
            
            <div className="w-full border-t border-gray-200 my-4"></div>
            
            <div className="results-grid w-full">
              <div className="result-item">
                <span className="font-medium text-gray-700">Total Questions:</span>
                <span className="font-bold">{totalQuestions}</span>
              </div>
              <div className="result-item">
                <span className="font-medium text-gray-700">Correct Answers:</span>
                <span className="font-bold">{score}</span>
              </div>
              <div className="result-item">
                <span className="font-medium text-gray-700">Percentage:</span>
                <span className="font-bold">{scorePercentage.toFixed(0)}%</span>
              </div>
              <div className="result-item">
                <span className="font-medium text-gray-700">Time Spent:</span>
                <span className="font-bold">04:15</span>
              </div>
            </div>
            
            <div className="w-full border-t border-gray-200 my-4"></div>
            
            <div className="flex justify-center space-x-4 mt-2">
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
