import React , { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import AboutUs from './AboutUs';
import VideoComponent from './VideoComponent';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer'
import './styles/tailwind.css';

function App() {
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTransition(true);
    }, 1000); 
  }, []);
  return (
    <div  className={` ${showTransition ? 'transition-opacity duration-1000 ease-in opacity-100' : 'opacity-0'}`}>
      <Navbar /> 
      <Profile />
      <AboutUs/>
      <VideoComponent />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
