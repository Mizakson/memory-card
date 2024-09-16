import { useState, useEffect } from 'react'
import './styles/App.css'
import Card from './components/Card'
import Description from './components/Description'
import Score from './components/Score'

function App() {
  const [count, setScore] = useState(0)

  useEffect(() => {
    // code to be executed

    // optional return function
}, []) // dependency array

  return (
    <>
      <Description />
      <Score />
      <div className="display"></div>
    </>
  )
}

export default App
