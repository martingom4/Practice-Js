import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



const root = createRoot(document.getElementById('root'))

const OtroButton = ({text}) =>{
  return <button>{text}</button>
}

root.render(
  <React.Fragment>
    <h1>Hello World</h1>
    <OtroButton text="Click me"/>

  </React.Fragment>
)

