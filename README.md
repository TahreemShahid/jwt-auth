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
├── jwt-auth-frontend/   # React frontend
│   └── ...              # (see below for setup)
│
├── jwt-auth-backend/    # Node.js/Express backend
│   └── ...              # (see below for setup)
│
└── README.md            # (this file)
```

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
   Create a `.env` file in `jwt-auth-backend/`:
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
   - If your backend runs on a different host/port, update the API base URL in the frontend (commonly in a `.env` file or a config file).

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

### Frontend

- `npm start` — Start frontend development server
- `npm test` — Run frontend tests
- `npm run build` — Build frontend for production

---

## License

MIT

---

**Note:**  
- Make sure both servers are running for full functionality.
- Adjust CORS settings in the backend if accessing from different origins. 