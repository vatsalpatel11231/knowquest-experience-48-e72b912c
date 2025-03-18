
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import GradesChart from '@/components/GradesChart';
import CollapsiblePanel from '@/components/CollapsiblePanel';
import ProgressCircle from '@/components/ProgressCircle';
import { areaData, statData } from '@/utils/mockData';
import { TableIcon, BarChart2 } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green mb-3"></div>
            <div className="h-4 w-24 bg-gray-300 rounded mb-6"></div>
            <p className="text-gray-500">Loading dashboard...</p>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gray flex flex-col pb-16">
      <Header />
      
      <div className="lms-container flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Grades Chart - Takes up 2/3 on medium screens and above */}
          <div className="md:col-span-2 min-h-[400px]">
            <GradesChart />
          </div>
          
          {/* Right Panels - Takes up 1/3 on medium screens and above */}
          <div className="md:col-span-1 space-y-6">
            {/* Areas Panel */}
            <CollapsiblePanel 
              title="AREAS" 
              color="bg-maroon" 
              icon={<TableIcon className="w-5 h-5" />}
              showSearch
            >
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <th className="py-2">Name</th>
                      <th className="py-2 text-center">Passing</th>
                      <th className="py-2 text-center">Actual</th>
                      <th className="py-2 text-center">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {areaData.map((area, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-2 text-sm">{area.name}</td>
                        <td className="py-2 text-center text-sm">{area.passing}</td>
                        <td className="py-2 text-center text-sm">{area.actual}</td>
                        <td className="py-2 text-center">
                          <span 
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              area.percentage >= 80 
                                ? 'bg-green text-white' 
                                : area.percentage >= 60 
                                  ? 'bg-yellow-500 text-white' 
                                  : 'bg-maroon text-white'
                            }`}
                          >
                            {area.percentage}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CollapsiblePanel>
            
            {/* Statistics Panel */}
            <CollapsiblePanel 
              title="STATISTICS" 
              color="bg-maroon"
              icon={<BarChart2 className="w-5 h-5" />}
            >
              <div className="grid grid-cols-2 gap-4">
                {statData.map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center"
                  >
                    <ProgressCircle 
                      percentage={stat.value} 
                      color={stat.color} 
                      size={80} 
                      strokeWidth={6}
                    />
                    <span className="mt-2 text-sm font-medium text-gray-700">{stat.name}</span>
                  </div>
                ))}
              </div>
            </CollapsiblePanel>
          </div>
        </div>
      </div>
      
      <Navigation />
    </div>
  );
};

export default Dashboard;
