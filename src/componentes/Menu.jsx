import { useState , useEffect } from "react"
import { MenuItem } from "./MenuItem";
import { Nav } from "./Nav";

const getMenu = async ()=>{
  try {
    const resp = await fetch('https://detossj.github.io/Json-BurgerApp/Menu.json');
    const data = await resp.json();
    
    return data
  } catch (error) {
    console.log(error)
  }

}

export const Menu = ({ AgregarAlCarro, className }) => {
  const [allMenuData, setAllMenuData] = useState({}); // Para almacenar todos los datos
  const [menu, setMenu] = useState([]); // Para almacenar los datos filtrados
  const [currentButton, setCurrentButton] = useState(1); // Botón seleccionado

  const OnChangeNav = (numero) => {
    setCurrentButton(numero);
  };

  useEffect(() => {
    // Cargar los datos solo una vez al montar el componente
    const fetchMenuData = async () => {
      const datos = await getMenu();
      setAllMenuData(datos); // Guardar todos los datos en el estado
      setMenu(datos.hamburguesas || []); // Inicializar con hamburguesas
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    // Actualizar el menú mostrado según el botón seleccionado
    if (currentButton === 1) {
      setMenu(allMenuData.hamburguesas || []);
    } else if (currentButton === 2) {
      setMenu(allMenuData.bebidas || []);
    } else if (currentButton === 3) {
      setMenu(allMenuData.agregados || []);
    }
  }, [currentButton, allMenuData]);




  return (
      <>
        
        <div className={className}>
        <Nav OnChangeNav={OnChangeNav}></Nav>
          <div className="hamburguesas-container">
            {
              menu.map((producto)=>{
                return <MenuItem AgregarAlCarro={() => AgregarAlCarro(producto)} key={producto.id} producto={producto}  ></MenuItem>
              })
            }
          </div>
        </div>
      </>
  )
}
