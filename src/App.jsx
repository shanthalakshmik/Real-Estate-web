import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import PropertyCard from './components/PropertyCard';
import PropertyList from './components/PropertyList';
import AgentProfile from './pages/AgentProfile';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/agents" element={<AgentProfile />} />
          <Route path=" " element={<h2 className="text-center mt-10">Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

