import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/theme'
import ThemeBtn from './components/ThemeButton'
import Card from './components/Card'
import Text from './components/Text'
function App() {
  const [themeMode , setThemeMode] = useState("light")
  // lighttheme mode
  const lightTheme = () =>{
    setThemeMode("light")
  } 
  // darktheme mode
  const darkTheme = () =>{
    setThemeMode("dark")
  }
  // actual theme in change using Js
  useEffect(()=>{
    // cleaning the html element
    document.querySelector("html").classList.remove("light","dark")
    //adding the cuurent mode as class
    document.querySelector('html').classList.add(themeMode)
  }
  ,[themeMode])

  return (
   
  <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-aujustify-end mb-4">
        <ThemeBtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
            <Card/>  
            <Text/>       
      </div>  
      </div>
  </div>
  </ThemeProvider>

  )
}

export default App
