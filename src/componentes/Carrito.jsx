export const Carrito = ({ contenido, className }) => {
  return (
    <>
      
      <div className={className}>
        <h2>Tu pedido</h2>
        {contenido.map((producto, index) => (
          <div className="order-item" key={index}>
            <img
              src={producto.url || 'https://via.placeholder.com/60'}
              alt={producto.nombre}
              className="order-item-image"
            />
            <div className="order-item-content">
              <h4 className="order-item-name">{producto.nombre}</h4>
              <p className="order-item-quantity">Cantidad: {producto.cantidad}</p>
              <p className="order-item-price">${producto.precio.toFixed(2)}</p>
              
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};
