import React from 'react'
import { useStore } from './store/userStore'

function Form() {
    const {username, email, setemail,setusername} = useStore()
    console.log(username,email)
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col'>
        <form action="" className='p-2 max-w-md bg-gray-100 rounded-md'>
        <label htmlFor="">username</label>
        <input type="text"  value={username} onChange={(event) => setusername(event.target.value)} className='w-full p-2 border rounded-md mb-2'/>
        <label htmlFor="">email</label>
        <input type="email" value={email} onChange={(event) => setemail(event.target.value)} className='w-full p-2 border rounded-md'/>
        </form>      
    </div>
  )
}

export default Form
