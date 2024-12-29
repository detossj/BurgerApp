import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './componentes/App'
import './estilos/Header.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
