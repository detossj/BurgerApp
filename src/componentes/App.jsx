import React, { useState, useCallback } from 'react';
import { Header } from './Header';
import { Menu } from './Menu';
import { Carrito } from './Carrito';
import { Form } from './form';

const CarritoMemo = React.memo(Carrito);  // Optimización: Memo para Carrito
const MenuMemo = React.memo(Menu);  // Optimización: Memo para Menu

export const App = () => {
  const [carrito, setCarrito] = useState([]);
  const [pagar, setPagar] = useState(false); 

  // Usamos useCallback para memorizar las funciones y evitar re-creaciones innecesarias
  const AgregarAlCarro = useCallback((producto) => {
    const existeEnCarrito = carrito.find(item => item.id === producto.id);

    if (existeEnCarrito) {
      const nuevoCarrito = carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }, [carrito]);

  const EliminarDelCarro = useCallback((producto) => {
    const existeEnCarrito = carrito.find(item => item.id === producto.id);

    if (existeEnCarrito) {
      if (existeEnCarrito.cantidad > 1) {
        const nuevoCarrito = carrito.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
        setCarrito(nuevoCarrito);
      } else {
        const nuevoCarrito = carrito.filter(item => item.id !== producto.id);
        setCarrito(nuevoCarrito);
      }
    }
  }, [carrito]);

  const Pagar = useCallback(() => {
    setPagar(prevPagar => !prevPagar);
  }, []);

  return (
    <>
      <Header />
      {pagar ? (
        <div style={estilosResumen}>
          <Form carrito={carrito} />
          <button onClick={Pagar}>Cerrar</button>
        </div>
      ) : (
        <div className="container">
          <MenuMemo AgregarAlCarro={AgregarAlCarro} className="menu" />
          <CarritoMemo
            contenido={carrito}
            EliminarDelCarro={EliminarDelCarro}
            className="carrito"
            Pagar={Pagar}
          />
        </div>
      )}
    </>
  );
};

const estilosResumen = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};
