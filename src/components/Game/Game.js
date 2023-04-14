import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';



// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log(answer)


// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [win, setWin] = useState(false)
  const [active, setBannerActive] = useState(false)

  function checkForWinOrOutOfGuesses() {
    guesses.length+1 == NUM_OF_GUESSES_ALLOWED ? setBannerActive(true) : setBannerActive(false)

    let winOrNot = guesses.filter(obj => {
      console.log('***', obj)
      return obj.status != 'correct'
    })
    return winOrNot.length === 0 ?  true : false
  }
 
  function handleGuess(guess) {
    //check to see if guess is matched 
    setGuesses([...guesses, checkGuess(guess, answer)])
    console.log(guesses.length == NUM_OF_GUESSES_ALLOWED)
    //check to see if user is out of guesses or has won
    checkForWinOrOutOfGuesses()
  }


  return (
    <>
      <GuessList guesses={guesses} answer={answer}/>
      <GuessInput handleGuess={handleGuess} />
      <Banner active={active} win={win} answer={answer} numGuesses={guesses.length}/>
    </>
  );
}

export default Game;
