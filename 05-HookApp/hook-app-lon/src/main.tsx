import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook'
// import { SimpleForm } from './02-useEfect/SimpleForm'
// import { HooksApp } from './HooksApp'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { CallBackHook } from './06-memorize/CallBackHook'
// import { MemoHook } from './06-memorize/MemoHook'
// import { Memorize } from './06-memorize/Memorize'
import { Padre } from './07-tarea-memo/Padre'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
  <Padre />
  //</React.StrictMode> 
)
