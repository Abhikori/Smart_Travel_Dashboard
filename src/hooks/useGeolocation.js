import { useState, useEffect } from 'react';

export default function useGeolocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = () => {
    setIsLoading(true);
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
          setIsLoading(false);
        },
        err => {
          setError(err.message);
          setIsLoading(false);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, error, isLoading, refreshLocation: getLocation };
}