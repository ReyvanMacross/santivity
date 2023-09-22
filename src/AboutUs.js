import React from "react";

function AboutUs() {
  return (
    <div id="about" className="bg-gray-100 p-4 md:p-16 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
        <h1 className="text-2xl font-semibold mb-2 md:mb-0 md:mr-4">About Company</h1>
        <p className="text-gray-700 md:w-1/2">
           ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          vel lectus quis justo luctus elementum. Nullam non urna at massa
          tincidunt blandit. Suspendisse nec libero eget augue dictum
          suscipit. Integer nec augue non orci dictum semper. Sed id justo
          vitae turpis convallis vulputate.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
