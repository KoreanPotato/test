import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Dashboard from './components/dashboard-component';
import Register from './components/registration-components';
import Login from './components/login-component';
import CreateAssignment from './components/assignment-component';
import Header from './components/header';
import SchedulePage from './components/Schedule-component';




const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Header />
        <div id="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '20px' }}>
          
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/assignment" element={<CreateAssignment />}/>
          <Route path="/schedule" element={<SchedulePage />}/>
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
