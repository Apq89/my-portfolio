import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header.jsx';
import Background from './components/Background.jsx';
import Home from './components/Home';         // Atualiza para o novo componente de Home
import ProfessionalResume from './components/ProResume';  // Atualiza para o novo componente
import Contact from './components/Contact';   // Atualiza para o novo componente
import Projects from './components/Projects';  // Novo componente Projects
import Skills from './components/Skills';      // Novo componente Skills
import Footer from './components/Footer';
import './App.css'; // Estilos globais

// Componente para aplicar a transição de zoom nas páginas (zoom-in e zoom-out)
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}  // Zoom-out e opacidade 0 ao entrar
      animate={{ scale: 1, opacity: 1 }}   // Estado final normal (zoom-in e opacidade 1)
      exit={{ scale: 0, opacity: 0 }}      // Zoom-out e opacidade 0 ao sair
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};


// Componente que controla as páginas com animação
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/professional-resume" element={<PageTransition><ProfessionalResume /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />  
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />       
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Background />
      <Header />
      <main className="content-container">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
