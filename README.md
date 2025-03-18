
# RX LMS - Learning Management System

![RX LMS Logo](public/og-image.png)

## Overview

RX LMS is a modern Learning Management System built with React. It provides a comprehensive platform for organizations to deliver training content, assessments, and track employee progress. The system features an intuitive user interface, responsive design, and a modular architecture.

## Features

- **Authentication System**: Secure login/logout functionality
- **Dashboard**: Overview of learning progress and statistics
- **Course Management**: Browse and take courses in different categories
- **Assessment Module**: Take tests and view results
- **User Profile**: Manage personal information and account settings
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Project Structure

```
rx-lms/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # Shadcn UI components
│   │   └── ...           # Custom components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility libraries
│   ├── pages/            # Page components
│   ├── utils/            # Helper functions and utilities
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # Tailwind and base styles
│   └── main.jsx          # Entry point
├── .eslintrc.js          # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## Key Components

- **Authentication**: Manages user login/logout and session persistence
- **Navigation**: Bottom navigation bar for easy access to main sections
- **Header**: Displays page title, user info, and back button when needed
- **CourseCard/TestCard**: Display course and test information in a visually appealing way
- **ResultModal**: Shows test results with animations and visual indicators
- **TestInstructions**: Displays test guidelines before starting an assessment

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or newer)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/rx-lms.git
cd rx-lms
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Demo Credentials

- Username: Admin
- Password: Admin@123

## Customization

### Theme Colors

The project uses a custom color palette defined in the tailwind configuration:

- Primary Green: `#125b48`
- Dark Green: `#0d4435`
- Maroon: `#750d1f`
- Dark Maroon: `#5a0a18`
- Header Gray: `#d9d9d9`
- Background: `#f3f3f3`

To modify these colors, edit the `tailwind.config.js` file.

### Fonts

The project uses the Poppins font family. To change the font, update the Google Fonts link in `index.html` and modify the font family in `tailwind.config.js`.

## Adding Backend Integration

To integrate the RX LMS with a backend server:

1. Set up a backend API using Node.js (Express, NestJS, etc.)
2. Create API endpoints for:
   - Authentication (login, logout, password reset)
   - User management
   - Course management
   - Test management
   - Progress tracking

3. Update the auth utilities in `src/utils/auth.js` to connect to your API:

```javascript
// Example of updated login function with real API
export const login = async (username, password) => {
  try {
    const response = await fetch('https://your-api.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    localStorage.setItem("lms-user", JSON.stringify(data.user));
    localStorage.setItem("lms-token", data.token);
    
    toast.success("Login Successful");
    return data.user;
  } catch (error) {
    toast.error(error.message || "An error occurred during login");
    return null;
  }
};
```

4. Create an API service to handle data fetching:

```javascript
// src/services/api.js
const API_URL = 'https://your-api.com/api';

const getToken = () => localStorage.getItem('lms-token');

export const fetchCourses = async () => {
  const response = await fetch(`${API_URL}/courses`, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
  return response.json();
};

export const fetchTests = async () => {
  const response = await fetch(`${API_URL}/tests`, {
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  });
  return response.json();
};

// Add more API methods as needed
```

5. Replace mock data references in components with API calls

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory, which can be deployed to any static web hosting service (Netlify, Vercel, AWS S3, etc.).

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
