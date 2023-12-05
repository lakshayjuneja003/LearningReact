import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }
const anotherElement = (
  <a href='https://google.com' target='_blank'> Visit google </a>
)
// this is how react is expecting to give the synatax if we want to give the elements like this
const anotherUser = "chai or react"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:"_blank"},
  "click me to visit google",
  anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
