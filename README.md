
# RX LMS - Learning Management System

![RX LMS](public/lovable-uploads/ff03aa8b-54cf-42fb-a7c8-820818f40272.png)

RX LMS is a comprehensive Learning Management System designed for pharmaceutical companies to train their sales representatives. This frontend application provides an intuitive interface for users to access courses, take tests, and track their progress in a professional learning environment.

## Project Overview

This is a modern React-based Learning Management System with the following key features:

- **User Authentication:** Secure login system with JWT authentication support
- **Dashboard:** Interactive dashboard showing performance metrics and learning progress
- **Courses:** Structured course library with filtering and search capabilities
- **Tests:** Assessment module with various question types and immediate feedback
- **Responsive Design:** Full support for desktop, tablet, and mobile devices

## Technology Stack

- **Frontend Framework:** React.js with TypeScript
- **Routing:** React Router for navigation
- **Styling:** Tailwind CSS for responsive design
- **UI Components:** shadcn/ui component library
- **State Management:** React Context API and React Query
- **Icons:** Lucide React icons
- **Charts:** Recharts for data visualization
- **Build Tool:** Vite for fast development and optimized builds

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/             # shadcn UI components
│   ├── Header.tsx      # App header with navigation
│   ├── Navigation.tsx  # Bottom navigation bar
│   ├── CourseCard.tsx  # Card component for courses
│   ├── TestCard.tsx    # Card component for tests
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── pages/              # Application pages
│   ├── Login.tsx       # Authentication page
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Courses.tsx     # Courses overview
│   ├── CourseDetails.tsx  # Category view of courses
│   ├── CourseView.tsx     # Individual course view
│   ├── Test.tsx        # Tests overview
│   ├── TestDetails.tsx # Category view of tests
│   ├── TakeTest.tsx    # Test-taking interface
│   └── NotFound.tsx    # 404 page
├── utils/              # Utility functions
│   ├── auth.ts         # Authentication helpers
│   └── mockData.ts     # Mock data for development
├── App.tsx             # Main application component
└── main.tsx            # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/rx-lms.git
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

4. Open your browser and navigate to http://localhost:5173

### Test Account

Use the following credentials to log in:
- **Username:** Admin
- **Password:** Admin@123

## Backend Integration

This frontend is designed to be easily integrated with a Node.js and Express.js backend. Here's how to connect the frontend to your backend:

1. Set up environment variables for API endpoints in a `.env` file:
```
VITE_API_URL=http://localhost:3000/api
```

2. Replace the mock API calls in `utils/` with real API calls. For example:
```typescript
// Before (mock data):
export const getCourses = () => {
  return courses;
};

// After (real API):
export const getCourses = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/courses`);
  if (!response.ok) throw new Error('Failed to fetch courses');
  return response.json();
};
```

3. Replace the authentication logic in `utils/auth.ts` with JWT authentication:
```typescript
// Before (mock auth):
export const login = (username: string, password: string) => {
  if (username === 'Admin' && password === 'Admin@123') {
    localStorage.setItem('user', JSON.stringify({ username }));
    return true;
  }
  return false;
};

// After (JWT auth):
export const login = async (username: string, password: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  
  if (!response.ok) return false;
  
  const { token, user } = await response.json();
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  return true;
};
```

4. Update API request functions to include the authentication token:
```typescript
const fetchWithAuth = async (url: string, options = {}) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    },
  });
};
```

## Customization

### Theming

The application uses a custom color scheme defined in `tailwind.config.ts`. To modify the colors:

1. Open `tailwind.config.ts`
2. Update the color values in the theme section:
```typescript
// Current colors
maroon: '#750d1f',
green: '#125b48',
```

### Adding New Features

To add new features to the application:

1. Create any necessary components in the `components/` directory
2. Add new pages in the `pages/` directory
3. Update routing in `App.tsx` to include the new pages
4. Modify the navigation in `Navigation.tsx` if needed

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with optimized production files.

### Deploying to a Server

Upload the contents of the `dist` directory to your web server or use a service like Netlify, Vercel, or GitHub Pages.

### Environment Variables

For production, set the appropriate environment variables:

```
VITE_API_URL=https://your-api-server.com/api
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
