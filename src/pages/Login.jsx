
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { login, isAuthenticated } from '@/utils/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Please enter both username and password');
      return;
    }
    
    setLoading(true);
    
    try {
      const user = await login(username, password);
      if (user) {
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="h-12 bg-maroon"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-light-gray p-6">
        <div className="w-full max-w-md animate-fade-in">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-8 flex flex-col items-center">
              {/* Logo */}
              <div className="mb-4 rounded-full overflow-hidden border-4 border-green w-24 h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/514444d1-cfce-42ce-bff2-14e8f83f681b.png" 
                  alt="RX Agad Solutions Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              {/* Title */}
              <h1 className="text-3xl font-bold text-green mb-1">RX LMS</h1>
              <p className="text-maroon mb-6">Version 1.0</p>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green"
                    disabled={loading}
                  />
                </div>
                
                <div className="mb-6">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green"
                    disabled={loading}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green hover:bg-dark-green text-white font-bold py-3 rounded-md transition-colors duration-200 flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    'LOGIN'
                  )}
                </button>
              </form>
              
              {/* Help text */}
              <p className="mt-6 text-sm text-gray-600 text-center">
                Demo Username: <span className="font-medium">Admin</span><br />
                Demo Password: <span className="font-medium">Admin@123</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
