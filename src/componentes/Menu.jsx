import { useState } from "react"




export const Menu = () => {

const [menu, setmenu] = useState([])

const getMenu = async ()=>{
  const resp = await fetch('./bd/Menu.json');
  const data = await resp.json();
  console.log(data)
  
}


getMenu()




  return (
      <div>




      </div>
  )
}
