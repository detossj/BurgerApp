import React, { useState } from 'react';
import { Header } from './Header';
import { Menu } from './Menu';
import { Carrito } from './Carrito';

export const App = () => {
  const [carrito, setCarrito] = useState([]);

  const AgregarAlCarro = (producto) => {
    setCarrito([...carrito, producto]); // Añade el producto al carrito
  };

  return (
    <>
      <Header />
      <div className="container">
        <Menu AgregarAlCarro={AgregarAlCarro} className="menu" />
        <Carrito contenido={carrito} className="carrito" />
      </div>
    </>
  );
};
