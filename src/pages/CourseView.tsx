
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CourseContent from '@/components/CourseContent';
import { courses, getCourseById } from '@/utils/mockData';

const CourseView: React.FC = () => {
  const navigate = useNavigate();
  const { category, courseId } = useParams<{ category: string; courseId: string }>();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<any>(null);
  
  const categoryName = category 
    ? category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) 
    : '';
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    // Find course by id
    if (courseId) {
      const foundCourse = getCourseById(courseId);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        navigate('/courses');
      }
    }
    
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [courseId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col">
        <Header title={course?.title || categoryName} showBackButton />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green mb-3"></div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-6"></div>
            <p className="text-gray-500">Loading course content...</p>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gray flex flex-col pb-20">
      <Header title={course?.title} showBackButton />
      
      <div className="lms-container flex-1">
        {course ? (
          <CourseContent course={course} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Course not found.</p>
            <button 
              onClick={() => navigate('/courses')} 
              className="lms-button-primary mt-4"
            >
              BACK TO COURSES
            </button>
          </div>
        )}
      </div>
      
      <Navigation />
    </div>
  );
};

export default CourseView;
