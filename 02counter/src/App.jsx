import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    if(counter < 20){

      counter += 1
      setCounter(counter)
      console.log(counter);
    }
  }

  const removeValue = () => {
    if(counter > 0){

      counter -= 1
      setCounter(counter)
      console.log(counter);
    }
  }
  return (
   <>
      <h1> react project</h1>
      <h2> Counter Value : {counter}</h2>
      <button onClick={addValue}> Add Value</button>
      <br></br>
      <button onClick={removeValue}> remove Value</button>
   </>
  )
}

export default App
