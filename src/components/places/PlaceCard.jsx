import React, { useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const PlaceCard = ({ place, onVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const ref = useIntersectionObserver(() => {
    setIsVisible(true);
    onVisible(place.id);
  });
  
  return (
    <div 
      ref={ref} 
      className={`bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="w-full h-48 bg-gradient-to-r from-blue-700 to-indigo-800 flex items-center justify-center">
        <i className={`${place.icon} text-5xl text-white text-opacity-90`}></i>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3 text-white">{place.name}</h3>
        <p className="mb-4 text-white text-opacity-80">{place.description}</p>
        <div className="flex items-center text-white text-opacity-70">
          <i className="fas fa-map-marker-alt mr-2 text-blue-300"></i>
          <span>{place.distance} away</span>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;