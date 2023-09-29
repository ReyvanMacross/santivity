import React from "react";

function Banner() {
  const bannerImageStyle = {
    backgroundImage: `url("https://www.talkesport.com/wp-content/uploads/technology-esports.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "400px", 
    color: "#fff",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={bannerImageStyle} className="relative text-white p-4">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white-200">
          Santivity Company
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Create a whole inspiration
        </p>
      </div>
    </div>
  );
}

export default Banner;
