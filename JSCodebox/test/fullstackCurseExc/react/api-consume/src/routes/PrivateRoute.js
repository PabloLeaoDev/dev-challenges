import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ element: Element, isClosed }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <>{Element}</>;
}

PrivateRoute.defaultProps = {
  isClosed: false
};

PrivateRoute.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool
};
