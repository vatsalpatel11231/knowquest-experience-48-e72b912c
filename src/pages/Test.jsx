
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import TestCard from '../components/TestCard';
import { tests } from '../utils/mockData';

const Test = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [testCategories, setTestCategories] = useState([]);
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    // Get unique categories
    const categories = [...new Set(tests.map(test => test.category))].map(
      category => {
        const testInCategory = tests.find(t => t.category === category);
        return {
          category,
          id: testInCategory?.id || '',
        };
      }
    );
    
    setTestCategories(categories);
    
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col">
        <Header title="TEST" />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green mb-3"></div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-6"></div>
            <p className="text-gray-500">Loading tests...</p>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gray flex flex-col pb-16">
      <Header title="TEST" />
      
      <div className="lms-container flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testCategories.map((test) => (
            <TestCard 
              key={test.category} 
              test={{
                id: test.id,
                name: '',
                category: test.category,
                type: 'Multiple Choice',
                dueDate: '',
                outOf: 0,
                completed: false,
              }}
              categoryView
            />
          ))}
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Test;
