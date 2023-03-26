import React from 'react';
import GameOverBanner from '../GameOverBanner';

function LostBanner({ answer, restart }) {
  return (
    <GameOverBanner status={'sad'} restart={restart}>
      <p>
        Sorry, the correct answer was <strong>{answer}</strong>.
      </p>
    </GameOverBanner>
  );
}
export default LostBanner;
