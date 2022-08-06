import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
// import { SimpleForm } from './02-useEfect/SimpleForm'
// import { HooksApp } from './HooksApp'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MultipleCustomHooks />
  </React.StrictMode>
)
