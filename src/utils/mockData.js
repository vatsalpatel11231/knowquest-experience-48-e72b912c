
// Mock data for the LMS application

// Courses data
export const courses = [
  {
    id: '1',
    title: 'Introduction to Pharmacy',
    category: 'Pharmacy',
    type: 'Video',
    description: 'Learn the basics of pharmacy practice and principles.',
    date: 'May 15, 2023',
    image: '/lovable-uploads/833bd108-f3fe-4772-ae45-c15090d234cf.png',
    content: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Introduction to Pharmacy'
      },
      {
        type: 'text',
        content: 'Pharmacy is the clinical health science that links medical science with chemistry and it is charged with the discovery, production, disposal, safe and effective use, and control of medications and drugs.'
      }
    ]
  },
  {
    id: '2',
    title: 'Medication Safety',
    category: 'Pharmacy',
    type: 'Document',
    description: 'Important guidelines for ensuring medication safety.',
    date: 'June 2, 2023',
    image: '/lovable-uploads/4cddec2e-7e94-4604-ae07-59920d7692cf.png',
    content: [
      {
        type: 'text',
        content: 'Medication safety is a key aspect of pharmacy practice. This course covers the essential guidelines for ensuring patient safety through proper medication management.'
      },
      {
        type: 'image',
        url: '/lovable-uploads/00a8c6c8-0cfa-47d6-9809-ede27a8f26db.png',
        caption: 'Medication Safety Process'
      }
    ]
  },
  {
    id: '3',
    title: 'Patient Care Principles',
    category: 'Healthcare',
    type: 'Interactive',
    description: 'Learn effective patient care principles for healthcare professionals.',
    date: 'April 10, 2023',
    image: '/lovable-uploads/833bd108-f3fe-4772-ae45-c15090d234cf.png',
    content: [
      {
        type: 'text',
        content: 'This course focuses on patient-centered care principles that are essential for all healthcare professionals.'
      },
      {
        type: 'quiz',
        questions: [
          {
            question: 'What is the primary focus of patient-centered care?',
            options: [
              'Hospital procedures',
              'Patient needs and preferences',
              'Medical records',
              'Staff scheduling'
            ],
            answer: 1
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Healthcare Ethics',
    category: 'Healthcare',
    type: 'Document',
    description: 'Explore ethical considerations in healthcare settings.',
    date: 'July 5, 2023',
    image: '/lovable-uploads/4cddec2e-7e94-4604-ae07-59920d7692cf.png',
    content: [
      {
        type: 'text',
        content: 'Healthcare ethics involves the principles and values that guide decision-making in healthcare settings.'
      }
    ]
  },
  {
    id: '5',
    title: 'Pharmaceutical Calculations',
    category: 'Pharmacy Math',
    type: 'Interactive',
    description: 'Master essential calculations used in pharmacy.',
    date: 'May 20, 2023',
    image: '/lovable-uploads/833bd108-f3fe-4772-ae45-c15090d234cf.png',
    content: [
      {
        type: 'text',
        content: 'This course covers the fundamental calculations required in pharmaceutical practice.'
      },
      {
        type: 'exercise',
        problems: [
          'Calculate the quantity of active ingredient in a 250mg tablet that is 10% active ingredient.',
          'If a medication requires 5mg/kg, calculate the dose for a 70kg patient.'
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Regulatory Compliance',
    category: 'Compliance',
    type: 'Video',
    description: 'Stay updated on regulatory requirements for pharmacies.',
    date: 'June 15, 2023',
    image: '/lovable-uploads/4cddec2e-7e94-4604-ae07-59920d7692cf.png',
    content: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        title: 'Pharmacy Regulations Overview'
      }
    ]
  }
];

// Tests data
export const tests = [
  {
    id: 't1',
    name: 'Pharmacy Basics Assessment',
    category: 'Pharmacy',
    type: 'Multiple Choice',
    dueDate: 'June 30, 2023',
    outOf: 10,
    completed: true,
    score: 8,
    questions: [
      {
        id: 'q1',
        question: 'What is the primary role of a pharmacist?',
        options: [
          'Diagnosing medical conditions',
          'Dispensing medications and counseling patients',
          'Performing surgical procedures',
          'Conducting clinical trials'
        ],
        correctAnswer: 1
      },
      // More questions...
    ]
  },
  {
    id: 't2',
    name: 'Medication Safety Quiz',
    category: 'Pharmacy',
    type: 'Multiple Choice',
    dueDate: 'July 15, 2023',
    outOf: 10,
    completed: false,
    questions: [
      {
        id: 'q1',
        question: 'Which of the following is NOT a medication safety practice?',
        options: [
          'Double-checking high-risk medications',
          'Using tall man lettering for look-alike medications',
          'Storing all medications together regardless of type',
          'Implementing barcode medication administration'
        ],
        correctAnswer: 2
      },
      // More questions...
    ]
  },
  {
    id: 't3',
    name: 'Patient Care Ethics',
    category: 'Healthcare',
    type: 'True/False',
    dueDate: 'June 25, 2023',
    outOf: 5,
    completed: true,
    score: 5,
    questions: [
      {
        id: 'q1',
        question: 'Patient confidentiality can be breached if the information seems harmless.',
        options: ['True', 'False'],
        correctAnswer: 1
      },
      // More questions...
    ]
  },
  {
    id: 't4',
    name: 'Healthcare Systems Overview',
    category: 'Healthcare',
    type: 'Multiple Choice',
    dueDate: 'July 20, 2023',
    outOf: 15,
    completed: false,
    questions: [
      {
        id: 'q1',
        question: 'Which of the following best describes a single-payer healthcare system?',
        options: [
          'Multiple private insurance companies competing for customers',
          'Government providing healthcare for only those who cannot afford it',
          'One governmental entity paying for healthcare for all citizens',
          'Individuals paying out-of-pocket for all healthcare needs'
        ],
        correctAnswer: 2
      },
      // More questions...
    ]
  },
  {
    id: 't5',
    name: 'Pharmaceutical Calculations Test',
    category: 'Pharmacy Math',
    type: 'Calculation',
    dueDate: 'July 5, 2023',
    outOf: 20,
    completed: true,
    score: 18,
    questions: [
      {
        id: 'q1',
        question: 'A medication requires a dose of 2mg/kg. Calculate the dose for a 75kg patient.',
        correctAnswer: '150mg'
      },
      // More questions...
    ]
  },
  {
    id: 't6',
    name: 'Regulatory Compliance Check',
    category: 'Compliance',
    type: 'Multiple Choice',
    dueDate: 'August 1, 2023',
    outOf: 10,
    completed: false,
    questions: [
      {
        id: 'q1',
        question: 'How often are pharmacies typically required to perform a controlled substance inventory?',
        options: [
          'Every day',
          'Every week',
          'Every month',
          'Every two years'
        ],
        correctAnswer: 3
      },
      // More questions...
    ]
  }
];

// Grade data for charts
export const gradeData = [
  { month: 'Jan', passing: 70, actual: 78 },
  { month: 'Feb', passing: 70, actual: 82 },
  { month: 'Mar', passing: 70, actual: 75 },
  { month: 'Apr', passing: 70, actual: 68 },
  { month: 'May', passing: 70, actual: 73 },
  { month: 'Jun', passing: 70, actual: 85 }
];

// Function to get a course by its ID
export const getCourseById = (courseId) => {
  return courses.find(course => course.id === courseId) || null;
};

// Function to get tests by category
export const getTestsByCategory = (category) => {
  return tests.filter(test => test.category === category);
};

// Function to get a test by its ID
export const getTestById = (testId) => {
  return tests.find(test => test.id === testId) || null;
};
