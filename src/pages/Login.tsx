
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { login, isAuthenticated } from '@/utils/auth';

const Login: React.FC = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
                    className="lms-input"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="lms-input"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="lms-button-primary w-full flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      LOGGING IN...
                    </span>
                  ) : (
                    'LOGIN'
                  )}
                </button>
                
                <div className="mt-4 text-xs text-center text-gray-500">
                  <p>Use Admin / Admin@123 to login</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="h-8 bg-dark-green"></div>
    </div>
  );
};

export default Login;
