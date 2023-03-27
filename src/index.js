import React from 'react' // React is the default export from the react package	
import ReactDOM from 'react-dom' // ReactDOM is the default export from the react-dom package
import './index.css' // import the CSS file
import App from './App' // import the App component

// create root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
