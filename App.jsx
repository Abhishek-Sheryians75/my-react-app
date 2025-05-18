import React, { useState } from 'react'
import Signup from "./components/Signup" 
import Signin from "./components/Signin" 
import Users from "./components/Users" 
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([])
  return (
    <>
      <div className='flex gap-10'>
        {toggle ?
        <Signup users={users} setUsers={setUsers} setToggle={setToggle} /> 
        
        :

          <Signin users={users} setToggle={setToggle} />
        }
         <Users users={users} setUsers={setUsers}  />
        
          
          

         </div>
        <ToastContainer position='top-center' autoClose={2000}   />
     
    </>
  )
}

export default App
