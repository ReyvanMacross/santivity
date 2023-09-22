import React from 'react';
import './App.css'; // Add your CSS file

const VideoComponent = () => {
  return (
    <div id='video' className="bg-gray-100 py-7">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Santivity Clip</h1>
        <p className="text-lg text-center mb-8">So this is our video company and some project</p>
        <div className="flex flex-col md:flex-row  md:space-x-4 items-center">

          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-1 text-center">Video Title 1</h2>
            <div className="responsive-iframe-container">
              <iframe
                width="660"    // Set the width to 660 pixels
                height="300"   // Set the height to 300 pixels
                src="https://www.youtube.com/embed/qQtPAggFMt8"
                title="YouTube Video 1"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-1 text-center">Video Title 2</h2>
            <div className="responsive-iframe-container">
              <iframe
                width="660"    // Set the width to 660 pixels
                height="300"   // Set the height to 300 pixels
                src="https://www.youtube.com/embed/OV9NJGTLm-4"
                title="YouTube Video 2"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
