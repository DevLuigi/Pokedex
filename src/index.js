import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import AppRoutes from './routes.js';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
    <AppRoutes />
  </React.StrictMode>
);