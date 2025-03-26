import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import Reports from './Pages/Reports';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';
import Notification from './Pages/Notification'




const App = () => {
  return (
   
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          
        </Routes>
      </div>
    </Router>

  );
};

export default App;
