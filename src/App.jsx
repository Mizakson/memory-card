import { useState, useEffect } from 'react'
import './styles/App.css'
import Card from './components/Card'
import Description from './components/Description'
import Score from './components/Score'
import arrShuffle from './js/arrShuffle'

// API KEY + URL
const API_URL = 'https://api.pexels.com/v1/search'
const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [picsArr, setPicsArr] = useState([])
  const [cardInfo, setCardInfo] = useState([])

  const search = 'animal'

  function handleClick(event) {
    const newObj = arrShuffle(picsArr)
    setPicsArr(newObj)

    if (!cardInfo.includes(event.current.target.id)) {
      setCardInfo([...cardInfo, event.current.target.id])
      setScore(score + 1)
    }
    else {
      setCardInfo([])
      // if bestscore < score then score = bestscore, reset counter
      setBestScore(bestScore < score ? score : bestScore)
      setScore(0)
    }
  }

  useEffect(() => {
    // code to be executed
    fetch(`${API_URL}?query=${search}&per_page=15&page=1`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => arrShuffle(data.photos))
      .then((arrShuffled) => {
        setPicsArr(arrShuffled)
      })

    // optional return function
}, []) // dependency array

  return (
    <>
      <Description />
      <Score curr={score} best={bestScore}/>
      <div className="display">

      </div>
    </>
  )
}

export default App
