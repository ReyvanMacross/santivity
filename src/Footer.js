import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-600	py-3 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Santivity Company</p>
      </div>
    </footer>
  );
};

export default Footer;
