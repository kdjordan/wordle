import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.log(answer)


// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  const [gameWon, setGameWon] = useState(false)

  // need to pass down array to GuessLIst - 

  function checkWin(answerArr) {
  //   let winOrNot = answerArr.filter(obj => {
  //     console.log('***', obj)
  //     return obj.status != 'correct'
  // })
  // winOrNot.length === 0 ? setWin(true) : setWin(false) 
  }

  function checkGuesses() {
    // let checkedGuesses = []
    // guesses.map((g) => {
    //   //check for win
    //   let answerResponse = checkGuess(g, answer)
    //   checkedGuesses.push(answerResponse)
    //   if (checkWin(answerResponse)) {
    //     //signal win to APP
    //   }

    // })
  }

 
  function handleGuess(guess) {
    const newGuesses = [...guesses, guess]
    //check to see if guess is matched 
    //check to see if guesses.length = NUM_OF_GUESSES_ALLOWED
    setGuesses(newGuesses)
  }


  return (
    <>
      <GuessList guesses={guesses} answer={answer}/>
      <GuessInput handleGuess={handleGuess} gameWon={false}/>
      <Banner gameWon={false} win={true} answer={answer} numGuesses={guesses.length}/>
    </>
  );
}

export default Game;
