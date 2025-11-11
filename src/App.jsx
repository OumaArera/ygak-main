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
import OurStory from './components/about/OurStory';
import LeadershipTeam from './components/about/LeadershipTeam';
import DonorsAndPartners from './components/about/DonorsAndPartners';
import ImpactStories from './components/about/ImpactStories';



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Routes>
            {/* Define routes here */}
            <Route path="/" element={<Home />} />
            <Route path='/about/our-story' element={<OurStory />} />
            <Route path="/about/management-team" element={<LeadershipTeam />} />
            <Route path="/about/donors-and-partners" element={<DonorsAndPartners />} />
            <Route path="/about/impact-stories" element={<ImpactStories />} />
            <Route path="/activities/projects" element={<Projects />} />
            <Route path="/activities/projects/:id" element={<ProjectDetails />} />
            <Route path="/media" element={<MediaCenter />} />
            <Route path="/media/press/:id" element={<PressReleaseDetails />} />
            <Route path="/activities/events" element={<Events />} />
            <Route path="/activities/events/:id" element={<EventDetails />} />
            <Route path="/resources/publications" element={<ResourceLibrary />} />
            <Route path="/get-involved/donate" element={<GetInvolved />} />
            <Route path="/resources/blogs" element={<Blog />} />
            <Route path="/resources/blogs/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
