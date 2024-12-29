import React from 'react'
import { Header } from './Header'
import { Menu } from './Menu'
import {Carrito} from './Carrito'



export const App = () => {

  return (
    <>
      <Header></Header>
      <div className="container">
        <Menu className="menu" />
        <Carrito className="carrito" />
      </div>
    </>
  )
}
