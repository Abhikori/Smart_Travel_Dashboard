import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import GeolocationCard from './components/cards/GeolocationCard';
import NetworkCard from './components/cards/NetworkCard';
import ContentLoadingCard from './components/cards/ContentLoadingCard';
import PlaceCard from './components/places/PlaceCard';
import { mockPlaces } from './data/mockPlaces';

function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadedPlaceIds, setLoadedPlaceIds] = useState(new Set());

  const getLocation = () => {
    setLoading(true);
    setError(null);
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude, accuracy } = position.coords;
          setLocation({
            latitude: latitude.toFixed(6),
            longitude: longitude.toFixed(6),
            accuracy: accuracy.toFixed(2) + ' meters'
          });
          loadNearbyPlaces(latitude, longitude);
        },
        err => {
          setError(err.message);
          setLoading(false);
          setLocation({
            latitude: '40.7128',
            longitude: '-74.0060',
            accuracy: 'Demo Data'
          });
          loadNearbyPlaces(40.7128, -74.0060);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
    }
  };

  const loadNearbyPlaces = (lat, lng) => {
    setLoading(true);
    setPlaces([]);
    setLoadedPlaceIds(new Set()); 
    setTimeout(() => {
      setPlaces(mockPlaces);
      setLoading(false);
    }, 1500);
  };

  const handlePlaceVisible = (id) => {
    setLoadedPlaceIds(prev => {
      if (prev.has(id)) return prev;
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const loadedItems = loadedPlaceIds.size; 

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="container max-w-6xl mx-auto">
      <Header />
      
      <div className="dashboard grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <GeolocationCard 
          location={location} 
          error={error} 
          onRefresh={getLocation} 
        />
        <NetworkCard />
        <ContentLoadingCard 
          loadedItems={loadedItems} 
          loading={loading} 
        />
      </div>
      
      <div className="places-container mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
          <i className="fas fa-map-marked-alt mr-3"></i>
          Nearby Attractions
        </h2>
        
        {loading ? (
          <div className="text-center py-10 text-white">
            <div className="loading-spinner border-4 border-t-white border-opacity-30 rounded-full w-12 h-12 mx-auto mb-6"></div>
            <p>Loading nearby attractions based on your location...</p>
          </div>
        ) : (
          <div className="places-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {places.map(place => (
              <PlaceCard 
                key={place.id} 
                place={place} 
                onVisible={() => handlePlaceVisible(place.id)} 
              />
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;