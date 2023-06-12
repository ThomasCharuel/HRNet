import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Home from '../../pages/Home';
import Employees from '../../pages/Employees';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'employees', element: <Employees /> },
    ],
  },
]);
