import React from 'react'
import {toast} from 'react-toastify'

function Users({users, setUsers}) {

  const deleteHandler = (id) => {
    const filterUsers =  users.filter((user) => user.id != id)
    setUsers(filterUsers)
    toast.success("User Deleted Successfully")
  }
    const userList = users.map((user)=>{
        return(
            <div className='bg-black text-white w-80  flex p-2 rounded-md mb-2 justify-between'>
                <p >
                    <span className='block'>{user.name}</span>
                    <span>{user.email}</span>
                  
                </p>
                   <button className='px-4  text-white bg-blue-500 rounded-full mb-2 ml-10 text-xs'
                onClick={()=> deleteHandler(user.id)}> delete  </button>
               
            </div>
        );
    })
  return (
    <div className='p-5'>
      <h1 className='text-2xl font-bold mb-4 underline'>Registered Users: </h1>

      {users.length > 0 ? userList : "User Not Found"}
    </div>
  )
}

export default Users
