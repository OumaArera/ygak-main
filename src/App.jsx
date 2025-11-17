import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
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
import Programs from './components/projects/Programs';
import Initiatives from './components/projects/Initiatives';
import Press from './components/media/Press';
import Newsletters from './components/media/Newsletters';
import EventPhotos from './components/media/EventPhotos';
import EventVideos from './components/media/EventVideos';
import Reports from './components/resources/Reports';
import PolicyBriefs from './components/resources/PolicyBriefs';
import CorporateDocuments from './components/resources/CorporateDocuments';
import PlatformWebsites from './components/resources/PlatformWebsites';
import VolunteerRegisterPage from './pages/VolunteerRegisterPage';
import PartnerWithUs from './pages/PartnerWithUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './components/policies/PrivacyPolicy';
import ConflictOfInterestPolicy from './components/policies/ConflictOfInterestPolicy';
import AntiBriberyPolicy from './components/policies/AntiBriberyPolicy';
import WhistleBlowerPolicy from './components/policies/WhistleBlowerPolicy';
import SafeguardingPolicy from './components/policies/SafeguardingPolicy';
import DonorAndPartnerStatement from './components/policies/DonorAndPartnerStatement';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <Routes>
            {/* Define routes here */}
            
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/resources/conflict-of-interest" element={<ConflictOfInterestPolicy />} />
            <Route path="/resources/anti-bribery-and-anti-fraud" element={<AntiBriberyPolicy />} />
            <Route path="/resources/whistle-blower-protection" element={<WhistleBlowerPolicy />} />
            <Route path="/resources/safeguarding-policy" element={<SafeguardingPolicy />} />
            <Route path="/resources/donor-and-partner-statement" element={<DonorAndPartnerStatement />} />
            <Route path='/about/our-story' element={<OurStory />} />
            <Route path="/about/management-team" element={<LeadershipTeam />} />
            <Route path="/about/donors-and-partners" element={<DonorsAndPartners />} />
            <Route path="/about/impact-stories" element={<ImpactStories />} />
            <Route path="/activities/projects" element={<Projects />} />
            <Route path="/activities/programs" element={<Programs />} />
            <Route path="/activities/inititives" element={<Initiatives />} />
            <Route path="/activities/projects/:id" element={<ProjectDetails />} />
            <Route path="/media" element={<MediaCenter />} />
            <Route path="/media/press/" element={<Press />} />
            <Route path="/media/newsletters" element={<Newsletters />} />
            <Route path="/media/photos" element={<EventPhotos />} />
            <Route path="/media/videos" element={<EventVideos />} />
            <Route path="/activities/events" element={<Events />} />
            <Route path="/activities/events/:id" element={<EventDetails />} />
            <Route path="/resources/publications" element={<ResourceLibrary />} />
            <Route path="/get-involved/donate" element={<GetInvolved />} />
            <Route path="/get-involved/volunteer" element={<VolunteerRegisterPage />} />
            <Route path="/get-involved/partner" element={<PartnerWithUs />} />
            <Route path="/get-involved/contact-us" element={<ContactUs />} />
            <Route path="/resources/blogs" element={<Blog />} />
            <Route path="/resources/reports" element={<Reports />} />
            <Route path="/resources/policy-briefs" element={<PolicyBriefs />} />
            <Route path="/resources/corporate-documents" element={<CorporateDocuments />} />
            <Route path="/resources/platform-websites" element={<PlatformWebsites />} />
            <Route path="/resources/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
