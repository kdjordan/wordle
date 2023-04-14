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
  const [active, setGameActive] = useState(false)

  function checkWin(answerArr) {
    let winOrNot = answerArr.filter(obj => {
      console.log('***', obj)
      return obj.status != 'correct'
    })
    return winOrNot.length === 0 ?  true : false
  }

  function checkNumberOfGuesses() {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameActive(false)
    } 
  }

  function checkGuesses(guessArr) {
    console.log('gonna check ', guessArr)
    let checkedGuesses = []
    guessArr.map((g) => {
      let answerResponse = checkGuess(g, answer)
      checkedGuesses.push(answerResponse)
      // //check for win
      if (checkWin(answerResponse)) {
        setWin(true)
      } 

    })
    console.log('*** ', checkedGuesses)
  }
 
  function handleGuess(guess) {
    const newGuesses = [...guesses, guess]
    setGuesses(newGuesses)
    
    //check to see if guess is matched 
    checkGuesses([guess])
    
    //check to see if guesses.length = NUM_OF_GUESSES_ALLOWED
    checkNumberOfGuesses()
    
    
    
    console.log('got a guess in APP ', newGuesses)
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
