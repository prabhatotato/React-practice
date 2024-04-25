import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h2> HEllo redux toolkit</h2>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
