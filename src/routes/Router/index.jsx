import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/Employees';
import Employees from '../../pages/Employees';

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [{ path: '/employees', element: <Employees /> }],
  },
]);
