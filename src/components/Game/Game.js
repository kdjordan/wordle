import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';
// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log(answer)


// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [win, setWin] = useState(false)
 
  function handleGuess(guess) {
    const newGuesses = [...guesses, guess]

    //check to see if guess is matched 
    //check to see if guesses.length = NUM_OF_GUESSES_ALLOWED



    setGuesses(newGuesses)
  }


  return (
    <>
      <GuessList guesses={guesses} answer={answer}/>
      <GuessInput handleGuess={handleGuess} />
      <Banner active={false} win={true} answer={answer} numGuesses={guesses.length}/>
    </>
  );
}

export default Game;
