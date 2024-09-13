import { useState, useEffect } from "react"

export default function Score() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // code to be executed
        console.log("Count: ", count)
    
        // optional return function
    }, [count]) // dependency array

    const incrementCount = (event) => {
        event.preventDefault()
        setCount(count + 1)
    }

    const decrementCount = (event) => {
        event.preventDefault()
        setCount(count - 1)
    }


    return(
        <>
        <div className="score">
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
            <p id="current">Score: {count}</p>
            <p id="best">Best Score: {count}</p>
        </div>
        </>

    )
}