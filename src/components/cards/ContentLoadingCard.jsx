import React from 'react';

const ContentLoadingCard = ({ loadedItems, loading }) => {
  const apiSupported = 'IntersectionObserver' in window;
  
  return (
    <div className="bg-gray-900 bg-opacity-60 backdrop-blur-lg rounded-xl p-6 shadow-xl transition-all duration-300 hover:bg-opacity-70 hover:-translate-y-1 border border-gray-700">
      <div className="flex items-center mb-6 pb-4 border-b border-gray-700">
        <div className="bg-purple-500 bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <i className="fas fa-binoculars text-xl text-purple-300"></i>
        </div>
        <h2 className="text-xl font-bold text-white">Content Loading</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Loading Strategy:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white">
            {apiSupported ? 'Lazy Loading' : 'Full Loading'}
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Loaded Items:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white">
            {loadedItems}
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="font-bold min-w-[120px] text-gray-300">Status:</div>
          <div className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full flex-1 text-white">
            {loading ? 'Loading content...' : 'Content loaded'}
          </div>
        </div>
        
        <div className={`flex items-center justify-center py-3 px-4 rounded-lg my-4 text-white ${
          apiSupported ? 'bg-green-600 bg-opacity-30' : 'bg-red-600 bg-opacity-30'
        }`}>
          {apiSupported ? (
            <><i className="fas fa-check-circle mr-2"></i> Observer API Supported</>
          ) : (
            <><i className="fas fa-exclamation-circle mr-2"></i> Observer API Not Supported</>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentLoadingCard;