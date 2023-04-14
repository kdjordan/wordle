export default function Banner( {active, win, answer, numGuesses} ) {
    console.log('active is ', active)
    const STYLE = {
        backgroundColor : `${win ? 'green' : 'red'}`,
        height: '9rem',
        borderTopRightRadius: '.5rem',
        borderTopLeftRadius: '.5rem',
    }
    return (
        active && <div className="banner" style={STYLE}>
            {win ? (
                <h2 style={{color:'white'}}>Congratulations! You got it in {numGuesses} guesses.</h2>
            ) 
            : 
                (<h2 style={{color:'white'}}>Sorry, the correct answer is {answer}</h2>)    
            }
            
        </div>
    )
}