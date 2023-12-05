import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chai from './Chai'

function App() {
  const username = 'chai or code'
  return (
    <>
     <h1>Hello Everyone | Day-2 ({username})  
     {/*evaluated expression  called final output */}
      </h1>
     <Chai/>
    </>
  )
}

export default App
