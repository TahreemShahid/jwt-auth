# JWT Authentication Full Stack Project

This project demonstrates a complete JWT (JSON Web Token) authentication flow using a React frontend and a Node.js/Express backend. It provides secure user registration, login, protected routes, and token management.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Authentication Flow](#authentication-flow)
- [Scripts](#scripts)
- [Best Practices](#best-practices)
- [License](#license)

---

## Features

- User registration and login
- JWT issuance and verification
- Protected API endpoints
- React frontend with protected routes
- Logout and token management

---

## Project Structure

```
root/
│
├── jwt-auth-frontend/                # React frontend
│   ├── public/                       # Static assets and HTML template
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/                          # React source code
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── service-worker.js
│   │   ├── serviceWorkerRegistration.js
│   │   └── setupTests.js
│   ├── .env.example                  # Example environment variables
│   ├── .gitignore                    # Ignore node_modules, build, etc.
│   ├── package.json                  # Frontend dependencies and scripts
│   ├── package-lock.json             # Frontend lockfile
│   └── README.md                     # Frontend documentation (optional)
│
├── jwt-auth-backend/                 # Node.js/Express backend
│   ├── src/                          # Backend source code
│   │   ├── routes/                   # API route definitions
│   │   ├── controllers/              # Route handler logic
│   │   ├── models/                   # Database models/schemas
│   │   └── app.js                    # Express app entry point
│   ├── .env.example                  # Example environment variables
│   ├── .gitignore                    # Ignore node_modules, logs, etc.
│   ├── package.json                  # Backend dependencies and scripts
│   ├── package-lock.json             # Backend lockfile
│   └── README.md                     # Backend documentation (optional)
│
├── README.md                         # Combined project documentation
└── .gitignore                        # Global ignores (optional)
```

**Notes:**
- Do NOT commit real `.env` files with secrets; use `.env.example` for templates.
- Do NOT commit `node_modules/` or build/dist folders.
- Add additional config files (e.g., `.eslintrc`, `.prettierrc`, `Dockerfile`) as needed.

---

## Getting Started

### 1. Backend Setup

1. **Navigate to the backend folder:**
   ```bash
   cd jwt-auth-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your values:
     ```
     PORT=5000
     JWT_SECRET=your_jwt_secret
     MONGO_URI=your_mongodb_uri
     ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend will run at [http://localhost:5000](http://localhost:5000).

---

### 2. Frontend Setup

1. **Navigate to the frontend folder:**
   ```bash
   cd jwt-auth-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API endpoint:**
   - Copy `.env.example` to `.env` and set the backend API URL, e.g.:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

4. **Start the frontend development server:**
   ```bash
   npm start
   ```
   The frontend will run at [http://localhost:3000](http://localhost:3000).

---

## Authentication Flow

1. User registers or logs in via the frontend.
2. The frontend sends credentials to the backend.
3. The backend validates credentials and returns a JWT.
4. The frontend stores the JWT (e.g., in localStorage).
5. For protected API requests, the frontend sends the JWT in the `Authorization` header.
6. The backend verifies the JWT before granting access to protected routes.
7. On logout, the frontend removes the JWT.

---

## Scripts

### Backend

- `npm start` — Start backend server
- `npm run dev` — Start backend with nodemon (if configured)
- `npm test` — Run backend tests

### Frontend

- `npm start` — Start frontend development server
- `npm test` — Run frontend tests
- `npm run build` — Build frontend for production

---

## Best Practices

- Never commit real secrets or credentials to the repository.
- Use HTTPS in production for secure JWT transmission.
- Set proper CORS policies in the backend.
- Use secure, httpOnly cookies for JWT storage if possible.
- Validate and sanitize all user input.

---

## License

MIT 