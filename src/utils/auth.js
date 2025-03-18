
import { toast } from "sonner";

// Auth functions that would be replaced with real API calls in production
export const login = (username, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Static credentials for demo
      if (username === "Admin" && password === "Admin@123") {
        const user = {
          id: "1",
          name: "DELA CRUZ, JUAN",
          role: "admin",
          email: "juan.delacruz@example.com",
          department: "Sales",
          position: "Senior Sales Representative",
          joinDate: "01/15/2022",
          avatar: "/lovable-uploads/dba0b434-1b1e-4f5a-b6c0-e1742bb9f595.png",
        };
        
        // Store in localStorage for persistence
        localStorage.setItem("lms-user", JSON.stringify(user));
        localStorage.setItem("lms-token", "mock-jwt-token");
        
        toast.success("Login Successful", {
          description: "Welcome back, " + user.name.split(',')[1].trim()
        });
        resolve(user);
      } else {
        toast.error("Invalid Credentials", {
          description: "Please check your username and password"
        });
        resolve(null);
      }
    }, 800); // Simulate API delay
  });
};

export const logout = () => {
  localStorage.removeItem("lms-user");
  localStorage.removeItem("lms-token");
  toast.info("Logged out successfully");
  window.location.href = "/login";
};

export const getCurrentUser = () => {
  const userString = localStorage.getItem("lms-user");
  if (!userString) return null;
  
  try {
    return JSON.parse(userString);
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("lms-token");
};
