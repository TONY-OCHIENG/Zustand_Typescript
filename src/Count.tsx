import React from 'react'
import { create } from 'zustand'
import { Button } from './@/components/ui/button'
import { useStore } from './store/store'



function Count() {
    const { count,increment,decrement } = useStore()
  return (
    <div className='flex justify-center items-center h-[100vh] flex-col'>
        <h1>{count <= 0 ? 0 : count}</h1>
        <div className='flex gap-10'>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={increment}>Increment</Button>
        </div>
    </div>
  )
}

export default Count
