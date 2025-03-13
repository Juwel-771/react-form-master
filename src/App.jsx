import { useState } from 'react'
import './App.css'
import SimpleForm from './component/SimpleForm/SimpleForm'
import StatefulForm from './component/StatefulForm/StatefulForm'
import StateForm from './component/StatefulForm/StateForm'
import StateForm2 from './component/StatefulForm/StateForm2'
import StateForm3 from './component/StatefulForm/StateForm3'
import StateForm4 from './component/StatefulForm/StateForm4'
import RefForm from './component/RefForm/RefForm'
import RefForm2 from './component/RefForm/RefForm2'
import RefForm3 from './component/RefForm/RefForm3'
import RefForm4 from './component/RefForm/RefForm4'
import RefForm5 from './component/RefForm/RefForm5'
import HookForm from './component/HookForm/HookForm'
import ReUsableForm from './component/ReUsableForm/ReUsableForm'
import ReUsableForm2 from './component/ReUsableForm/ReUsableForm2'
import ReUsableForm3 from './component/ReUsableForm/ReUsableForm3'
import Granpa from './component/Granpa/Granpa'
import Dad from './component/Dad/Dad'
import Son from './component/Son/Son'
import Friend from './component/Friend/Friend'
import Aunty from './component/Aunty/Aunty'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log(data);
  // };

  // const handleUpdateProfile = data => {
  //   console.log(data)
  // }

  // const handleSignUpData = stateData => {
  //   console.log(stateData)
  // }

  // const handleUpdateProfile = data => {
  //   console.log(data);
  // }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <StateForm></StateForm> */}
      {/* <StateForm2></StateForm2> */}
      {/* <StateForm3></StateForm3> */}
      {/* <StateForm4></StateForm4> */}
      {/* <RefForm></RefForm> */}
      {/* <RefForm2></RefForm2> */}
      {/* <RefForm3></RefForm3> */}
      {/* <RefForm4></RefForm4> */}
      {/* <RefForm5></RefForm5> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUsableForm formTitle = {'Sign Now'} handleSubmit = {handleSignUpSubmit}>
        <h2>Sign Up Form</h2>
      </ReUsableForm>
      <ReUsableForm formTitle = {'Profile Update'} handleSubmit = {handleUpdateProfile} submitBtn = {'Update Now'}>
        <h2>Update Profile Form</h2>
      </ReUsableForm> */}
      {/* <ReUsableForm2 
        formTitle = {"Sign Form"} 
        handleOnSubmit = {handleSignUpData} 
        submitBtn = {"Submit"}>

      </ReUsableForm2> */}

      {/* <ReUsableForm3 formTitle = {'Profile Upload'} handleSubmit = {handleUpdateProfile} submitBtn = {'Upload Now'}>

      </ReUsableForm3> */}
      <Granpa></Granpa>
      <Friend></Friend>
    </>
  )
}

export default App
