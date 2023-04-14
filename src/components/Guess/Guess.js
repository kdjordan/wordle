export function GuessResultRow({ guess }) {
    // console.log('received ', guess)
    return (
        <p className="guess">
            {guess.map(({letter, status}) => {
                return <span key={crypto.randomUUID()} className={`cell ${status}`}>{letter}</span>
            })}
        </p>
    )
}