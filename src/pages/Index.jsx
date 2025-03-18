
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import CourseProgressList from '../components/CourseProgressList';
import GradesChart from '../components/GradesChart';
import UpcomingTests from '../components/UpcomingTests';
import CollapsiblePanel from '../components/CollapsiblePanel';
import { BookOpen, PieChart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    // If not logged in, redirect to login
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-light-gray flex flex-col pb-20">
      <Header />
      
      <div className="lms-container flex-1">
        {/* Main dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Progress chart panel */}
          <CollapsiblePanel 
            title="COURSE PROGRESS" 
            color="bg-green"
            icon={<BookOpen size={18} />}
          >
            <CourseProgressList />
          </CollapsiblePanel>
          
          {/* Grades chart panel */}
          <div className="h-[450px]">
            <GradesChart />
          </div>
          
          {/* Upcoming tests panel */}
          <CollapsiblePanel 
            title="UPCOMING TESTS" 
            color="bg-maroon"
            icon={<PieChart size={18} />}
            showSearch
          >
            <UpcomingTests />
          </CollapsiblePanel>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Index;
