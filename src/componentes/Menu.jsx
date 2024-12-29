import { useState , useEffect } from "react"
import { MenuItem } from "./MenuItem";

const getMenu = async ()=>{
  try {
    const resp = await fetch('./bd/Menu.json');
    const data = await resp.json();
    
    return data
  } catch (error) {
    console.log(error)
  }

}

export const Menu = () => {

const [menu, setmenu] = useState([])



useEffect(() => {
  // Función asíncrona dentro de useEffect para esperar los datos
  const fetchMenuData = async () => {
    const datos = await getMenu(); // Espera a que se resuelvan los datos
    setmenu(datos.hamburguesas); // Establece el estado con los datos de hamburguesas
  };

  fetchMenuData(); // Llama a la función que obtiene los datos

}, []); // Se ejecuta una sola vez al montar el componente


console.log(menu)


  return (
      <div>
        {
          menu.map((burguer)=>{
            return <MenuItem key={burguer.id} nombre={burguer.nombre} precio={burguer.precio } ></MenuItem>
          })
        }
      </div>
  )
}
