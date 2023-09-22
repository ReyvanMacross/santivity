import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import AboutUs from './AboutUs';
import VideoComponent from './VideoComponent';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer'

function App() {
  return (
    <div>
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
