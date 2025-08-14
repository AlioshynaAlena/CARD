import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { GlobalStyles } from './styles/GlobalStyles'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
)



