
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CourseCard from '@/components/CourseCard';
import { courses, getCoursesByCategory } from '@/utils/mockData';
import { Filter, Search } from 'lucide-react';

const CourseDetails: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
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
    
    // Filter courses by category
    if (category) {
      const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const coursesInCategory = getCoursesByCategory(categoryName);
      setFilteredCourses(coursesInCategory);
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
    if (category) {
      const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      let filtered = getCoursesByCategory(categoryName);
      
      // Filter by type
      if (type !== 'All') {
        filtered = filtered.filter(course => course.type === type);
      }
      
      // Filter by search term
      if (term) {
        filtered = filtered.filter(course => 
          course.title.toLowerCase().includes(term.toLowerCase()) ||
          course.description.toLowerCase().includes(term.toLowerCase())
        );
      }
      
      setFilteredCourses(filtered);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col">
        <Header title={categoryName} showBackButton />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green mb-3"></div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-6"></div>
            <p className="text-gray-500">Loading courses...</p>
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
                placeholder="Search courses..."
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
                  <span>Material Type: <strong>{selectedType}</strong></span>
                </span>
                <svg className={`w-4 h-4 transition-transform ${showFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {showFilter && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200">
                  <div className="py-1">
                    {['All', 'Video', 'PDF', 'Interactive'].map((type) => (
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-500 mb-4">No courses found matching your filters.</p>
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
          )}
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default CourseDetails;
