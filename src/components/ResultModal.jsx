
import React, { useEffect } from 'react';
import { Award, ThumbsUp, AlertCircle, Clock, CheckCircle, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const ResultModal = ({ isOpen, score, totalQuestions, onDone }) => {
  const scorePercentage = (score / totalQuestions) * 100;
  
  useEffect(() => {
    // Show confetti animation if score is good
    if (isOpen && scorePercentage >= 70) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      
      const randomInRange = (min, max) => {
        return Math.random() * (max - min) + min;
      };
      
      const confettiInterval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        
        if (timeLeft <= 0) {
          clearInterval(confettiInterval);
          return;
        }
        
        confetti({
          particleCount: 2,
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: {
            x: randomInRange(0.1, 0.9),
            y: randomInRange(0.1, 0.5),
          },
          colors: ['#125b48', '#34D399', '#38BDF8', '#FBCFE8'],
          disableForReducedMotion: true
        });
      }, 150);
      
      return () => clearInterval(confettiInterval);
    }
  }, [isOpen, scorePercentage]);
  
  if (!isOpen) return null;

  // Determine the result status
  let statusIcon = <ThumbsUp className="text-yellow-500" size={32} />;
  let statusClass = "text-yellow-500";
  let message = "Good job!";
  let gradeBadge = "B";
  let gradeColor = "bg-yellow-500";
  
  if (scorePercentage < 60) {
    statusIcon = <AlertCircle className="text-[#750d1f]" size={32} />;
    statusClass = "text-[#750d1f]";
    message = "Keep practicing!";
    gradeBadge = "D";
    gradeColor = "bg-[#750d1f]";
  } else if (scorePercentage >= 60 && scorePercentage < 70) {
    statusIcon = <AlertCircle className="text-orange-500" size={32} />;
    statusClass = "text-orange-500";
    message = "Almost there!";
    gradeBadge = "C";
    gradeColor = "bg-orange-500";
  } else if (scorePercentage >= 70 && scorePercentage < 85) {
    statusIcon = <ThumbsUp className="text-[#125b48]" size={32} />;
    statusClass = "text-[#125b48]";
    message = "Well done!";
    gradeBadge = "B";
    gradeColor = "bg-[#125b48]";
  } else if (scorePercentage >= 85) {
    statusIcon = <Award className="text-[#125b48]" size={32} />;
    statusClass = "text-[#125b48]";
    message = "Excellent work!";
    gradeBadge = "A";
    gradeColor = "bg-[#125b48]";
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-4 animate-scale-in">
        <div className="bg-gradient-to-r from-[#125b48] to-[#1a7868] text-white pt-8 pb-12 px-6 text-center relative">
          <div className="absolute top-4 right-4">
            <div className={`${gradeColor} text-white text-3xl font-bold w-14 h-14 flex items-center justify-center rounded-full shadow-lg`}>
              {gradeBadge}
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-1">Test Results</h2>
          <p className="text-white text-opacity-80">Selling Skills Assessment</p>
          
          <div className="mt-6">
            <div className="text-6xl font-bold">{score}/{totalQuestions}</div>
            <p className={`text-xl font-medium mt-2`}>{message}</p>
          </div>
        </div>
        
        <div className="relative bg-white p-6 -mt-6 rounded-t-3xl">
          <div className="flex flex-col space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg flex justify-between">
              <div className="flex items-center">
                <CheckCircle className="text-[#125b48] mr-2" size={18} />
                <span className="text-gray-600">Correct Answers</span>
              </div>
              <span className="font-semibold">{score}</span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg flex justify-between">
              <div className="flex items-center">
                <XCircle className="text-[#750d1f] mr-2" size={18} />
                <span className="text-gray-600">Wrong Answers</span>
              </div>
              <span className="font-semibold">{totalQuestions - score}</span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg flex justify-between">
              <div className="flex items-center">
                <Clock className="text-gray-600 mr-2" size={18} />
                <span className="text-gray-600">Time Spent</span>
              </div>
              <span className="font-semibold">04:15</span>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Score Percentage</span>
                <span className="font-semibold">{scorePercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    scorePercentage >= 85 ? 'bg-[#125b48]' : 
                    scorePercentage >= 70 ? 'bg-green-500' : 
                    scorePercentage >= 60 ? 'bg-yellow-500' : 
                    'bg-[#750d1f]'
                  }`} 
                  style={{ width: `${scorePercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-6">
            <button 
              onClick={onDone}
              className="bg-[#125b48] hover:bg-[#0d4435] text-white font-medium rounded-md py-2 px-6 transition-colors duration-300 shadow-sm"
            >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
