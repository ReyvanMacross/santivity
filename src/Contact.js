import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-7 text-center">Contact Us</h1>
      <p className="text-lg mb-8 text-center">If you have suggestions and contacts, you can contact them below</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-4">
          {/* Google Form */}
          <div className="w-full md:w-1/2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdvp2hIti3KDGDMNE5xfytxfogNQmWw6gAoTOUU0Xng3mfyJA/viewform?embedded=true"
              width="100%"
              height="310"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 py-2">Connect with us</h2>
              <div className="flex justify-center space-x-4 items-center">
                <a
                  href="https://t.me/Ejaktositocuzstayafoolputosbasta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.imgur.com/HCkRZCf.png"  
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                  <span>Telegram</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.imgur.com/Pk7shbX.png" 
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                  <span className="ml-2">Youtube</span>
                </a>
                <a
                  href="https://github.com/ReyvanMacross/santivity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-3.png"  
                    alt="GitHub"
                    className="w-8 h-8"
                  />
                  <span className="ml-2">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
