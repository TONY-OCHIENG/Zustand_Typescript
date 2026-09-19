import React from 'react'
import { Button } from './@/components/ui/button'
import { create } from 'zustand'

const useStore = create<{
  count: number;
  increment: () => void;
  decrement: () => void;
}>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1}))
}))

function App() {
  const { increment, decrement, count} = useStore()
  return (
    <div className='h-[100vh]'>
          <Button onClick={decrement}>Minus</Button>
          {count}
          <Button onClick={increment}>Add</Button>  
    </div>
  )
}

export default App
