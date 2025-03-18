
import React from 'react';
import { Clock, Info, AlertTriangle, CheckCircle, Award } from 'lucide-react';

interface TestInstructionsProps {
  testName: string;
  totalQuestions: number;
  timeLimit: number; // in minutes
  onStartTest: () => void;
}

const TestInstructions: React.FC<TestInstructionsProps> = ({
  testName,
  totalQuestions,
  timeLimit,
  onStartTest
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-maroon text-white p-4">
        <h2 className="text-xl font-bold flex items-center">
          <Info className="mr-2" size={20} />
          Test Instructions
        </h2>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{testName}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-light-gray rounded-lg p-4 flex items-center">
            <Clock className="text-green mr-3" size={24} />
            <div>
              <p className="text-sm text-gray-500">Time Limit</p>
              <p className="font-bold text-gray-800">{timeLimit} minutes</p>
            </div>
          </div>
          
          <div className="bg-light-gray rounded-lg p-4 flex items-center">
            <CheckCircle className="text-green mr-3" size={24} />
            <div>
              <p className="text-sm text-gray-500">Questions</p>
              <p className="font-bold text-gray-800">{totalQuestions} questions</p>
            </div>
          </div>
          
          <div className="bg-light-gray rounded-lg p-4 flex items-center">
            <Award className="text-green mr-3" size={24} />
            <div>
              <p className="text-sm text-gray-500">Passing Score</p>
              <p className="font-bold text-gray-800">70%</p>
            </div>
          </div>
        </div>
        
        <div className="instruction-card mb-6">
          <h4 className="font-bold text-gray-800 mb-2">Important Instructions:</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-green">•</span>
              You have {timeLimit} minutes to complete all {totalQuestions} questions.
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-green">•</span>
              Each question must be answered in sequence. You cannot go back to previous questions.
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-green">•</span>
              Select the best answer for each multiple-choice question.
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1 text-maroon">•</span>
              The test will automatically submit once the time limit is reached.
            </li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="text-yellow-400" size={24} />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Once you start the test, you must complete it in one session. Make sure you have a stable internet connection.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={onStartTest}
            className="lms-button-primary px-8 py-3 text-lg"
          >
            START TEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestInstructions;
