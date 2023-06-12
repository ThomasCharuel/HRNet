import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

function Root({ outlet }) {
  return (
    <>
      <Header />
      {outlet ? outlet : <Outlet />}
    </>
  );
}

Root.propTypes = {
  outlet: PropTypes.element,
};

export default Root;
