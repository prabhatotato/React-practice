import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h2> HELLO REDUX TOOLKIT</h2>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
