
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "@/utils/auth";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CourseView from "./pages/CourseView";
import Test from "./pages/Test";
import TestDetails from "./pages/TestDetails";
import TakeTest from "./pages/TakeTest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/courses" element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          } />
          
          <Route path="/courses/:category" element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          } />
          
          <Route path="/courses/:category/:courseId" element={
            <ProtectedRoute>
              <CourseView />
            </ProtectedRoute>
          } />
          
          <Route path="/test" element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          } />
          
          <Route path="/test/:category" element={
            <ProtectedRoute>
              <TestDetails />
            </ProtectedRoute>
          } />
          
          <Route path="/test/:category/:testId/take" element={
            <ProtectedRoute>
              <TakeTest />
            </ProtectedRoute>
          } />
          
          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
