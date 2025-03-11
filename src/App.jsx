import { useState } from 'react'
import './App.css'
import SimpleForm from './component/SimpleForm/SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <SimpleForm></SimpleForm>
    </>
  )
}

export default App
