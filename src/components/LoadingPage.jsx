import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const LoadingPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThreeDots
        color="#001529"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default LoadingPage;
