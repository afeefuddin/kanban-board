import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './Context/ThemeContext.js'
import ThemeContextProvider from './Context/ThemeContextProvider.jsx'
import DisplayContextProvider from './Context/DisplayContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider >
      <DisplayContextProvider >
      <App />
      </DisplayContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
