
import { toast } from "sonner";

// Mock authentication functions that would be replaced with real API calls later
export interface User {
  id: string;
  name: string;
  role: string;
  avatar?: string;
}

export const login = (username: string, password: string): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Static credentials for demo
      if (username === "Admin" && password === "Admin@123") {
        const user = {
          id: "1",
          name: "DELA CRUZ, JUAN",
          role: "admin",
          avatar: "/lovable-uploads/dba0b434-1b1e-4f5a-b6c0-e1742bb9f595.png",
        };
        
        // Store in localStorage for persistence
        localStorage.setItem("lms-user", JSON.stringify(user));
        localStorage.setItem("lms-token", "mock-jwt-token");
        
        toast.success("Login Successful");
        resolve(user);
      } else {
        toast.error("Invalid Credentials");
        resolve(null);
      }
    }, 800); // Simulate API delay
  });
};

export const logout = (): void => {
  localStorage.removeItem("lms-user");
  localStorage.removeItem("lms-token");
  window.location.href = "/";
};

export const getCurrentUser = (): User | null => {
  const userString = localStorage.getItem("lms-user");
  if (!userString) return null;
  
  try {
    return JSON.parse(userString) as User;
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("lms-token");
};
