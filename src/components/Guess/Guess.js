import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const results = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span
          key={index}
          className={`cell ${(results && results[index].status) || ''}`}
        >
          {value ? value[index] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
