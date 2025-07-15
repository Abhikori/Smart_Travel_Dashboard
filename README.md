# Smart Travel Dashboard
The Smart Travel Dashboard is a responsive web application designed to help travelers discover nearby attractions. It intelligently adapts to the user's location, network conditions, and efficiently loads content for an optimal experience.
## Features
- **Automatic Location Detection**: Uses the Geolocation API to detect the user's current location.
- **Network Adaptation**: Adjusts content loading based on the user's network speed (using the Network Information API).
- **Efficient Content Loading**: Implements lazy loading of attraction cards using the Intersection Observer API to improve performance.
- **Nearby Attractions Display**: Shows a grid of nearby attractions with smooth animations as they come into view.
- **Responsive Design**: Works on mobile, tablet, and desktop devices.
## Technologies Used
- **React** with **Vite** for the frontend.
- **Tailwind CSS** for styling.
- **Web APIs**:
  - Geolocation API
  - Network Information API
  - Intersection Observer API
- **Font Awesome** for icons.
## Getting Started
### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/smart-travel-dashboard.git
   cd smart-travel-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173`.
## Project Structure
```
src/
├── components/
│   ├── cards/
│   │   ├── GeolocationCard.jsx
│   │   ├── NetworkCard.jsx
│   │   └── ContentLoadingCard.jsx
│   ├── places/
│   │   └── PlaceCard.jsx
│   └── ui/
│       ├── Header.jsx
│       └── Footer.jsx
├── hooks/
│   ├── useGeolocation.js
│   ├── useNetworkStatus.js
│   └── useIntersectionObserver.js
├── data/
│   └── mockPlaces.js
├── App.jsx
├── main.jsx
└── index.css
```
## Custom Hooks
- `useGeolocation`: Handles geolocation logic and returns the user's current location.
- `useNetworkStatus`: Monitors the network connection and returns connection type, effective type, and downlink speed.
- `useIntersectionObserver`: Implements the Intersection Observer API to detect when elements come into view.
## How It Works
1. **Location Detection**: On page load, the app requests the user's location. If granted, it displays the coordinates and loads nearby attractions. If denied, it uses a demo location.
2. **Network Monitoring**: The app checks the user's network connection and adjusts the content loading strategy accordingly (e.g., high quality for fast networks, essential content for slow networks).
3. **Lazy Loading**: Attraction cards are only loaded when they come into the viewport, reducing initial load time and improving performance.
## Future Enhancements
- Integrate with a real API (like Google Places) to fetch actual nearby attractions.
- Add a map view to show attractions geographically.
- Implement user authentication to save favorite places.
- Add weather information for the user's location.
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

