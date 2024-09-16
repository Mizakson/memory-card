export default function Score({ curr, best }) {

    return(
        <>
        <div className="score">
            <p id="current">Score: {curr}</p>
            <p id="best">Best Score: {best}</p>
        </div>
        </>

    )
}