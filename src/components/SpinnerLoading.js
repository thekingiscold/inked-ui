import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerLoading() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: 'black', // Set the background color to black
  };

  const spinnerStyle = {
    margin: 'auto',
    marginTop: '150px',
  };

  return (
    <div style={containerStyle}>
      <Spinner animation="border" variant="light" style={spinnerStyle} />
    </div>
  );
}

