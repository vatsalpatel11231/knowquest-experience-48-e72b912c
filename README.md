
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

3. Update the frontend API utilities to connect to your backend:
```javascript
// src/utils/api.js
const API_URL = 'http://localhost:5000/api';

export const fetchCourses = async () => {
  const response = await fetch(`${API_URL}/courses`);
  return response.json();
};

// Add more API methods as needed
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
