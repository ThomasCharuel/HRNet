import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Employees from '../../pages/Employees';

export default createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <Home /> },
      { path: '/employees', element: <Employees /> },
    ],
  },
]);
