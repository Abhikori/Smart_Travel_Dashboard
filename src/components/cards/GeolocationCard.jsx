import React from 'react';

const GeolocationCard = ({ location, error, onRefresh }) => {
  const apiSupported = 'geolocation' in navigator;
  
  return (
    <div className="bg-gray-900 bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-xl transition-all duration-300 hover:bg-opacity-70 hover:-translate-y-1 border border-gray-700">
      <div className="flex items-center mb-6 pb-4 border-b border-gray-700">
        <div className="bg-blue-500 bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <i className="fas fa-map-marker-alt text-xl text-blue-300"></i>
        </div>
        <h2 className="text-xl font-bold text-white">Geolocation</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Latitude:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white font-mono">
            {location?.latitude || 'Detecting...'}
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Longitude:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white font-mono">
            {location?.longitude || 'Detecting...'}
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Accuracy:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white">
            {location?.accuracy || 'Detecting...'}
          </div>
        </div>
        
        <div className={`flex items-center justify-center py-3 px-4 rounded-lg my-4 text-white ${
          apiSupported ? 'bg-green-600 bg-opacity-30' : 'bg-red-600 bg-opacity-30'
        }`}>
          {apiSupported ? (
            <><i className="fas fa-check-circle mr-2"></i> Geolocation API Supported</>
          ) : (
            <><i className="fas fa-exclamation-circle mr-2"></i> Geolocation Not Supported</>
          )}
        </div>
        
        <button 
          onClick={onRefresh}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-medium flex items-center justify-center transition-all shadow-lg cursor-pointer"
        >
          <i className="fas fa-sync-alt mr-3 "></i> Refresh Location
        </button>
      </div>
    </div>
  );
};

export default GeolocationCard;