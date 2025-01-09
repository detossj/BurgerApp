import React from 'react';

export const ItemCarrito = ({ producto, EliminarDelCarro }) => {
  return (
    <div className="order-item">
      <img
        src={producto.url || 'https://via.placeholder.com/60'}
        alt={producto.nombre}
        className="order-item-image"
      />
      <div className="order-item-content">
        <h4 className="order-item-name">{producto.nombre}</h4>
        <p className="order-item-quantity">Cantidad: {producto.cantidad}</p>
        <p className="order-item-price">${producto.precio.toFixed(2)}</p>
        <button onClick={() => EliminarDelCarro(producto)}>Eliminar</button>
      </div>
    </div>
  );
};
