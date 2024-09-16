import { useState, useEffect } from 'react'
import './styles/App.css'
import Card from './components/Card'
import Description from './components/Description'
import Score from './components/Score'

// API KEY + URL
const API_URL = 'https://api.com/pexels.com/v1/search'
const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [count, setScore] = useState(0)

  useEffect(() => {
    // code to be executed

    // optional return function
}, []) // dependency array

  console.log(API_KEY)
  console.log(API_URL)

  return (
    <>
      <Description />
      <Score />
      <div className="display"></div>
    </>
  )
}

export default App
