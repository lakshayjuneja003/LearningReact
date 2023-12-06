import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addValue = ()=>{
    console.log("CLICKED ",counter);
    setCounter(counter+1)
  }

  return (
    <>
      <div>
        <h1>Hello Day-4</h1>
        <h2>Counter value :{counter}</h2>

        <button
         onClick={addValue}
         >Add value {counter}</button>
        <br />
        <button>Remove value {counter}</button>
        <p>{counter}</p>
      </div>
    </>
  )
}

export default App
