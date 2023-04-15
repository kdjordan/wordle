export default function Banner( {bannerActive, win, answer, numGuesses, resetGame} ) {
    const STYLE = {
        backgroundColor : `${win ? 'green' : 'red'}`,
        height: '10rem',
        borderTopRightRadius: '.5rem',
        borderTopLeftRadius: '.5rem',
    }
    const BUTTON_STYLE = {
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '.5rem'
    }
    return (
        bannerActive && <div className="banner" style={STYLE}>
            {win ? (
                <>
                    <h2 style={{color:'white'}}>Congratulations! You got it in {numGuesses} guesse(s).</h2>
                    <button onClick={resetGame} style={BUTTON_STYLE}>RESET</button>
                </>
            ) 
            : 
            (
                <>
                    <h2 style={{color:'white'}}>Sorry, the correct answer is {answer}</h2>
                    <button onClick={resetGame} style={BUTTON_STYLE}>RESET</button>
                </>
            )    
            }
            
        </div>
    )
}