import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

// Pick a random word on every pageload.
let answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  //set up state
  const [guesses, setGuesses] = useState([])
  const [win, setWin] = useState(false)
  const [bannerActive, setBannerActive] = useState(false)

  //will reset all State to intial 
  function resetGame() {
    setGuesses([])
    setWin(false)
    setBannerActive(false)
    //get a new answer
    answer = sample(WORDS);
  }

  //will fire banner up and disable input if guess is correct or user has exhausted guesses
  function endGame(status) {
    if (status === 'win') {
      setBannerActive(true)
      setWin(true)
    } else {
      setBannerActive(true)
    }
  }

  //checks to see if all status object for each letter are correct or not
  //if isWin is empty then all letters match 'correct' = thus a win
  function checkGuessForMatch(guess) {
    let isWin = guess.filter((obj) => obj.status !== 'correct')
    return (isWin.length === 0 ?  true : false)
  }
 
  function handleGuess(guess) {
    //check to see if guess is matched 
    let guessResult = checkGuess(guess, answer)
    //add to guesses State for rendering 
    setGuesses([...guesses, guessResult])
    //check to see if guess is a match - if so end game
    if (checkGuessForMatch(guessResult)) {
      endGame('win')
    }
    //check to see if user is out of guesses - and is a loss
    if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) {
      endGame('loss')
    }
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer}/>
      <GuessInput 
        handleGuess={handleGuess} 
        inputActive={bannerActive} 
      />
      <Banner 
        bannerActive={bannerActive} 
        win={win} 
        answer={answer} 
        numGuesses={guesses.length}
        resetGame={resetGame}
      />
    </>
  );
}

export default Game;
