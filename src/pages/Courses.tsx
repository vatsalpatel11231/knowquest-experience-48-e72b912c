
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/utils/mockData';

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [courseCategories, setCourseCategories] = useState<
    { category: string; id: string }[]
  >([]);
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    // Get unique categories
    const categories = [...new Set(courses.map(course => course.category))].map(
      category => {
        const courseInCategory = courses.find(c => c.category === category);
        return {
          category,
          id: courseInCategory?.id || '',
        };
      }
    );
    
    setCourseCategories(categories);
    
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col">
        <Header title="COURSES" />
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
      <Header title="COURSES" />
      
      <div className="lms-container flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseCategories.map((course) => (
            <CourseCard 
              key={course.category} 
              course={{
                id: course.id,
                title: '',
                category: course.category as any,
                type: 'Video',
                description: '',
                date: '',
                image: '',
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

export default Courses;
