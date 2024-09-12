export default function Description() {

    return (
        <header>
            <div className="title">
                <h1>Memory-card</h1>
                <p>Odin Project React Course Project #2</p>
                <p>A program by Mizakson</p>
            </div>
            <div className="rules">
                <p>Click a picture and score a point, selecting an already clicked picture resets the game!</p>
            </div>
            <div className="score">
                <p id="current">Score: </p>
                <p id="best">Best Score: </p>
            </div>
        </header>
    )
}