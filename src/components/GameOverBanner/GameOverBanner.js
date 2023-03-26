import React from 'react';
import Banner from '../Banner';

function GameOverBanner({ status, restart, children }) {
  return (
    <Banner status={status}>
      {children}
      <button onClick={restart}>Start Again</button>
    </Banner>
  );
}

export default GameOverBanner;
