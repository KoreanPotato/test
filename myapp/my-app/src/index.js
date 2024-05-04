import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Dashboard from './components/dashboard-component';
import Profile from './components/profile.component';
import Register from './components/registration-components';
import Login from './components/login-component'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<h1>ХУЙНЯ не работает</h1>} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
