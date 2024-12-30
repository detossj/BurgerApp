export const MenuItem = ({ burguer, AgregarAlCarro }) => {
  return (
    <div className="card">
      <img src={burguer.url} alt={`Imagen de ${burguer.nombre}`} />
      <p>{burguer.nombre}</p>
      <p>${burguer.precio.toFixed(2)}</p>
      <button onClick={AgregarAlCarro} className="button">
        Agregar
      </button>
    </div>
  );
};
