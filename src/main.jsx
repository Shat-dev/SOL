import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 🔄 Fixed from 'react-router' to 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/SOL"> {/* ✅ Set base path for GitHub Pages */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
