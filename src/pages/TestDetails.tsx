
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import { getTestsByCategory } from '@/utils/mockData';
import { Filter, Search, FileCheck, Calendar, BarChart2 } from 'lucide-react';
import TestCard from '@/components/TestCard';

const TestDetails: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [tests, setTests] = useState<any[]>([]);
  const [filteredTests, setFilteredTests] = useState<any[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  
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
      setFilteredTests(testsInCategory);
    }
    
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [category, navigate]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    applyFilters(selectedType, term);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setShowFilter(false);
    
    applyFilters(type, searchTerm);
  };
  
  const applyFilters = (type: string, term: string) => {
    let filtered = [...tests];
    
    // Filter by type
    if (type !== 'All') {
      filtered = filtered.filter(test => test.type === type);
    }
    
    // Filter by search term
    if (term) {
      filtered = filtered.filter(test => 
        test.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    setFilteredTests(filtered);
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
    <div className="min-h-screen bg-light-gray flex flex-col pb-20">
      <Header title={categoryName} showBackButton />
      
      <div className="lms-container flex-1">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search input */}
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={18} />
              </div>
              <input
                type="text"
                placeholder="Search tests..."
                value={searchTerm}
                onChange={handleSearch}
                className="lms-input pl-10"
              />
            </div>
            
            {/* Filter dropdown */}
            <div className="filter-dropdown">
              <button 
                onClick={() => setShowFilter(!showFilter)}
                className="filter-dropdown-toggle"
              >
                <span className="flex items-center">
                  <Filter className="mr-2 text-green" size={18} />
                  <span>Test Type: <strong>{selectedType}</strong></span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${showFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {showFilter && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200">
                  <div className="py-1">
                    {['All', 'Multiple Choice', 'Essay', 'Mix'].map((type) => (
                      <button
                        key={type}
                        onClick={() => handleTypeChange(type)}
                        className={`block w-full text-left px-4 py-2 hover:bg-light-gray ${
                          selectedType === type ? 'bg-green bg-opacity-10 text-green' : 'text-gray-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Test statistics summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="rounded-full bg-green bg-opacity-10 p-3 mr-3">
              <FileCheck className="text-green" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Available Tests</p>
              <p className="font-bold text-lg">{filteredTests.length}</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="rounded-full bg-green bg-opacity-10 p-3 mr-3">
              <Calendar className="text-green" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Upcoming Deadline</p>
              <p className="font-bold text-lg">Mar 21, 2023</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="rounded-full bg-green bg-opacity-10 p-3 mr-3">
              <BarChart2 className="text-green" size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Average Score</p>
              <p className="font-bold text-lg">85%</p>
            </div>
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
                {filteredTests.length > 0 ? (
                  filteredTests.map((test) => (
                    <TestCard key={test.id} test={test} />
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                      <div className="py-8">
                        <div className="mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-500 mb-4">No tests found matching your filters.</p>
                        <button 
                          onClick={() => {
                            setSelectedType('All');
                            setSearchTerm('');
                            applyFilters('All', '');
                          }}
                          className="lms-button-primary"
                        >
                          CLEAR FILTERS
                        </button>
                      </div>
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
