import React, { useState } from 'react';
import { Header } from './Header';
import { Menu } from './Menu';
import { Carrito } from './Carrito';

export const App = () => {
  const [carrito, setCarrito] = useState([]);


  const AgregarAlCarro = (producto) => {
    const existeEnCarrito = carrito.find(item => item.id === producto.id);
  
    if (existeEnCarrito) {
      // Si el producto ya está en el carrito, solo actualiza la cantidad
      const nuevoCarrito = carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad inicial de 1
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
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
