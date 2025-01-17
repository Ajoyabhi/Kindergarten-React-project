import './App.css';
import {Routes, Route} from "react-router-dom"
import AboutSection from './pages/about.js'
import Home from './pages/contact.js';
import HeaderCarousel from './Layout/carsouel.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutSection />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/carol" element={<HeaderCarousel />} />
      </Routes>
    </>
  );
}

export default App;
