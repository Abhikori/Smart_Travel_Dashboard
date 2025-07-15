import { useState, useEffect } from 'react';

export default function useNetworkStatus() {
  const [networkStatus, setNetworkStatus] = useState({
    type: 'Checking...',
    effectiveType: 'Checking...',
    downlink: 'Checking...',
    loadingStrategy: 'Optimizing...',
    loadingStatus: 'Initializing...',
    supported: false
  });

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      
      const updateNetworkInfo = () => {
        const type = connection.type ? connection.type.charAt(0).toUpperCase() + connection.type.slice(1) : 'Unknown';
        const effectiveType = connection.effectiveType ? connection.effectiveType.toUpperCase() : 'Unknown';
        const downlink = connection.downlink ? `${connection.downlink} Mbps` : 'Unknown';
        
        let loadingStrategy, loadingStatus;
        if (effectiveType === '4G' || effectiveType === '5G') {
          loadingStrategy = 'High Quality (Fast Network)';
          loadingStatus = 'Loading high-resolution content';
        } else if (effectiveType === '3G') {
          loadingStrategy = 'Medium Quality (Moderate Network)';
          loadingStatus = 'Loading optimized content';
        } else {
          loadingStrategy = 'Low Quality (Slow Network)';
          loadingStatus = 'Loading essential content only';
        }
        
        setNetworkStatus({
          type,
          effectiveType,
          downlink,
          loadingStrategy,
          loadingStatus,
          supported: true
        });
      };
      
      updateNetworkInfo();
      connection.addEventListener('change', updateNetworkInfo);
      
      return () => {
        connection.removeEventListener('change', updateNetworkInfo);
      };
    } else {
      setNetworkStatus({
        type: 'Unsupported',
        effectiveType: 'Unsupported',
        downlink: 'Unsupported',
        loadingStrategy: 'Unsupported',
        loadingStatus: 'Network API not available',
        supported: false
      });
    }
  }, []);

  return networkStatus;
}