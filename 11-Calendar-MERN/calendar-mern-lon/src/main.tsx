import React from 'react'
import ReactDOM from 'react-dom/client'
import { Calendar } from './Calendar.tsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Calendar />
  </React.StrictMode>,
)
