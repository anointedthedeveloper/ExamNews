import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import ErrorBoundary from "./components/ErrorBoundary";
import PageIndicator from "./components/PageIndicator";
import AnnouncementBanner from "./components/AnnouncementBanner";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Jamb = lazy(() => import("./pages/Jamb"));
const Waec = lazy(() => import("./pages/Waec"));
const Neco = lazy(() => import("./pages/Neco"));
const CutOffMarks = lazy(() => import("./pages/CutOffMarks"));
const AdmissionStatus = lazy(() => import("./pages/AdmissionStatus"));
const JambResult = lazy(() => import("./pages/JambResult"));
const WaecTimetable = lazy(() => import("./pages/WaecTimetable"));
const JambCenters = lazy(() => import("./pages/JambCenters"));
const JambSyllabus = lazy(() => import("./pages/JambSyllabus"));
const JambRegistration = lazy(() => import("./pages/JambRegistration"));
const JambBrochure = lazy(() => import("./pages/JambBrochure"));
const BrochureCourses = lazy(() => import("./pages/BrochureCourses"));
const NecoTimetable = lazy(() => import("./pages/NecoTimetable"));
const PostUtme = lazy(() => import("./pages/PostUtme"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const Support = lazy(() => import("./pages/Support"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const HireDeveloper = lazy(() => import("./pages/HireDeveloper"));

const NotFound = lazy(() => import("./pages/NotFound"));

const LoadingFallback = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  }}>
    <div style={{
      width: '48px',
      height: '48px',
      border: '4px solid #e5e7eb',
      borderTop: '4px solid #16a34a',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <p style={{fontSize: '1rem', color: '#6b7280'}}>Loading...</p>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ErrorBoundary>
      <div className={`app-wrapper ${theme}`}>
        <PageIndicator />
        <ScrollToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jamb" element={<Jamb />} />
              <Route path="/waec" element={<Waec />} />
              <Route path="/neco" element={<Neco />} />
              <Route path="/cut-off-marks" element={<CutOffMarks />} />
              <Route path="/admission-status" element={<AdmissionStatus />} />
              <Route path="/check-jamb-result" element={<JambResult />} />
              <Route path="/waec-timetable-2026" element={<WaecTimetable />} />
              <Route path="/jamb-centers" element={<JambCenters />} />
              <Route path="/jamb-syllabus" element={<JambSyllabus />} />
              <Route path="/jamb-registration" element={<JambRegistration />} />
              <Route path="/jamb-brochure" element={<JambBrochure />} />
              <Route path="/jamb-brochure/courses/:id" element={<BrochureCourses />} />
              <Route path="/neco-timetable-2026" element={<NecoTimetable />} />
              <Route path="/post-utme" element={<PostUtme />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/support" element={<Support />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hire-developer" element={<HireDeveloper />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
        <AnnouncementBanner />
      </div>
    </ErrorBoundary>
  );
}

export default App;
