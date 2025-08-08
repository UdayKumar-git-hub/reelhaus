import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CoreTeam from './pages/CoreTeam';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import JoinUs from './pages/JoinUs';
import Contact from './pages/Contact';
import Hiring from './pages/Hiring';


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<CoreTeam />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/join" element={<JoinUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hiring" element={<Hiring />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;