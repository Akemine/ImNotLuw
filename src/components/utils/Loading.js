import React from 'react';

export default () => {
  return (
    <div style={{ minHeight: '100vh' }} className="d-flex flex-row justify-content-center align-items-center w-100">
      <img alt="loading gif" src={process.env.PUBLIC_URL + '/images/gif.gif' }/>
    </div>
  );
}