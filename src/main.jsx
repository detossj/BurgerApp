import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './componentes/App'
import './estilos/Header.css'
import './estilos/button.css'
import './estilos/index.css'
import './estilos/menuItem.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    
  </StrictMode>,
)
