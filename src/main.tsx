import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MoviesContextProvider } from './Contexts/MovieContexts'
import { GlobalStyle } from './GlobalStyles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <MoviesContextProvider>
      <App />
    </MoviesContextProvider>
  </React.StrictMode>
)
