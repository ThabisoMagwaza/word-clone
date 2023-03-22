import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guesses from '../Guesses';
import Input from '../Input';

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  };

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <Input addGuess={addGuess} />
    </>
  );
}

export default Game;
