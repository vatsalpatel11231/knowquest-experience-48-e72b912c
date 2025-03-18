
// Mock data for the application

// Courses data
export const courses = [
  {
    id: "c1",
    title: "Introduction to Selling Skills",
    category: "Sales Training",
    type: "Video",
    description: "Learn the fundamentals of professional selling techniques and customer engagement strategies.",
    date: "Feb 15, 2023",
    image: "/lovable-uploads/c4e88583-58b3-40d9-aec4-7d0a28a5c82d.png",
    duration: "1h 30m",
    instructor: "Maria Santos",
    progress: 100,
    completed: true,
    content: {
      sections: [
        {
          title: "Course Overview",
          description: "An introduction to the selling process",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "10 min"
        },
        {
          title: "Building Rapport",
          description: "Techniques for establishing trust with customers",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "25 min"
        },
        {
          title: "Needs Assessment",
          description: "How to identify customer needs effectively",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "30 min"
        },
        {
          title: "Handling Objections",
          description: "Strategies for addressing customer concerns",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "25 min" 
        }
      ],
      resources: [
        {
          name: "Selling Skills Handbook",
          type: "PDF",
          size: "2.4 MB",
          url: "#"
        },
        {
          name: "Customer Personas Template",
          type: "DOCX",
          size: "1.8 MB",
          url: "#"
        }
      ]
    }
  },
  {
    id: "c2",
    title: "Advanced Sales Techniques",
    category: "Sales Training",
    type: "Interactive",
    description: "Master advanced sales methodologies and closing techniques for experienced sales professionals.",
    date: "Mar 5, 2023",
    image: "/lovable-uploads/c4e88583-58b3-40d9-aec4-7d0a28a5c82d.png",
    duration: "2h 15m",
    instructor: "James Wilson",
    progress: 75,
    completed: false,
    content: {
      sections: [
        {
          title: "Value-Based Selling",
          description: "Focus on the value your solution provides",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "35 min"
        },
        {
          title: "Consultative Selling",
          description: "Position yourself as a trusted advisor",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "40 min"
        },
        {
          title: "SPIN Selling Technique",
          description: "Learn this powerful questioning framework",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "30 min"
        }
      ],
      resources: [
        {
          name: "Advanced Sales Playbook",
          type: "PDF",
          size: "3.2 MB",
          url: "#"
        },
        {
          name: "Objection Handling Scripts",
          type: "PDF",
          size: "1.5 MB",
          url: "#"
        }
      ]
    }
  },
  {
    id: "c3",
    title: "Product Knowledge Basics",
    category: "Product Training",
    type: "PDF",
    description: "Essential information about our company's products, features, and competitive advantages.",
    date: "Jan 22, 2023",
    image: "/lovable-uploads/c4e88583-58b3-40d9-aec4-7d0a28a5c82d.png",
    duration: "45m",
    instructor: "Robert Chen",
    progress: 100,
    completed: true,
    content: {
      sections: [
        {
          title: "Product Overview",
          description: "Introduction to our company's products",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "15 min"
        },
        {
          title: "Feature Analysis",
          description: "Detailed breakdown of product features",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "20 min"
        },
        {
          title: "Competitive Analysis",
          description: "How our products compare to competitors",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "10 min"
        }
      ],
      resources: [
        {
          name: "Product Catalog",
          type: "PDF",
          size: "5.7 MB",
          url: "#"
        },
        {
          name: "Feature Comparison Chart",
          type: "XLSX",
          size: "0.8 MB",
          url: "#"
        }
      ]
    }
  },
  {
    id: "c4",
    title: "Customer Service Excellence",
    category: "Customer Support",
    type: "Video",
    description: "Best practices for delivering exceptional customer service and building customer loyalty.",
    date: "Apr 10, 2023",
    image: "/lovable-uploads/c4e88583-58b3-40d9-aec4-7d0a28a5c82d.png",
    duration: "1h 15m",
    instructor: "Sarah Johnson",
    progress: 50,
    completed: false,
    content: {
      sections: [
        {
          title: "Customer Service Fundamentals",
          description: "Core principles of excellent service",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "20 min"
        },
        {
          title: "Active Listening Skills",
          description: "How to truly understand customer needs",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "25 min"
        },
        {
          title: "Handling Difficult Situations",
          description: "Techniques for managing challenging customer interactions",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "30 min"
        }
      ],
      resources: [
        {
          name: "Customer Service Handbook",
          type: "PDF",
          size: "2.1 MB",
          url: "#"
        },
        {
          name: "Service Recovery Templates",
          type: "DOCX",
          size: "1.2 MB",
          url: "#"
        }
      ]
    }
  },
  {
    id: "c5",
    title: "Introduction to Market Analysis",
    category: "Market Intelligence",
    type: "Interactive",
    description: "Learn how to analyze market trends, customer behavior, and competitive landscape.",
    date: "May 5, 2023",
    image: "/lovable-uploads/c4e88583-58b3-40d9-aec4-7d0a28a5c82d.png",
    duration: "2h",
    instructor: "Michael Wong",
    progress: 0,
    completed: false,
    content: {
      sections: [
        {
          title: "Market Analysis Basics",
          description: "Introduction to market analysis concepts",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "30 min"
        },
        {
          title: "Customer Segmentation",
          description: "Techniques for effective market segmentation",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "35 min"
        },
        {
          title: "Competitive Intelligence",
          description: "How to gather and analyze competitor information",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "35 min"
        },
        {
          title: "Market Trends Analysis",
          description: "Identifying and forecasting market trends",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          duration: "20 min"
        }
      ],
      resources: [
        {
          name: "Market Analysis Template",
          type: "XLSX",
          size: "1.9 MB",
          url: "#"
        },
        {
          name: "Competitive Analysis Framework",
          type: "PDF",
          size: "2.3 MB",
          url: "#"
        }
      ]
    }
  }
];

// Tests data
export const tests = [
  {
    id: "t1",
    name: "Selling Skills Assessment",
    category: "Sales Training",
    type: "Multiple Choice",
    dueDate: "Mar 20, 2023",
    outOf: 10,
    score: 8,
    completed: true
  },
  {
    id: "t2",
    name: "Product Knowledge Quiz",
    category: "Product Training",
    type: "Multiple Choice",
    dueDate: "Mar 30, 2023",
    outOf: 15,
    score: null,
    completed: false
  },
  {
    id: "t3",
    name: "Customer Service Evaluation",
    category: "Customer Support",
    type: "Mix",
    dueDate: "Apr 15, 2023",
    outOf: 20,
    score: 17,
    completed: true
  },
  {
    id: "t4",
    name: "Market Analysis Comprehension",
    category: "Market Intelligence",
    type: "Essay",
    dueDate: "May 12, 2023",
    outOf: 25,
    score: null,
    completed: false
  },
  {
    id: "t5",
    name: "Advanced Sales Techniques",
    category: "Sales Training",
    type: "Multiple Choice",
    dueDate: "Jun 1, 2023",
    outOf: 15,
    score: null,
    completed: false
  }
];

// Quiz questions
export const questions = [
  {
    id: "q1",
    text: "Which of the following is NOT a key step in the sales process?",
    options: [
      "Prospecting",
      "Needs Assessment",
      "Product Manufacturing",
      "Handling Objections"
    ],
    correctAnswer: "Product Manufacturing"
  },
  {
    id: "q2",
    text: "What is SPIN selling?",
    options: [
      "A technique where you spin a wheel to determine your sales approach",
      "A questioning framework using Situation, Problem, Implication, and Need-payoff questions",
      "A sales method focused exclusively on online transactions",
      "A high-pressure sales tactic designed to confuse customers"
    ],
    correctAnswer: "A questioning framework using Situation, Problem, Implication, and Need-payoff questions"
  },
  {
    id: "q3",
    text: "What is the primary purpose of needs assessment in the sales process?",
    options: [
      "To convince customers they need your product regardless of their actual needs",
      "To understand customer requirements so you can present relevant solutions",
      "To shorten the sales cycle by skipping directly to closing",
      "To collect personal information for marketing purposes"
    ],
    correctAnswer: "To understand customer requirements so you can present relevant solutions"
  },
  {
    id: "q4",
    text: "What is the best way to handle a customer objection?",
    options: [
      "Ignore it and change the subject",
      "Tell the customer they are wrong",
      "Acknowledge the concern, ask clarifying questions, and address it directly",
      "Offer a dramatic discount immediately"
    ],
    correctAnswer: "Acknowledge the concern, ask clarifying questions, and address it directly"
  },
  {
    id: "q5",
    text: "Which of the following is an example of a closed-ended question?",
    options: [
      "What challenges are you facing with your current solution?",
      "How would you describe your ideal outcome?",
      "Do you currently use a CRM system?",
      "What factors are most important in your decision-making process?"
    ],
    correctAnswer: "Do you currently use a CRM system?"
  }
];

// Dashboard charts data
export const gradeData = [
  { month: "Jan", passing: 70, actual: 82 },
  { month: "Feb", passing: 70, actual: 77 },
  { month: "Mar", passing: 70, actual: 65 },
  { month: "Apr", passing: 70, actual: 75 },
  { month: "May", passing: 70, actual: 80 },
  { month: "Jun", passing: 70, actual: 90 }
];

export const areaData = [
  { name: "Product Knowledge", passing: 70, actual: 85, percentage: 85 },
  { name: "Sales Techniques", passing: 70, actual: 65, percentage: 65 },
  { name: "Customer Service", passing: 70, actual: 90, percentage: 90 },
  { name: "Market Intelligence", passing: 70, actual: 75, percentage: 75 }
];

export const statData = [
  { name: "Courses Completed", value: 75, color: "#125b48" },
  { name: "Tests Passed", value: 60, color: "#125b48" },
  { name: "Avg. Score", value: 82, color: "#125b48" },
  { name: "Attendance", value: 95, color: "#125b48" }
];

// Helper functions
export const getCoursesByCategory = (category) => {
  return courses.filter(course => course.category === category);
};

export const getTestsByCategory = (category) => {
  return tests.filter(test => test.category === category);
};

export const getCourseById = (id) => {
  return courses.find(course => course.id === id);
};

export const getTestById = (id) => {
  return tests.find(test => test.id === id);
};
