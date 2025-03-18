// Mock data for the LMS
export const courses = [
  {
    id: '1',
    title: 'Introduction to Pharmacy',
    category: 'Pharmacy Basics',
    type: 'Video',
    description: 'Learn the fundamentals of pharmacy practice and essential knowledge for beginners.',
    date: '2023-12-01',
    image: '/lovable-uploads/e8ae0a33-1b95-417e-96ae-a0d71c0db2d3.jpg',
    progress: 75,
    instructor: 'Dr. Maria Santos',
    duration: '4 hours',
    modules: [
      {
        id: 'm1',
        title: 'History of Pharmacy',
        duration: '45 minutes',
        status: 'completed'
      },
      {
        id: 'm2',
        title: 'Pharmacy Ethics',
        duration: '1 hour',
        status: 'completed'
      },
      {
        id: 'm3',
        title: 'Pharmacy Regulations',
        duration: '1 hour',
        status: 'in-progress'
      },
      {
        id: 'm4',
        title: 'Pharmacy Practice Settings',
        duration: '1.25 hours',
        status: 'not-started'
      }
    ]
  },
  {
    id: '2',
    title: 'Pharmaceutical Calculations',
    category: 'Pharmacy Basics',
    type: 'Interactive',
    description: 'Master the essential calculations required in pharmaceutical practice.',
    date: '2023-12-05',
    image: '/lovable-uploads/93743b98-7ca5-4693-8d6d-aaaaabbb9d01.jpg',
    progress: 30,
    instructor: 'Dr. Robert Chen',
    duration: '6 hours',
    modules: [
      {
        id: 'm1',
        title: 'Units and Measurements',
        duration: '1 hour',
        status: 'completed'
      },
      {
        id: 'm2',
        title: 'Dosage Calculations',
        duration: '2 hours',
        status: 'in-progress'
      },
      {
        id: 'm3',
        title: 'Dilution and Concentration',
        duration: '1.5 hours',
        status: 'not-started'
      },
      {
        id: 'm4',
        title: 'IV Flow Rates',
        duration: '1.5 hours',
        status: 'not-started'
      }
    ]
  },
  {
    id: '3',
    title: 'Medication Therapy Management',
    category: 'Clinical Pharmacy',
    type: 'Video',
    description: 'Learn advanced techniques for patient medication management and optimization.',
    date: '2023-11-15',
    image: '/lovable-uploads/93743b98-7ca5-4693-8d6d-bbbbccccd01.jpg',
    progress: 90,
    instructor: 'Dr. Lisa Johnson',
    duration: '8 hours',
    modules: [
      {
        id: 'm1',
        title: 'MTM Overview',
        duration: '1 hour',
        status: 'completed'
      },
      {
        id: 'm2',
        title: 'Patient Assessment',
        duration: '2 hours',
        status: 'completed'
      },
      {
        id: 'm3',
        title: 'Care Planning',
        duration: '2 hours',
        status: 'completed'
      },
      {
        id: 'm4',
        title: 'Follow-up and Documentation',
        duration: '3 hours',
        status: 'in-progress'
      }
    ]
  },
  {
    id: '4',
    title: 'Pharmacotherapy of Cardiovascular Disorders',
    category: 'Clinical Pharmacy',
    type: 'Interactive',
    description: 'Comprehensive review of medications used to treat cardiovascular conditions.',
    date: '2024-01-10',
    image: '/lovable-uploads/93743b98-7ca5-4693-8d6d-ddddeeeef01.jpg',
    progress: 0,
    instructor: 'Dr. James Wilson',
    duration: '10 hours',
    modules: [
      {
        id: 'm1',
        title: 'Hypertension',
        duration: '2 hours',
        status: 'not-started'
      },
      {
        id: 'm2',
        title: 'Heart Failure',
        duration: '2 hours',
        status: 'not-started'
      },
      {
        id: 'm3',
        title: 'Arrhythmias',
        duration: '2 hours',
        status: 'not-started'
      },
      {
        id: 'm4',
        title: 'Dyslipidemia',
        duration: '2 hours',
        status: 'not-started'
      },
      {
        id: 'm5',
        title: 'Case Studies',
        duration: '2 hours',
        status: 'not-started'
      }
    ]
  },
  {
    id: '5',
    title: 'Pharmacy Law and Regulations',
    category: 'Regulatory Affairs',
    type: 'Video',
    description: 'Essential legal knowledge for pharmacy practice in the Philippines.',
    date: '2023-12-20',
    image: '/lovable-uploads/93743b98-7ca5-4693-8d6d-ffffgggg001.jpg',
    progress: 50,
    instructor: 'Atty. Manuel Reyes',
    duration: '6 hours',
    modules: [
      {
        id: 'm1',
        title: 'Pharmacy Law Basics',
        duration: '1 hour',
        status: 'completed'
      },
      {
        id: 'm2',
        title: 'Controlled Substances',
        duration: '2 hours',
        status: 'completed'
      },
      {
        id: 'm3',
        title: 'FDA Regulations',
        duration: '1.5 hours',
        status: 'in-progress'
      },
      {
        id: 'm4',
        title: 'Pharmacy Operations Law',
        duration: '1.5 hours',
        status: 'not-started'
      }
    ]
  },
  {
    id: '6',
    title: 'Pharmaceutical Compounding',
    category: 'Pharmacy Practice',
    type: 'Interactive',
    description: 'Hands-on techniques for pharmaceutical compounding and preparation.',
    date: '2024-01-05',
    image: '/lovable-uploads/93743b98-7ca5-4693-8d6d-hhhijjjk01.jpg',
    progress: 15,
    instructor: 'Dr. Sofia Cruz',
    duration: '8 hours',
    modules: [
      {
        id: 'm1',
        title: 'Compounding Basics',
        duration: '1 hour',
        status: 'completed'
      },
      {
        id: 'm2',
        title: 'Non-sterile Compounding',
        duration: '3 hours',
        status: 'in-progress'
      },
      {
        id: 'm3',
        title: 'Sterile Compounding',
        duration: '3 hours',
        status: 'not-started'
      },
      {
        id: 'm4',
        title: 'Quality Control',
        duration: '1 hour',
        status: 'not-started'
      }
    ]
  }
];

export const tests = [
  {
    id: 't1',
    name: 'Pharmacy Basics Assessment',
    category: 'Pharmacy Basics',
    type: 'Multiple Choice',
    dueDate: 'Jan 15, 2024',
    outOf: 100,
    score: 85,
    completed: true,
    questions: [
      {
        id: 'q1',
        text: 'Which of the following is NOT a common dosage form?',
        options: [
          'Tablet', 
          'Capsule', 
          'Ointment', 
          'Frequency'
        ],
        correct: 3
      },
      {
        id: 'q2',
        text: 'What is the primary role of a community pharmacist?',
        options: [
          'Performing surgeries', 
          'Dispensing medications', 
          'Hospital administration', 
          'Laboratory testing'
        ],
        correct: 1
      },
      {
        id: 'q3',
        text: 'Which regulatory body oversees drug approvals in the Philippines?',
        options: [
          'FDA', 
          'PRC', 
          'DOH', 
          'All of the above'
        ],
        correct: 0
      }
    ]
  },
  {
    id: 't2',
    name: 'Pharmaceutical Calculations Quiz',
    category: 'Pharmacy Basics',
    type: 'Multiple Choice',
    dueDate: 'Jan 20, 2024',
    outOf: 50,
    completed: false
  },
  {
    id: 't3',
    name: 'Clinical Pharmacy Midterm',
    category: 'Clinical Pharmacy',
    type: 'Multiple Choice',
    dueDate: 'Feb 5, 2024',
    outOf: 100,
    completed: false
  },
  {
    id: 't4',
    name: 'Cardiovascular Medications Assessment',
    category: 'Clinical Pharmacy',
    type: 'Multiple Choice',
    dueDate: 'Jan 25, 2024',
    outOf: 50,
    score: 42,
    completed: true,
    questions: [
      {
        id: 'q1',
        text: 'Which class of medication is primarily used to treat hypertension?',
        options: [
          'Antibiotics', 
          'ACE inhibitors', 
          'Antihistamines', 
          'Antipsychotics'
        ],
        correct: 1
      },
      {
        id: 'q2',
        text: 'What is the primary mechanism of action for beta blockers?',
        options: [
          'Block calcium channels', 
          'Block beta-adrenergic receptors', 
          'Inhibit ACE enzyme', 
          'Block sodium channels'
        ],
        correct: 1
      },
      {
        id: 'q3',
        text: 'Which medication is NOT used for treating heart failure?',
        options: [
          'Lisinopril', 
          'Carvedilol', 
          'Furosemide', 
          'Diphenhydramine'
        ],
        correct: 3
      }
    ]
  },
  {
    id: 't5',
    name: 'Pharmacy Law Examination',
    category: 'Regulatory Affairs',
    type: 'Multiple Choice',
    dueDate: 'Feb 10, 2024',
    outOf: 75,
    completed: false
  },
  {
    id: 't6',
    name: 'Compounding Techniques Quiz',
    category: 'Pharmacy Practice',
    type: 'Multiple Choice',
    dueDate: 'Jan 18, 2024',
    outOf: 40,
    score: 38,
    completed: true
  }
];

export const gradeData = [
  { month: 'Jan', passing: 70, actual: 75 },
  { month: 'Feb', passing: 70, actual: 68 },
  { month: 'Mar', passing: 70, actual: 72 },
  { month: 'Apr', passing: 70, actual: 78 },
  { month: 'May', passing: 70, actual: 82 },
  { month: 'Jun', passing: 70, actual: 76 }
];

export const upcomingTestsData = [
  { 
    id: 'ut1',
    title: 'Pharmaceutical Calculations',
    date: 'Jan 20, 2024',
    time: '10:00 AM',
    duration: '1 hour',
    status: 'Upcoming'
  },
  { 
    id: 'ut2',
    title: 'Clinical Pharmacy Midterm',
    date: 'Feb 5, 2024',
    time: '2:00 PM',
    duration: '2 hours',
    status: 'Upcoming'
  },
  { 
    id: 'ut3',
    title: 'Pharmacy Law Examination',
    date: 'Feb 10, 2024',
    time: '9:00 AM',
    duration: '1.5 hours',
    status: 'Upcoming'
  }
];

export const courseProgressData = [
  {
    id: 'cp1',
    title: 'Pharmacy Basics',
    progress: 75,
    totalCourses: 2,
    completedCourses: 1,
  },
  {
    id: 'cp2',
    title: 'Clinical Pharmacy',
    progress: 45,
    totalCourses: 2,
    completedCourses: 0,
  },
  {
    id: 'cp3',
    title: 'Regulatory Affairs',
    progress: 50,
    totalCourses: 1,
    completedCourses: 0,
  },
  {
    id: 'cp4',
    title: 'Pharmacy Practice',
    progress: 15,
    totalCourses: 1,
    completedCourses: 0,
  }
];

export const areaData = [
  { name: "Selling Skills", passing: 150, actual: 140, percentage: 93 },
  { name: "Product Knowledge", passing: 100, actual: 70, percentage: 70 },
  { name: "Territory Management", passing: 80, actual: 50, percentage: 63 },
  { name: "Admin Compliance", passing: 50, actual: 30, percentage: 37 },
];

export const statData = [
  { name: "Courses", value: 90, color: "#1E90FF", icon: "book" },
  { name: "Training Materials", value: 70, color: "#32CD32", icon: "file-text" },
  { name: "Test", value: 85, color: "#FFA500", icon: "check-square" },
  { name: "Grades Completed", value: 75, color: "#9370DB", icon: "award" },
];

export const questions = tests[0].questions;

export function getCourseById(id) {
  return courses.find(course => course.id === id);
}

export function getTestById(id) {
  return tests.find(test => test.id === id);
}

export function getCoursesByCategory(category) {
  return courses.filter(course => course.category === category);
}

export function getTestsByCategory(category) {
  return tests.filter(test => test.category === category);
}
