import React from 'react';
import GameOverBanner from '../GameOverBanner';

function WonBanner({ numGuesses, restart }) {
  return (
    <GameOverBanner status={'happy'} restart={restart}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}
        </strong>
        .
      </p>
    </GameOverBanner>
  );
}

export default WonBanner;
