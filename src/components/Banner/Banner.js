export default function Banner( {bannerActive, win, answer, numGuesses, resetGame} ) {
    console.log('active is ', bannerActive)
    const STYLE = {
        backgroundColor : `${win ? 'green' : 'red'}`,
        height: '9rem',
        borderTopRightRadius: '.5rem',
        borderTopLeftRadius: '.5rem',
    }
    return (
        bannerActive && <div className="banner" style={STYLE}>
            {win ? (
                <>
                    <h2 style={{color:'white'}}>Congratulations! You got it in {numGuesses} guesse(s).</h2>
                    <button onClick={resetGame}>RESET</button>
                </>
            ) 
            : 
            (
                <>
                    <h2 style={{color:'white'}}>Sorry, the correct answer is {answer}</h2>
                    <button onClick={resetGame}>RESET</button>
                </>
            )    
            }
            
        </div>
    )
}