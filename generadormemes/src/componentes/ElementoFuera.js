
//Este componente se creo para ver si fuera del provider podia acceder a context, pero no se puede, debe de estar contenido dentro del provider para que funcione.


import { useUserContext } from "./UserProvider"
export default function ElementoFuera (){
  

    const ModificarEstado = (e) =>{

       // setUsername(e.target.value)
    }
  
  //  const {username, setUsername} = useUserContext();
    return(

        <div>

        <h1>A ver si puedo leer tambien elemento fuera  </h1>

        <input type="text" onChange={ModificarEstado}/>
        </div>

    )
}