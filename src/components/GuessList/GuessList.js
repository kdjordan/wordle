import { checkGuess } from "../../game-helpers";
import { GuessResultRow } from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'

export default function GuessList( { guesses } ) {

  let board = []

  function addGuessesToBoard(guesses) {
    guesses.forEach((guess, i) => {
      //add guess to board
      // console.log('adding guesss ', guess)
      board[i] = guess
    });
  }

 
  // function checkGuesses() {
  //   let checkedGuesses = []
  //   guesses.map((g) => {
  //     //check for win
  //     let answerResponse = checkGuess(g, answer)
  //     checkedGuesses.push(answerResponse)
  //     if (checkWin(answerResponse)) {
  //       //signal win to APP
  //     }

  //   })

  //   function checkWin(answerArr) {
  //     let winOrNot = answerArr.filter(obj => {
  //       console.log('***', obj)
  //       return obj.status != 'correct'
  //   })
  //   // winOrNot.length === 0 ? setWin(true) : setWin(false) 
  //   }
  
  //   addGuessesToBoard(checkedGuesses)
  // }
  
  function buildBoard() {
      for (let i = 0 ; i < NUM_OF_GUESSES_ALLOWED ; i++) {
        board.push(range(0, 5))
      }
      addGuessesToBoard(guesses)
    }
    
    buildBoard()

    return (
      <div className="guess-results">
        {board.map((g) => 
          <GuessResultRow key={crypto.randomUUID()} guess={g} />
        )}
      </div>
    )
}