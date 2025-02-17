
// import { data } from 'react-router-dom'
import './App.css'
// import Form from './component/Form'
// import HookForm from './component/HookForm/HookForm'
// import RefForm from './component/RefForm'
import ReusableForm from './component/ReusableForm/ReusableForm'
// import StateForm from './component/StateForm'

function App() {

  const submitSignupHandel = data => {
   console.log('Signup :', data);
   
  }
  const handelUpdateProfile = e => {
    e.preventDefault()
  }

  return (
    <>

      <h1>Submit form</h1>
      {/* <Form></Form> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTittle={'signUp Form'} submitHandel={submitSignupHandel}></ReusableForm>
      <ReusableForm formTittle={'Update Form'} submitHandel={handelUpdateProfile} submitButtonText='Update'></ReusableForm>
    </>
  )
}

export default App
