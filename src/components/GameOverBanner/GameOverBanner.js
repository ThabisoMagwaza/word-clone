import React from 'react';

function GameOverBanner({ type, numGuesses, answer, restart }) {
  return (
    <div className={`${type} banner`}>
      {type === 'happy' && (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numGuesses}</strong>.
        </p>
      )}

      {type === 'sad' && (
        <p>
          Sorry, the correct answer was <strong>{answer}</strong>.
        </p>
      )}

      <button onClick={restart}>Start Again</button>
    </div>
  );
}

export default GameOverBanner;
