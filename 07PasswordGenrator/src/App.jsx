  import { useCallback, useEffect, useState,useRef } from 'react'

import './index.css'

function App() {
  const [ length , setLength ] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] =useState(false)
  const [password,setPasword] = useState("")
  // ref hook
  const passwordRef = useRef(null)

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  },[password])

 const passwordGenerator =  useCallback(()=>{
  let pass = ""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(numberAllowed) str+="0123456789"
  if(charAllowed) str+= "!@#$%^&*(){}`"
  for (let i = 1; i<=length ;i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPasword(pass)
  }
  ,[numberAllowed,charAllowed,length,setPasword])
    
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
   <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center mb-2 text-xl'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
       type="text"
       value={password}
       className='outline-none w-full py-1 px-2 '
       placeholder='password'
       readOnly
       ref={passwordRef}
       
       />
       <button
       onClick={copyToClipBoard}
        className='p-4 outline-none bg-blue-700 text-white shrink-0'
       >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1 '>
        <input 
        type="range"
        min={8}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
         />
         <label className='text-xl'>Length :{length}</label>
      </div>
      <div className='flex items-center gap-x-1 '>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
        />
        <label htmlFor="Numbers" className='text-xl'>Numbers</label>

      </div>
      <div className='flex items-center gap-x-1 '>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
        />
        <label htmlFor="Numbers" className='text-xl'>Characters</label>
        
      </div>
    </div>
   </div>
    </>
  )
}

export default App
