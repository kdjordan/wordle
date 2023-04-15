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
console.log(answer)


// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [win, setWin] = useState(false)
  const [bannerActive, setBannerActive] = useState(false)

  function resetGame() {
    setGuesses([])
    setWin(false)
    setBannerActive(false)
    answer = sample(WORDS);
    console.log(answer)
  }

  function endGame(status) {
    if (status === 'win') {
      setBannerActive(true)
      setWin(true)
    } else {
      setBannerActive(true)
    }
  }

  function checkGuessForMatch(guess) {
    console.log('got guess ', guess)
    let isWin = guess.filter((obj) => obj.status != 'correct')
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
    if ( guesses.length+1 == NUM_OF_GUESSES_ALLOWED) {
      endGame('loss')
    }
  }

  


  return (
    <>
      <GuessList guesses={guesses} answer={answer}/>
      <GuessInput handleGuess={handleGuess} />
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
