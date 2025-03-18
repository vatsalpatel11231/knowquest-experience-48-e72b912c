
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { getTestsByCategory } from '@/utils/mockData';

const TestDetails: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('Multiple Choice');
  const [tests, setTests] = useState<any[]>([]);
  
  const categoryName = category 
    ? category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) 
    : '';
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    // Filter tests by category
    if (category) {
      const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const testsInCategory = getTestsByCategory(categoryName);
      setTests(testsInCategory);
    }
    
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [category, navigate]);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value;
    setSelectedType(type);
    
    if (category) {
      const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      let filtered = getTestsByCategory(categoryName);
      
      if (type !== 'All') {
        filtered = filtered.filter(test => test.type === type);
      }
      
      setTests(filtered);
    }
  };
  
  const handleViewTest = (testId: string) => {
    navigate(`/test/${category}/${testId}/results`);
  };
  
  const handleTakeTest = (testId: string) => {
    navigate(`/test/${category}/${testId}/take`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col">
        <Header title={categoryName} showBackButton />
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
      <Header title={categoryName} showBackButton />
      
      <div className="lms-container flex-1">
        <div className="mb-6 flex items-center">
          <div className="flex items-center">
            <label htmlFor="typeFilter" className="mr-2 text-sm font-medium">
              Select Test Type:
            </label>
            <select
              id="typeFilter"
              value={selectedType}
              onChange={handleTypeChange}
              className="lms-dropdown"
            >
              <option value="All">All</option>
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="Essay">Essay</option>
              <option value="Mix">Mix</option>
            </select>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    NAME
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DUE DATE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SCORE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    OUT OF
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tests.length > 0 ? (
                  tests.map((test) => (
                    <tr key={test.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {test.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {test.dueDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {test.score || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {test.outOf}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                        {test.completed ? (
                          <button
                            onClick={() => handleViewTest(test.id)}
                            className="bg-green text-white px-4 py-1 rounded hover:bg-dark-green transition-colors"
                          >
                            VIEW
                          </button>
                        ) : (
                          <button
                            onClick={() => handleTakeTest(test.id)}
                            className="bg-maroon text-white px-4 py-1 rounded hover:bg-dark-maroon transition-colors"
                          >
                            TAKE
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                      No tests found matching the selected filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default TestDetails;
