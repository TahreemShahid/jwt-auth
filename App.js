import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [token, setToken] = useState(localStorage.getItem('jwtToken'));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fetch user details if token exists
  useEffect(() => {
    if (token) {
      setLoading(true);
      axios.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          setUser(res.data);
          setError('');
        })
        .catch((err) => {
          if (err.response && (err.response.status === 403 || err.response.status === 401)) {
            handleLogout();
            setError('Session expired. Please log in again.');
          }
        })
        .finally(() => setLoading(false));
    }
  }, [token]);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    axios.post(`${API_URL}/login`, { username, password })
      .then((res) => {
        localStorage.setItem('jwtToken', res.data.token);
        setToken(res.data.token);
        setUsername('');
        setPassword('');
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError('Login failed');
        }
      })
      .finally(() => setLoading(false));
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setToken(null);
    setUser(null);
    setError('');
  };

  // Auto-logout on token expiration (handled by backend response)

  if (loading) return <div className="App"><div className="card"><h2>Loading...</h2></div></div>;

  if (!token) {
    return (
      <div className="App">
        <div className="card">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>Login</button>
          </form>
          {error && <div className="error">{error}</div>}
          <div className="demo-info">
            <b>Demo user:</b> testuser<br/>
            <b>Password:</b> password123
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="card">
        <h2>Dashboard</h2>
        {user ? (
          <div>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
        <button onClick={handleLogout}>Logout</button>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default App;
