import { GuessResultRow } from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'

export default function GuessList( { guesses } ) {

  let board = []

  function addGuessesToBoard(guesses) {
    guesses.forEach((guess, i) => {
      board[i] = guess
    });
  }
  
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