import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-blue-600'>Hello</h1> */}
      <Card price="$1,00,000" address="Silcon Valley,America"/>
    </>
  )
}

export default App
