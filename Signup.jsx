import React from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

function Signup({setToggle, setUsers ,users}) {
  const {register, handleSubmit, reset} = useForm();

  const submitHandler =(data)=>{
    console.log(data)
    data.id = nanoid()
    setUsers([...users, data])
    reset()
    setToggle(false);
  }

  return (
    <div className='flex items-center h-screen p-10 '>
    <div className='bg-black  w-5xl rounded-md p-5 h-130 flex  '>
        <img className='w-1/2  overflow-hidden object-center rounded-md'
        src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?ga=GA1.1.1672170979.1747109636&semt=ais_hybrid&w=740" alt="" />
        
        <form onSubmit={handleSubmit(submitHandler)}
        className='w-1/2 flex flex-col  justify-center p-7 text-white'>
        <h1 className='text-center text-3xl  font-bold font-mono'>Join Us</h1>
        <h5 className='mb-10 text-center font-sans text-xl tracking-wider'>Create Free Account</h5>

            <input {...register("name")}
            className='px-3 py-1 outline-0 border-b text-xl mb-10'
            type="text" placeholder='Full Name' />

            <input {...register("email")}
            className='px-3 py-1 outline-0 border-b text-xl mb-10'
            type="email" placeholder='Email-ID' />

            <input {...register("password")}
            className='px-3 py-1 outline-0 border-b text-xl mb-10'
            type="password" placeholder='Password' />

            <button className='px-3 py-1 bg-blue-600 text-white rounded-full font-semibold w-30 ml-35 mb-5'>Sign Up</button>

            <p>Already have an Account? 
                <button onClick={()=> setToggle(false)}
                 className='text-blue-800 pl-2 '>Signin</button>
            </p>
        </form>
      </div>
      </div>
  )
}

export default Signup
