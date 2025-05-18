import React from 'react'
// import Signup from "./Signup"
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";

function Signin ({setToggle, users}) {

  const {register, handleSubmit, reset } = useForm()

  const submitHandle =(data) =>{
    console.log(data)
    const isUser = users.find(
      (user) => data.email === user.email && data.password === user.password
    );
    if(isUser){
       toast.success("User Exists")
    }
      else{
        toast.error("User Not Found")
      }
      reset()
  }

  return (
    <div className='flex items-center h-screen p-10 '>
    <div className='bg-black  w-5xl rounded-md p-5 h-130 flex  '>
        <img className='w-1/2  overflow-hidden object-center rounded-md'
        src="https://img.freepik.com/premium-vector/desktop-mobile-illustration-login-page-data-analysis_559664-335.jpg?ga=GA1.1.1672170979.1747109636&semt=ais_hybrid&w=740" alt="" />
        
        
        <form onSubmit={handleSubmit(submitHandle)}
        className='w-1/2 flex flex-col  justify-center p-7 text-white'>
        <h1 className='text-center text-3xl  font-bold font-mono'>Sign In</h1>
        <h5 className='mb-10 text-center font-sans text-xl tracking-wider'>To Your Account</h5>
            

            <input {...register("email")}
            className='px-3 py-1 outline-0 border-b text-xl mb-13'
            type="email" placeholder='Email-ID' />

            <input {...register("password")}
            className='px-3 py-1 outline-0 border-b text-xl mb-10'
            type="password" placeholder='Password' />

            <button className='px-3 py-1 bg-blue-600 text-white rounded-full font-semibold w-30 ml-35 mb-5'>Sign In</button>

            <p>Dont't have an Account? 
                <button onClick={()=> setToggle(true)} 
                className='text-blue-800 pl-2 '>Signup</button>
            </p>
        </form>
      </div>
      </div>
  )
}

export default Signin
