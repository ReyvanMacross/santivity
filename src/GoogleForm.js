// YouTubeVideo.js
import React from 'react';

function YouTubeVideo() {
  return (
    <div className="bg-transparent-500 p-4">
      <p className="text-black text-3xl">My Embedded YouTube Video</p>
      <div className="mt-4">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/1ts0TyUVJBA"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YouTubeVideo;
