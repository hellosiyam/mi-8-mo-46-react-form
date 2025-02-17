
// import { data } from 'react-router-dom'
import { data } from 'react-router-dom'
import './App.css'
// import Form from './component/Form'
// import HookForm from './component/HookForm/HookForm'
// import RefForm from './component/RefForm'
import ReusableForm from './component/ReusableForm/ReusableForm'
import Grandpa from './component/Grandpa/Grandpa';
// import StateForm from './component/StateForm'

function App() {

  const submitSignupHandel = data => {
    console.log('Submit Form :', data);
    
  }
  const submitUpdateHandel = data => {
    console.log('Submit Form :', data);
  }

  return (
    <>

      {/* <h1>Submit form</h1> */}
      {/* <Form></Form> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTittle={'Signup Form'} submitHandel={submitSignupHandel} ></ReusableForm> */}
      {/* <ReusableForm formTittle={'Update Form'} submitHandel={submitUpdateHandel} submitBtnText='Update Form'></ReusableForm> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
