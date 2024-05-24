import React from 'react'
// import Todo from './Components/Todo'
import Data from './Components/Data'
import Input from './Components/Input'
import Quiz from './Components/Quiz'

const App = () => {
  const style1  = {
    backgroundColor : 'bg-blue-500',
    border: 'rounded-xl',
    margin: 'm-2',
    padding: 'p-2'
  }
  const style2  = {
    backgroundColor : 'bg-slate-500',
    border: 'rounded-xl',
    margin: 'm-2',
    padding: 'p-2'
  }
  const style3  = {
    backgroundColor : 'bg-orange-500',
    border: 'rounded-xl',
    margin: 'm-2',
    padding: 'p-2'
  }
  return (
    <>
 {/* <Data  btnName='Login'  style={style1}  btnClick={()=>{
  console.log("Login")
 }} />
 <Data  btnName='SignUp'   style={style2} />
 <Data  btnName='Register'  style={style3} btnClick={()=>{
  console.log("Registered")
 }}  />
 <Input placeholder='Type Something' style={style1} value={(e:any)=>{
  console.log(e.target.value)
 }} /> */}

 <Quiz />

 </>
  )
}

export default App 