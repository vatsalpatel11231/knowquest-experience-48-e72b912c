
# RX LMS - Learning Management System

## Project Overview
RX LMS is a comprehensive learning management system designed for pharmaceutical education and training. It provides a platform for users to access courses, take tests, and track their progress in pharmaceutical knowledge and certification.

## Features
- User authentication and session management
- Dashboard with progress tracking and analytics
- Course catalog organized by categories
- Interactive course content viewer
- Test-taking platform with immediate feedback
- User profile and progress management

## Tech Stack
- **Frontend**: React.js with JavaScript
- **UI Components**: Shadcn/UI components library
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: React Query
- **Charts**: Recharts

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
```bash
git clone https://github.com/your-repo/rx-lms.git
cd rx-lms
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Troubleshooting Common Issues

### Missing Exports Error
If you encounter errors like "No matching export in 'src/utils/mockData.js' for import X", ensure that:
1. The `mockData.js` file includes all necessary exports
2. Your import statements match the actual export names
3. Run `npm run dev` again after making changes

### Module Not Found Errors
If you see errors about missing modules:
1. Check that all dependencies are installed: `npm install`
2. Verify that package names are correctly spelled in import statements
3. Make sure path aliases like `@/` are correctly configured in vite.config.js

### Debugging Process
1. Check the browser console for detailed error messages
2. Review the terminal output for build errors
3. For component rendering issues, add console.log statements to track component lifecycle
4. Use React DevTools browser extension to inspect component state

## Connecting with Backend
To connect this frontend with a Node.js and Express backend:

1. Create a new Express project:
```bash
mkdir rx-lms-backend
cd rx-lms-backend
npm init -y
npm install express cors mongoose dotenv
```

2. Set up your Express server:
```javascript
// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/tests', require('./routes/tests'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

3. Create basic route files:
```javascript
// routes/auth.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Authentication logic here
  res.json({ success: true, token: 'sample-token' });
});

module.exports = router;
```

4. Update the frontend API utilities to connect to your backend:
```javascript
// src/utils/api.js
const API_URL = 'http://localhost:5000/api';

export const fetchCourses = async () => {
  const response = await fetch(`${API_URL}/courses`);
  return response.json();
};

// Add more API methods as needed
```

## Project Structure Overview
```
rx-lms/
├── public/
│   └── lovable-uploads/   # Images and media files
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions and mock data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Library code and helpers
│   └── App.jsx            # Main application component
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Future Enhancements
- Implement real-time quiz feedback and progress tracking
- Add interactive learning tools like flashcards and simulations
- Develop a mobile app version for on-the-go learning
- Integrate video conferencing for virtual classroom sessions
- Implement AI-powered learning path recommendations
- Add gamification elements to increase engagement

## Innovation Ideas
- **VR/AR Integration**: Create immersive pharmaceutical simulations
- **Blockchain Certification**: Use blockchain for verifiable credentials
- **Peer Learning Networks**: Implement peer-to-peer learning communities
- **Microlearning Modules**: Break content into digestible micro-lessons
- **Adaptive Learning Paths**: Personalize content based on performance
- **Scenario-Based Assessments**: Create real-world problem-solving tests

## License
[MIT](LICENSE)
