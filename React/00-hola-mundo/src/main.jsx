import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



const root = createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <h1>Hello World</h1>
    <button>Hello Button</button>
    <button>Hello Button</button>
  </React.Fragment>
)

