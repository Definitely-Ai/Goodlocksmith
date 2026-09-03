import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getCityDomainEntryPath } from './data/cityDomains.js'

// Select the city before BrowserRouter reads the URL, just like the city HTML entries.
const cityEntryPath = getCityDomainEntryPath(window.location)
if (cityEntryPath) {
  window.history.replaceState(window.history.state, '', cityEntryPath)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
