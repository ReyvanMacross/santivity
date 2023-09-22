import React from "react";

function Banner() {
  const bannerImageStyle = {
    backgroundImage: `url("https://i.pinimg.com/564x/ca/5f/50/ca5f50d5103760577e3f2f25b6a95aba.jpg")`,
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
          Discover amazing content and services.
        </p>
      </div>
    </div>
  );
}

export default Banner;
