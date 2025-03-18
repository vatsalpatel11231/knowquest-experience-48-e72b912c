
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CourseCard from '@/components/CourseCard';
import { courses, getCoursesByCategory } from '@/utils/mockData';

const CourseDetails: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('Video');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
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

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value;
    setSelectedType(type);
    
    if (category) {
      const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      let filtered = getCoursesByCategory(categoryName);
      
      if (type !== 'All') {
        filtered = filtered.filter(course => course.type === type);
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
    <div className="min-h-screen bg-light-gray flex flex-col pb-16">
      <Header title={categoryName} showBackButton />
      
      <div className="lms-container flex-1">
        <div className="mb-6 flex items-center">
          <div className="flex items-center">
            <label htmlFor="typeFilter" className="mr-2 text-sm font-medium">
              Select Training Material Type:
            </label>
            <select
              id="typeFilter"
              value={selectedType}
              onChange={handleTypeChange}
              className="lms-dropdown"
            >
              <option value="All">All</option>
              <option value="Video">Video</option>
              <option value="PDF">PDF</option>
              <option value="Interactive">Interactive</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No courses found matching the selected filter.</p>
            </div>
          )}
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default CourseDetails;
