import React from 'react';

export const MenuItem = ({ producto, AgregarAlCarro }) => {
  return (
    <div className="card">
      <img src={producto.url} alt={`Imagen de ${producto.nombre}`} />
      <p>{producto.nombre}</p>
      <p>${producto.precio.toFixed(2)}</p>
      <button onClick={() => AgregarAlCarro(producto)} className="button">
        Agregar
      </button>
    </div>
  );
};
