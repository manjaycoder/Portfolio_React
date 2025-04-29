

import Skill from "./Components/Skill";
import About from "./Components/About";
import Header from "./Components/Header";
import Marque from "./Components/Marque";
import Navber from "./Components/Navber";
import Projects from "./Components/Projects";
import LocoMotive from "./Components/LocoMotive";
import "../src/App.css";
import SplashCursor from "./Components/SplashCursor";
import { useEffect } from "react";
import Contact from "./Components/Contact";
const App = () => {
  useEffect(() => {
    const disableShortcuts = (e:any) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) || // Ctrl+Shift+I/C/J
        (e.ctrlKey && e.key === 'U') // Ctrl+U (view source)
      ) {
        e.preventDefault();
      }
    };
  
    const disableContextMenu = (e:any) => e.preventDefault();
  
    window.addEventListener('keydown', disableShortcuts);
    window.addEventListener('contextmenu', disableContextMenu);
  
    return () => {
      window.removeEventListener('keydown', disableShortcuts);
      window.removeEventListener('contextmenu', disableContextMenu);
    };
  }, []);
  
  return (
    <LocoMotive>
      <div className="overflow-y-auto overflow-x-hidden scrollbar-thin  scroll-hide ">
        <Navber />

        <SplashCursor />
        <Header />
       
        <About />
       
        <Marque />
        
        <Skill />
        
        <Projects />
        
        <Contact />
      </div>
      <hr className="bg-zinc-300 w-full m-10 lg:mt-20" />
      {/* Navbar */}
    </LocoMotive>
  );
};

export default App;
