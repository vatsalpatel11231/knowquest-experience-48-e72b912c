
import React from 'react';
import { Clock, Info, AlertTriangle, CheckCircle, Award, BookOpen, HelpCircle, Shield } from 'lucide-react';

const TestInstructions = ({ testName, totalQuestions, timeLimit, onStartTest }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-[#125b48] to-[#1a7868] text-white p-6">
        <h2 className="text-2xl font-bold flex items-center">
          <BookOpen className="mr-3" size={24} />
          Test Instructions
        </h2>
        <p className="text-white text-opacity-80 mt-1">
          Please read carefully before beginning
        </p>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">{testName}</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-50 rounded-lg p-4 flex items-center border-l-4 border-[#125b48]">
            <div className="bg-[#125b48] bg-opacity-10 p-3 rounded-full mr-3">
              <Clock className="text-[#125b48]" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Time Limit</p>
              <p className="font-bold text-gray-800">{timeLimit} minutes</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 flex items-center border-l-4 border-[#125b48]">
            <div className="bg-[#125b48] bg-opacity-10 p-3 rounded-full mr-3">
              <CheckCircle className="text-[#125b48]" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Questions</p>
              <p className="font-bold text-gray-800">{totalQuestions} questions</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 flex items-center border-l-4 border-[#125b48]">
            <div className="bg-[#125b48] bg-opacity-10 p-3 rounded-full mr-3">
              <Award className="text-[#125b48]" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Passing Score</p>
              <p className="font-bold text-gray-800">70%</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
            <Info className="mr-2 text-[#125b48]" size={20} />
            Important Instructions:
          </h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start p-3 bg-gray-50 rounded-lg">
              <Clock className="mr-3 mt-0.5 text-[#125b48] flex-shrink-0" size={18} />
              <span>
                You have <strong>{timeLimit} minutes</strong> to complete all {totalQuestions} questions. A timer will be displayed to help you track your time.
              </span>
            </li>
            <li className="flex items-start p-3 bg-gray-50 rounded-lg">
              <HelpCircle className="mr-3 mt-0.5 text-[#125b48] flex-shrink-0" size={18} />
              <span>
                Each question must be answered in sequence. You cannot go back to previous questions once answered.
              </span>
            </li>
            <li className="flex items-start p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="mr-3 mt-0.5 text-[#125b48] flex-shrink-0" size={18} />
              <span>
                Select the best answer for each multiple-choice question. Only one answer is correct per question.
              </span>
            </li>
            <li className="flex items-start p-3 bg-gray-50 rounded-lg">
              <Shield className="mr-3 mt-0.5 text-[#125b48] flex-shrink-0" size={18} />
              <span>
                A score of <strong>70% or higher</strong> is required to pass this assessment.
              </span>
            </li>
            <li className="flex items-start p-3 bg-gray-50 rounded-lg">
              <AlertTriangle className="mr-3 mt-0.5 text-[#750d1f] flex-shrink-0" size={18} />
              <span className="text-[#750d1f]">
                <strong>Important:</strong> The test will automatically submit once the time limit is reached.
              </span>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#125b48] bg-opacity-10 rounded-lg p-4 mb-8 border-l-4 border-[#125b48]">
          <h4 className="font-bold text-[#125b48] mb-2 flex items-center">
            <Info size={18} className="mr-2" />
            Helpful Tips
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2 text-[#125b48]">•</span>
              Read each question carefully before selecting your answer.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#125b48]">•</span>
              Manage your time effectively. Don't spend too much time on any single question.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#125b48]">•</span>
              If you're unsure about an answer, make your best educated guess.
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">Click the button below when you are ready to begin the test.</p>
          <button 
            onClick={onStartTest}
            className="bg-[#125b48] hover:bg-[#0d4435] text-white font-medium py-3 px-8 rounded-md shadow-md transition-all duration-300 transform hover:scale-105"
          >
            START TEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestInstructions;
