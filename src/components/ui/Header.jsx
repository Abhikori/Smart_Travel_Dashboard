import React from 'react';

const Header = () => {
  return (
    <header className="text-center py-10 mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        <i className="fas fa-globe-americas mr-3"></i>
        Smart Travel Dashboard
      </h1>
      <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto">
        Your intelligent travel companion that adapts to your location, network conditions, 
        and efficiently loads content for the best travel experience
      </p>
    </header>
  );
};

export default Header;