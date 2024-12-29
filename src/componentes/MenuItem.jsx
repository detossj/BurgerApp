

export const MenuItem = ({nombre,precio,url}) => {

    

  return (
    <div className="card">
        <img src={url} alt="Imagen de Hamburguesa referencia" />   
        <p>{nombre}</p>
        <p>{precio}</p>
        <button className="button">Agregar</button>
    </div>
  )
}
