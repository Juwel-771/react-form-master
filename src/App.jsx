import { useState } from 'react'
import './App.css'
import SimpleForm from './component/SimpleForm/SimpleForm'
import StatefulForm from './component/StatefulForm/StatefulForm'
import StateForm from './component/StatefulForm/StateForm'
import StateForm2 from './component/StatefulForm/StateForm2'
import StateForm3 from './component/StatefulForm/StateForm3'
import StateForm4 from './component/StatefulForm/StateForm4'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <StateForm></StateForm> */}
      {/* <StateForm2></StateForm2> */}
      {/* <StateForm3></StateForm3> */}
      <StateForm4></StateForm4>
    </>
  )
}

export default App
