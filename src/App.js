import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Infoone from './components/Infoone';
import Infotwo from './components/Infotwo';
import Menu from './components/Menu';   // ✅ IMPORTANT (see problem 3)
import Navbar from './components/Navbar';
import Service from './components/Service';
import Restulooks from './components/Restulooks';
import FAQ from "./components/Faq";
import FloatingNav from "./components/Flotingnav";

function App() {
  return (
    
      <div className="App">

        <Navbar />
        <Infoone />
        <Restulooks />
        <HashRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        </HashRouter>
        <Service />
        <Infotwo />
        <FAQ />
        <Footer />
        <FloatingNav />

      </div>
    
  );
}

export default App;
