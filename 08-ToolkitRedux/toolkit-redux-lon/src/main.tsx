import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
// import App from './App'
import { PokemonApp } from './PokemonApp';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </React.StrictMode>,
)
