import React from 'react';

const Blog = () => {
  return (
    <div id='blog' className=" bg-gray-100 py-7">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog Title</h1>
        <p className="text-lg mb-8 text-center">aduh kebelet EEQQQ EUHQQQQQQ</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-full mx-auto">
          {/* Card 1 (Left on small screens) */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Profile Image */}
            <img
              src="https://via.placeholder.com/150"
              alt="Person 1"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            {/* Profile Name */}
            <h2 className="text-xl font-semibold mb-2 text-center">Anugrah Muhammad Araffah</h2>
            {/* Profile Description */}
            <p className="text-gray-700 text-center">Description of Person 1.</p>
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/person1"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline mt-2 text-center"
            >
              LinkedIn
            </a>
          </div>

          {/* Card 2 (Right on small screens) */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Profile Image */}
            <img
              src="https://i.imgur.com/ZvnkXl1.png"
              alt="Person 2"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            {/* Profile Name */}
            <h2 className="text-xl font-semibold mb-2 text-center">Rievan Rivaldy Nur Triana</h2>
            {/* Profile Description */}
            <p className="text-gray-700 text-center">Description of Person 2.</p>
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/person2"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline mt-2 text-center"
            >
              LinkedIn
            </a>
          </div>

          {/* Card 3 (Below on small screens) */}
          <div className="bg-white p-4 rounded-lg shadow-lg col-span-full">
            {/* Profile Image */}
            <img
              src="https://via.placeholder.com/150"
              alt="Person 3"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            {/* Profile Name */}
            <h2 className="text-xl font-semibold mb-2 text-center">Riordan Muhammad Al Kausar</h2>
            {/* Profile Description */}
            <p className="text-gray-700 text-center">Description of Person 3.</p>
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/person3"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline mt-2 text-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
