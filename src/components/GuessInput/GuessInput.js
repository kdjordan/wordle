import { useState } from "react"

export default function GuessInput( { handleGuess } ) {
    const [guess, setGuess] = useState('')

    return (
        <form 
            className="guess-input-wrapper"
            onSubmit={(e) => {
                e.preventDefault()
                if (guess.length === 5) {
                    handleGuess(guess.toUpperCase())
                    setGuess('')
                } else {
                    alert('You need a 5 character guess !')
                }
            }}    
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input 
                id="guess-input" 
                type="text" 
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
            /> 
        </form>
    )
}