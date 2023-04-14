export default function Banner( {active, win, answer, numGuesses} ) {
    
    return (
        active && <div className="banner" style={{backgroundColor: 'red', height: '9rem'}}>
            {win ? (
                <h2 style={{color:'white'}}>Congratulations! You got it in {numGuesses} guesses.</h2>
            ) 
            : 
                (<h2 style={{color:'white'}}>Sorry, the correct answer is {answer}</h2>)    
            }
            
        </div>
    )
}