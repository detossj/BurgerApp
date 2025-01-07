import React, { useState } from 'react';
import { Header } from './componentes/Header';
import { Menu } from './componentes/Menu';
import { Carrito } from './componentes/Carrito';

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
  const EliminarDelCarro = (producto) => {
    const existeEnCarrito = carrito.find(item => item.id === producto.id);
  
    if (existeEnCarrito) {
      if (existeEnCarrito.cantidad > 1) {
        // Si la cantidad es mayor a 1, restar 1
        const nuevoCarrito = carrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
        setCarrito(nuevoCarrito);
      } else {
        // Si la cantidad es 1, eliminar el producto del carrito
        const nuevoCarrito = carrito.filter(item => item.id !== producto.id);
        setCarrito(nuevoCarrito);
      }
    }
  };
  
  
 
  return (
    <>
      <Header />
      <div className="container">
        <Menu AgregarAlCarro={AgregarAlCarro} className="menu" />
        <Carrito contenido={carrito} EliminarDelCarro={EliminarDelCarro} className="carrito" />
      </div>
    </>
  );
};
