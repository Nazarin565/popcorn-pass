import React from 'react';
import { Route, Routes, useLocation } from 'react-router';

import App from './App';
import { ChoosePlaces } from './components';

const Root = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<App />} />
      </Routes>
      {previousLocation && (
        <Routes>
          <Route path="choose-places" element={<ChoosePlaces />} />
        </Routes>
      )}
    </>
  );
};

export default Root;
