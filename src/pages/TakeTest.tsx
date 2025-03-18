
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import { tests, questions } from '@/utils/mockData';
import ResultModal from '@/components/ResultModal';
import TestInstructions from '@/components/TestInstructions';
import { CheckCircle, Clock, ArrowLeft } from 'lucide-react';

const TakeTest: React.FC = () => {
  const navigate = useNavigate();
  const { category, testId } = useParams<{ category: string; testId: string }>();
  const [test, setTest] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    // Find the test
    const foundTest = tests.find(t => t.id === testId);
    if (!foundTest) {
      navigate('/test');
      return;
    }
    
    setTest(foundTest);
    setLoading(false);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [testId, navigate]);

  const startTest = () => {
    setShowInstructions(false);
    
    // Initialize array of empty answers
    setSelectedAnswers(new Array(questions.length).fill(''));
    
    // Start timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          // Time's up, auto-submit
          clearInterval(timerRef.current!);
          calculateScore();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleGetScore = () => {
    calculateScore();
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (index < questions.length && answer === questions[index].correctAnswer) {
        calculatedScore++;
      }
    });
    
    setScore(calculatedScore);
    setShowResults(true);
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleDone = () => {
    navigate(`/test/${category}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col">
        <div className="bg-maroon text-white p-4 flex items-center">
          <button 
            onClick={() => navigate(-1)} 
            className="mr-4 text-white"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">TAKE TEST</h1>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green mb-3"></div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-6"></div>
            <p className="text-gray-500">Loading test...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show instructions before starting the test
  if (showInstructions) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col">
        <div className="bg-maroon text-white p-4 flex items-center">
          <button 
            onClick={() => navigate(-1)} 
            className="mr-4 text-white"
            aria-label="Go back"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">TAKE TEST</h1>
        </div>
        
        <div className="container mx-auto p-6 flex-1">
          <TestInstructions 
            testName={test?.name || "Selling Skills Test"}
            totalQuestions={questions.length}
            timeLimit={5}
            onStartTest={startTest}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gray flex flex-col">
      <div className="bg-maroon text-white p-4 flex items-center">
        <button 
          onClick={() => navigate(-1)} 
          className="mr-4 text-white"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">TAKE TEST</h1>
      </div>
      
      <div className="container mx-auto p-6 flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-white px-4 py-2 rounded-md shadow-sm flex items-center">
            <CheckCircle className="text-green mr-2" size={18} />
            <span className="text-sm font-medium">Question {currentQuestion + 1} of {questions.length}</span>
          </div>
          
          <div className="bg-maroon text-white px-4 py-2 rounded-md shadow-sm flex items-center">
            <Clock className="mr-2" size={18} />
            <span className="font-medium">Timer: {formatTime(timeLeft)}</span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="test-progress-indicator">
          <div 
            className="test-progress-bar" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="lg:flex">
            {/* Left side - Image and test title */}
            <div className="lg:w-1/3 bg-gray-100 p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-2">{test?.name || "Selling Skills Test"}</h2>
              <p className="text-gray-600 mb-4">Answer the question below</p>
              
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/749c6bb9-2756-4949-9c8e-dadbae9b822e.png" 
                  alt="Test" 
                  className="max-w-full h-auto rounded-md shadow-sm"
                />
              </div>
            </div>
            
            {/* Right side - Question */}
            <div className="lg:w-2/3 p-6">
              <div className="mb-4">
                <span className="inline-block bg-green bg-opacity-10 text-green rounded-full px-3 py-1 text-sm font-semibold">
                  Question {currentQuestion + 1}
                </span>
              </div>
              
              <h3 className="text-lg font-bold mb-6">{questions[currentQuestion]?.text}</h3>
              
              <div className="space-y-3 mb-6">
                {questions[currentQuestion]?.options.map((option, index) => (
                  <label 
                    key={index} 
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                      selectedAnswers[currentQuestion] === option 
                        ? 'bg-green bg-opacity-10 border border-green' 
                        : 'bg-light-gray hover:bg-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      checked={selectedAnswers[currentQuestion] === option}
                      onChange={() => handleAnswerSelect(option)}
                      className="mr-3 h-4 w-4 accent-green"
                    />
                    <span className={`${
                      selectedAnswers[currentQuestion] === option 
                        ? 'text-green font-medium' 
                        : 'text-gray-700'
                    }`}>{option}</span>
                  </label>
                ))}
              </div>
              
              <div className="flex justify-end">
                {currentQuestion < questions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    disabled={!selectedAnswers[currentQuestion]}
                    className={`lms-button-primary ${
                      !selectedAnswers[currentQuestion] ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-green'
                    }`}
                  >
                    NEXT
                  </button>
                ) : (
                  <button
                    onClick={handleGetScore}
                    disabled={!selectedAnswers[currentQuestion]}
                    className={`lms-button-primary ${
                      !selectedAnswers[currentQuestion] ? 'opacity-50 cursor-not-allowed' : 'hover:bg-dark-green'
                    }`}
                  >
                    GET SCORE
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Modal */}
      <ResultModal
        isOpen={showResults}
        score={score}
        totalQuestions={questions.length}
        onDone={handleDone}
      />
    </div>
  );
};

export default TakeTest;
