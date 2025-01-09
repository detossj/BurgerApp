import React, { useMemo } from 'react';
import { ItemCarrito } from './ItemCarrito';

export const Carrito = ({ EliminarDelCarro, contenido, className, Pagar }) => {
  // Usamos useMemo para calcular el total del carrito
  const total = useMemo(() => {
    return contenido.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  }, [contenido]); // Solo se recalcula si 'contenido' cambia

  return (
    <div className={className}>
      <h2>Tu pedido</h2>
      {contenido.map((producto) => (
        <ItemCarrito
          EliminarDelCarro={EliminarDelCarro}
          key={producto.id}
          producto={producto}
        />
      ))}
      <div>
        <h3>Total: ${total.toFixed(2)}</h3> {/* Mostrar el total */}
      </div>
      <button onClick={Pagar}>Pagar</button> {/* Llama a Pagar */}
    </div>
  );
};
