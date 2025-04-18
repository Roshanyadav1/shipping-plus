import { useState, useEffect, FC } from 'react';

/**
 * A minimal black and white map component with dragging functionality
 * Uses Leaflet.js for map rendering with a grayscale filter applied
 */
const GrayScaleMap: FC = () => {
  // Track when the map has finished loading
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  
  useEffect(() => {
    // Load the Leaflet CSS dynamically to avoid Next.js SSR issues
    const linkEl: HTMLLinkElement = document.createElement('link');
    linkEl.rel = 'stylesheet';
    linkEl.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(linkEl);
    
    // Load the Leaflet JS dynamically
    const scriptEl: HTMLScriptElement = document.createElement('script');
    scriptEl.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    scriptEl.onload = initMap; // Initialize map after script loads
    document.body.appendChild(scriptEl);
    
    // Clean up function to remove added elements when component unmounts
    return () => {
      document.head.removeChild(linkEl);
      document.body.removeChild(scriptEl);
    };
  }, []);
  
  /**
   * Initialize the Leaflet map with minimal features
   * Called after Leaflet script is loaded
   */
  const initMap = (): void => {
    // Wait for the map container to be available in the DOM
    if (!document.getElementById('draggable-map')) {
      setTimeout(initMap, 100);
      return;
    }
    
    // Get the Leaflet global from window
    const L = (window as any).L;
    if (!L) return;
    
    // Create map with only dragging enabled and other features disabled
    const map = L.map('draggable-map', {
      zoomControl: false,          // Hide zoom controls
      attributionControl: false,   // Hide attribution
      dragging: true,              // Enable map dragging
      touchZoom: false,            // Disable touch zoom
      scrollWheelZoom: false,      // Disable mouse wheel zoom
      doubleClickZoom: false,      // Disable double-click zoom
      boxZoom: false,              // Disable box zoom
      tap: false                   // Disable tap handler
    }).setView([40.7128, -74.0060], 12); // New York City coordinates
    
    // Add the black and white tile layer from CARTO
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      subdomains: 'abcd',
    }).addTo(map);
    
    // Custom cursor styling to indicate draggability
    const mapContainer = document.getElementById('draggable-map');
    if (mapContainer) {
      mapContainer.style.cursor = 'grab'; // Default cursor
      
      // Change cursor when dragging starts
      mapContainer.addEventListener('mousedown', () => {
        mapContainer.style.cursor = 'grabbing';
      });
      
      // Revert cursor when dragging ends
      mapContainer.addEventListener('mouseup', () => {
        mapContainer.style.cursor = 'grab';
      });
    }
    
    // Mark map as loaded to hide loading indicator
    setMapLoaded(true);
  };
  
  return (
    <div className="h-[42vh] w-full py-4">      
      {/* Map container with styling */}
      <div 
        id="draggable-map" 
        className="w-full h-full rounded-xl overflow-hidden shadow-sm" 
        style={{ filter: 'grayscale(100%)' }} // Apply grayscale filter for black and white effect
      />
      
      {/* Loading indicator shown until map is ready */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-70 rounded-xl">
          <div className="text-gray-500">Loading map...</div>
        </div>
      )}
    </div>
  );
};

export default GrayScaleMap;