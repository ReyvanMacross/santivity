import React from 'react';
import './App.css'; // Include your CSS file

const VideoComponent = () => {
  return (
    <div id='video' className="bg-gray-100 py-7">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Santivity Clip</h1>
        <p className="text-lg text-center mb-8">This is our company video and some projects</p>
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h2 className="text-xl font-semibold mb-3 text-center">Intruduction </h2>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute  w-full h-full"
                src="https://media.istockphoto.com/id/1190940132/vector/stay-tuned-retro-television-error-screen.jpg?s=612x612&w=0&k=20&c=R5z6wUJ8Z6qxHdxn0i-74KctNrq6r3UQLr1Vj68IV7M="
                title="YouTube Video 1"
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
