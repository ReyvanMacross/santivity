import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
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
                  href="https://www.instagram.com/your_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-instagram-14.png"  
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                  <span className="ml-2">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/your_linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-2.png" 
                    alt="LinkedIn"
                    className="w-8 h-8"
                  />
                  <span className="ml-2">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/your_github"
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
