CUSTOMER-ONBOARDING

Customer Onboarding System is a full-stack web application designed to streamline the process of onboarding customers securely and efficiently. It includes authentication, role-based access (admin/user), and a secure PostgreSQL database for managing customer data.

🏗 Architecture

The project follows a MERN-style architecture (MongoDB / Express / React / Node.js) with PostgreSQL as the relational database for storing customer data securely.


Frontend: React.js with React Router for routing. Includes Login, Register, Dashboard, Profile, and Admin views.

Backend: Node.js + Express server with JWT-based authentication.

Database: PostgreSQL storing user credentials and customer data.

Authentication: JWT for secure token-based authentication.



🔒 Security

Environment Variables: All sensitive data (DB credentials, JWT secret) is stored in .env and not pushed to GitHub. Use .env.example for reference.

Password Security: Passwords are hashed before storage using bcrypt.

JWT Tokens: Authentication is handled via JWT tokens stored in localStorage. Tokens are validated in backend middleware.



⚡ Features

User registration and login

View profile

Admin can view all users

Secure PostgreSQL database integration
