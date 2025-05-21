import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import DashBoard from './DashBoard.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CoinContextProvider>
      <DashBoard />
    </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>
)
