import React from 'react';
import useNetworkStatus from '../../hooks/useNetworkStatus';

const NetworkCard = () => {
  const networkStatus = useNetworkStatus();
  
  return (
    <div className="bg-gray-900 bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-xl transition-all duration-300 hover:bg-opacity-70 hover:-translate-y-1 border border-gray-700">
      <div className="flex items-center mb-6 pb-4 border-b border-gray-700">
        <div className="bg-orange-500 bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <i className="fas fa-wifi text-xl text-orange-300"></i>
        </div>
        <h2 className="text-xl font-bold text-white">Network Status</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Connection:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white">
            {networkStatus.type}
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Effective Type:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white">
            {networkStatus.effectiveType}
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Downlink:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white">
            {networkStatus.downlink}
          </div>
        </div>
        
        <div className={`flex items-center justify-center py-3 px-4 rounded-lg my-4 text-white ${
          networkStatus.supported ? 'bg-green-600 bg-opacity-30' : 'bg-red-600 bg-opacity-30'
        }`}>
          {networkStatus.supported ? (
            <><i className="fas fa-check-circle mr-2"></i> Network API Supported</>
          ) : (
            <><i className="fas fa-exclamation-circle mr-2"></i> Network API Not Supported</>
          )}
        </div>
      </div>
    </div>
  );
};

export default NetworkCard;