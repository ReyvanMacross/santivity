import React from 'react';

const Blog = () => {
  return (
    <div id='blog' className=" bg-gray-100 py-7">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog Title</h1>
        <p className="text-lg mb-8 text-center">This is a blog profile of the developers at this company</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-full mx-auto">
          {/* Card 1 (Left on small screens) */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Profile Image */}
            <img
              src="https://i.imgur.com/suLYRfg.png"
              alt="Person 1"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-contain"
            />
            {/* Profile Name */}
            <h2 className="text-xl font-semibold mb-2 text-center">Anugrah Muhammad Araffah</h2>
            <h4 className="text-lg font-bold mb-2 text-center">FullStack & Game Developer</h4>
            {/* Profile Description */}
            <p className="text-gray-700 text-center mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, dui ut gravida dignissim, dolor elit finibus augue, ut imperdiet sem orci et mauris. Etiam vitae maximus nisi, ut euismod augue. Mauris eget mauris eu sem pellentesque pellentesque. Fusce et nulla nisl. Maecenas pulvinar sem eget euismod venenatis. Nulla ultricies diam non tellus cursus fermentum. Pellentesque ullamcorper urna eget augue tincidunt mollis.</p>
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/person1"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline mt-2 text-center"
            >
              Github
            </a>
          </div>

          {/* Card 2 (Right on small screens) */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Profile Image */}
            <img
              src="https://i.imgur.com/WPDCfVk.png"
              alt="Person 2"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-contain"
            />
            {/* Profile Name */}
            <h2 className="text-xl font-semibold mb-2 text-center">Rievan Rivaldy Nur Triana</h2>
            {/* Profile Description */}
            <h4 className="text-lg font-bold mb-2 text-center">Front End & Sound/Video Produce</h4>
            <p className="text-gray-700 text-center">Hey, I'm Rievan Rivaldy Nur Triana, I study at SMK Negeri 4 Bandung and I'm in grade 12 RPL 2, I have a hobby of creating videos and websites. I hope to develop in the IT world, especially in the front end field. My dream is to become a Google employee in the front end or Information Technology sector.</p>
            {/* LinkedIn Button */}
            <a
              href="https://github.com/ReyvanMacross"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline mt-2 text-center"
            >
              Github
            </a>
          </div>

          {/* Card 3 (Below on small screens) */}
          <div className="bg-white p-4 rounded-lg shadow-lg col-span-full">
            {/* Profile Image */}
            <img
              src="https://i.imgur.com/GpN124B.png"
              alt="Person 3"
              className="w-24 h-24 rounded-full mx-auto mb-4 object-fill"
            />
            {/* Profile Name */}
            <h2 className="text-xl font-semibold mb-2 text-center">Riordan Muhammad Al Kausar</h2>
            {/* Profile Description */}
            <h4 className="text-lg font-bold mb-2 text-center">UI/UX & Designer Game</h4>
            <p className="text-gray-700 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, dui ut gravida dignissim, dolor elit finibus augue, ut imperdiet sem orci et mauris. Etiam vitae maximus nisi, ut euismod augue. Mauris eget mauris eu sem pellentesque pellentesque. Fusce et nulla nisl. Maecenas pulvinar sem eget euismod venenatis. Nulla ultricies diam non tellus cursus fermentum. Pellentesque ullamcorper urna eget augue tincidunt mollis.</p>
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/person3"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline mt-2 text-center"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;