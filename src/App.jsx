import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyNavbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import Resume from './pages/resume/resume';
import ScrollToTop from './scrollTop';
import ContactButton from './components/contactButton';
import LanguageProvider from './components/LanguageContext';
import './App.css';


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Resume />
            </motion.div>
          }
        />
        {/* Catch-all route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  return (
    <LanguageProvider>
        <Router>
            <ScrollToTop />
            <ContactButton />
            <MyNavbar />
            <AnimatedRoutes />
            <Footer />
        </Router>
    </LanguageProvider>
  );
}

export default App;
