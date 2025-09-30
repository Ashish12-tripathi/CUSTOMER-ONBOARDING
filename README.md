CUSTOMER-ONBOARDING

Customer Onboarding System is a full-stack web application designed to streamline the process of onboarding customers securely and efficiently. It includes authentication, role-based access (admin/user), and a secure PostgreSQL database for managing customer data.

🏗 Architecture

The project follows a MERN-style architecture (MongoDB / Express / React / Node.js) with PostgreSQL as the relational database for storing customer data securely.

CUSTOMER-ONBOARDING
│
├── backend/                # Node.js + Express API
│   ├── controllers/        # Handles API logic
│   ├── models/             # Database models (PostgreSQL)
│   ├── routes/             # API routes (auth, admin, user)
│   ├── middleware/         # JWT authentication, role-based access
│   ├── utils/              # Utility functions (e.g., hashing)
│   └── server.js           # Express server setup
│
├── frontend/               # React frontend
│   ├── components/         # Reusable UI components
│   ├── pages/              # Pages: Register, Login, Dashboard, Profile, Admin
│   ├── App.jsx             # Main app with routes
│   └── index.jsx           # React entry point
│
├── .env                    # Environment variables (ignored in GitHub)
├── .env.example            # Example environment variables for reference
└── README.md               # Project documentation


Frontend: React.js with React Router for routing. Includes Login, Register, Dashboard, Profile, and Admin views.

Backend: Node.js + Express server with JWT-based authentication.

Database: PostgreSQL storing user credentials and customer data.

Authentication: JWT for secure token-based authentication.

Authorization: Role-based access control (user vs admin).

🔒 Security

Environment Variables: All sensitive data (DB credentials, JWT secret) is stored in .env and not pushed to GitHub. Use .env.example for reference.

Password Security: Passwords are hashed before storage using bcrypt.

JWT Tokens: Authentication is handled via JWT tokens stored in localStorage. Tokens are validated in backend middleware.

Role-based Access: Admin routes are protected and cannot be accessed by regular users.

Database Security: Only necessary fields are exposed through API responses. Direct database access is protected.

⚡ Features

User registration and login

Role-based dashboards: User and Admin

View profile and edit personal information

Admin can view all users

Secure PostgreSQL database integration
