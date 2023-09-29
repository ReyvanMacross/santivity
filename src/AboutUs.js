import React from "react";

function AboutUs() {
  return (
    <div id="about" className="bg-gray-100 p-4 md:p-16 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        <h1 className="text-2xl font-semibold mb-2 md:mb-0 md:mr-4">About Company</h1>
        <p className="text-gray-700 md:w-1/2">
        Santivity is a technology company that is dedicated to providing innovative solutions to our customers. We are passionate about using technology to make a positive impact on the world, and we are committed to providing our customers with the best possible products and services.We have a team of experienced and talented professionals who are experts in their fields. We are also committed to continuous learning and development, so we can stay ahead of the curve and offer our customers the latest and greatest technologies.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
