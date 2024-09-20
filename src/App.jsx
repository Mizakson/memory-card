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
  const [cardInfo, setCardInfo] = useState(null)

  const search = 'animal'

  function handleClick(event) {
    // const initialArr = Array.from(document.querySelector(".display").childNodes)
    // console.log(initialArr)
    event.preventDefault()

    const curr = event.currentTarget.id
    setCardInfo(curr)
    console.log(curr)

    setPicsArr(arrShuffle(picsArr))
    console.log(picsArr)
      
    if (curr === cardInfo) {
      setScore(0)

      if (score > bestScore) {
        setBestScore(score)
      }

    }

    if (curr !== cardInfo) {
      setScore(score + 1)
    }

    // const prev = event.currentTarget.id
    // setCardInfo(prev)
    // console.log(cardInfo)
  }

  useEffect(() => {
    // code to be executed
    fetch(`${API_URL}?query=${search}&per_page=9&page=1`, {
      mode: 'cors',
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {arrShuffle(data.photos)
        setPicsArr(data.photos)
      })

    // optional return function
}, []) // dependency array

  return (
    <>
      <Description />
      <Score curr={score} best={bestScore}/>
      <div className="display">
      {picsArr?.map((pic) => (
        <Card url={pic.src.medium} title={pic.alt} id={pic.id} key={pic.id} onClick={handleClick}/>
      
      ))}
      </div>
    </>
  )
}

export default App
