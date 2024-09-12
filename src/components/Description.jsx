export default function Description() {

    const credits = 'Odin Project React Course Project #2, A program by Mizakson'
    const rulesText = 'Click a picture and score a point, selecting an already clicked picture resets the game!'

    return (
        <header>
            <div className="title">
                <h1 title={credits}>Memory-card</h1>
            </div>
            <div className="game-info">
                <div className="rules">
                    <p>{rulesText}</p>
                </div>
                <div className="score">
                    <p id="current">Score: </p>
                    <p id="best">Best Score: </p>
                </div>
            </div>

        </header>
    )
}