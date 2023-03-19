import React from 'react';

function Input({ addGuess = () => {} }) {
  const [guessedWord, setGuessedWord] = React.useState('');

  function handleChange(event) {
    const guessedWord = event.target.value.toUpperCase();
    setGuessedWord(guessedWord);
  }

  function handleSubmit(event) {
    event.preventDefault();

    addGuess(guessedWord);

    setGuessedWord('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        value={guessedWord}
        onChange={handleChange}
        type="text"
        pattern="[a-zA-Z]{5}"
        title="A 5 letter word"
        id="guess-input"
      />
    </form>
  );
}

export default Input;
