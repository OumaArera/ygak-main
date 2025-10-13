import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import MediaCenter from './pages/MediaCenter';
import PressReleaseDetails from './pages/PressReleaseDetails';
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import ResourceLibrary from "./pages/ResourceLibrary";
import GetInvolved from './pages/GetInvolved';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Routes>
            {/* Define routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/media" element={<MediaCenter />} />
            <Route path="/media/press/:id" element={<PressReleaseDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/resources" element={<ResourceLibrary />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
