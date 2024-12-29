import { useState } from "react"


const getMenu = async ()=>{
  const resp = await fetch('./bd/Menu.json');
  const data = await resp.json();

  return data
}

export const Menu = () => {

const [menu, setmenu] = useState([])

useEffect(() => {
  const datos = getMenu();
  setmenu(datos);
  
}, [])








  return (
      <div>




      </div>
  )
}
