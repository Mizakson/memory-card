// import { useState } from 'react'
import { useEffect } from 'react'
import './styles/App.css'
import Description from './components/Description'
import Score from './components/Score'
import Display from './components/Display'

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    // code to be executed

    // optional return function
}, []) // dependency array

  return (
    <>
      <Description />
      <Score />
      <Display />
    </>
  )
}

export default App
