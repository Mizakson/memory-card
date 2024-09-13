export default function Description() {

    const credits = 'Odin Project React Course Project #2, A program by Mizakson'
    const rulesText = 'Click a picture and score a point, selecting an already clicked picture resets the game!'

    return (
        <header>
            <div className="title">
                <h1 title={credits}>Memory-card</h1>
                <div className="game-info">
                    <p>{rulesText}</p>
                </div>
            </div>
        </header>
    )
}