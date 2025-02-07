// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes/AppRoutes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
