import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guesses from '../Guesses';
import Input from '../Input';
import GameOverBanner from '../GameOverBanner';

const GAME_STATUS = {
  playing: 'playing',
  won: 'won',
  lost: 'lost',
};

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));

  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState(GAME_STATUS.playing);

  const addGuess = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);

    if (guess === answer) {
      setStatus(GAME_STATUS.won);
    }

    if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setStatus(GAME_STATUS.lost);
    }
  };

  const restart = () => {
    setGuesses([]);
    setStatus(GAME_STATUS.playing);
    setAnswer(sample(WORDS));
  };

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <Input addGuess={addGuess} disabled={status !== GAME_STATUS.playing} />

      {status === GAME_STATUS.won && (
        <GameOverBanner
          type={'happy'}
          numGuesses={guesses.length}
          answer={answer}
          restart={restart}
        />
      )}

      {status === GAME_STATUS.lost && (
        <GameOverBanner
          type={'sad'}
          numGuesses={guesses.length}
          answer={answer}
          restart={restart}
        />
      )}
    </>
  );
}

export default Game;
