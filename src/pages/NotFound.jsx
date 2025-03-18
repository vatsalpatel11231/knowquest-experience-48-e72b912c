
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray p-6">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <div className="w-24 h-24 bg-maroon rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="text-white" size={40} />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="mr-2" size={18} />
            GO BACK
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="flex items-center justify-center lms-button-primary"
          >
            <Home className="mr-2" size={18} />
            DASHBOARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
