
export interface Course {
  id: string;
  title: string;
  category: 'Selling Skills' | 'Product Knowledge' | 'Territory Management' | 'Admin Compliance';
  type: 'Video' | 'PDF' | 'Interactive';
  description: string;
  date: string;
  image: string;
}

export interface Test {
  id: string;
  name: string;
  category: 'Selling Skills' | 'Product Knowledge' | 'Territory Management' | 'Admin Compliance';
  type: 'Multiple Choice' | 'Essay' | 'Mix';
  dueDate: string;
  score?: number;
  outOf: number;
  completed: boolean;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface GradeData {
  month: string;
  passing: number;
  actual: number;
}

export interface AreaData {
  name: string;
  passing: number;
  actual: number;
  percentage: number;
}

export interface StatData {
  name: string;
  value: number;
  color: string;
  icon: string;
}

// Course data
export const courses: Course[] = [
  {
    id: "c1",
    title: "Introduction to Selling Skills",
    category: "Selling Skills",
    type: "Video",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "March 17, 2025",
    image: "/lovable-uploads/84e0eefa-b5a0-4daa-8281-fc69bdf8d6ad.png",
  },
  {
    id: "c2",
    title: "Advanced Communication",
    category: "Selling Skills",
    type: "Video",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "March 21, 2025",
    image: "/lovable-uploads/84e0eefa-b5a0-4daa-8281-fc69bdf8d6ad.png",
  },
  {
    id: "c3",
    title: "Product Features Overview",
    category: "Product Knowledge",
    type: "PDF",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "March 19, 2025",
    image: "/lovable-uploads/84e0eefa-b5a0-4daa-8281-fc69bdf8d6ad.png",
  },
  {
    id: "c4",
    title: "Territory Planning Basics",
    category: "Territory Management",
    type: "Interactive",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "March 22, 2025",
    image: "/lovable-uploads/84e0eefa-b5a0-4daa-8281-fc69bdf8d6ad.png",
  },
  {
    id: "c5",
    title: "Compliance Guidelines",
    category: "Admin Compliance",
    type: "PDF",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "March 25, 2025",
    image: "/lovable-uploads/84e0eefa-b5a0-4daa-8281-fc69bdf8d6ad.png",
  },
];

// Test data
export const tests: Test[] = [
  {
    id: "t1",
    name: "Introduction to Selling Skills",
    category: "Selling Skills",
    type: "Multiple Choice",
    dueDate: "Mar 17, 2025",
    score: 4,
    outOf: 5,
    completed: true,
  },
  {
    id: "t2",
    name: "Selling Skills Tasks",
    category: "Selling Skills",
    type: "Multiple Choice",
    dueDate: "Mar 21, 2025",
    outOf: 15,
    completed: false,
  },
  {
    id: "t3",
    name: "Advanced Selling Skills",
    category: "Selling Skills",
    type: "Mix",
    dueDate: "Mar 26, 2025",
    outOf: 10,
    completed: false,
  },
  {
    id: "t4",
    name: "Product Knowledge Basics",
    category: "Product Knowledge",
    type: "Multiple Choice",
    dueDate: "Mar 19, 2025",
    outOf: 10,
    completed: false,
  },
  {
    id: "t5",
    name: "Territory Planning",
    category: "Territory Management",
    type: "Essay",
    dueDate: "Mar 22, 2025",
    outOf: 20,
    completed: false,
  },
  {
    id: "t6",
    name: "Compliance Test",
    category: "Admin Compliance",
    type: "Multiple Choice",
    dueDate: "Mar 25, 2025",
    outOf: 15,
    completed: false,
  },
];

// Questions data
export const questions: Question[] = [
  {
    id: "q1",
    text: "In Pharmaceutical Selling Skills which one is the first sales call step?",
    options: ["Call Opening", "Prospecting", "Objection Handling", "Gaining Commitment"],
    correctAnswer: "Call Opening",
  },
  {
    id: "q2",
    text: "Which technique is most effective for handling objections?",
    options: ["Directly contradicting", "Ignoring the objection", "Listen and acknowledge", "Change the subject"],
    correctAnswer: "Listen and acknowledge",
  },
  {
    id: "q3",
    text: "What is the primary purpose of a follow-up call?",
    options: ["To make a sale", "To build relationship", "To gather competitive information", "To deliver samples"],
    correctAnswer: "To build relationship",
  },
  {
    id: "q4",
    text: "Which of the following is NOT a component of effective territory management?",
    options: ["Customer segmentation", "Competitive analysis", "Random scheduling", "Key account planning"],
    correctAnswer: "Random scheduling",
  },
  {
    id: "q5",
    text: "Which selling approach focuses on understanding customer needs before presenting solutions?",
    options: ["Consultative selling", "Hard selling", "Product-focused selling", "Discount-based selling"],
    correctAnswer: "Consultative selling",
  },
];

// Dashboard data
export const gradeData: GradeData[] = [
  { month: "JAN", passing: 70, actual: 85 },
  { month: "FEB", passing: 70, actual: 65 },
  { month: "MAR", passing: 70, actual: 55 },
  { month: "APR", passing: 70, actual: 60 },
  { month: "MAY", passing: 70, actual: 80 },
  { month: "JUN", passing: 70, actual: 60 },
];

export const areaData: AreaData[] = [
  { name: "Selling Skills", passing: 150, actual: 140, percentage: 93 },
  { name: "Product Knowledge", passing: 100, actual: 70, percentage: 70 },
  { name: "Territory Management", passing: 80, actual: 50, percentage: 63 },
  { name: "Admin Compliance", passing: 50, actual: 30, percentage: 37 },
];

export const statData: StatData[] = [
  { name: "Courses", value: 90, color: "#1E90FF", icon: "book" },
  { name: "Training Materials", value: 70, color: "#32CD32", icon: "file-text" },
  { name: "Test", value: 85, color: "#FFA500", icon: "check-square" },
  { name: "Grades Completed", value: 75, color: "#9370DB", icon: "award" },
];

// Get data by category
export const getCoursesByCategory = (category: string): Course[] => {
  return courses.filter(course => course.category === category);
};

export const getTestsByCategory = (category: string): Test[] => {
  return tests.filter(test => test.category === category);
};
