import { ItemCarrito } from "./itemCarrito";
export const Carrito = ({ EliminarDelCarro,contenido, className }) => {
  return (
    <>
        <div className={className}>
          <h2>Tu pedido</h2>
            {contenido.map((producto) => (
            <ItemCarrito EliminarDelCarro={EliminarDelCarro}  key={producto.id} producto={producto}></ItemCarrito>
            ))}
            <button>Ver resumen del pedido</button>
      </div>
          

    </>
  );
};
