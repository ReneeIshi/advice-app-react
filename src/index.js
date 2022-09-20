import React from 'react';
//import ReactDOM from 'react-dom'; // received a warning here saying this is deprecated
    // use this line instead
import ReactDOM from 'react-dom/client'
import App from './App';
// ReactDOM.render(<App />,document.getElementById('root')); // received a warning here saying this is deprecated
    // use this instead
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );


