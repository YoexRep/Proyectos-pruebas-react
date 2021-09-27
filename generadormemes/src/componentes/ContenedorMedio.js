import ElementoFinal from "./ElementoFinal";
import { useUserContext } from "./UserProvider"

//Esto es un ejemplo para aprender a usar los context en react.
  export default function ContenedorMedio () {

    //Este contexto lo estoy obteniendo el provider, y puedo acceder a las variables gloables uusername y userApellido
    const {username, setUsername} = useUserContext();
    const {userApellido, setApellido} = useUserContext();

return (

        <div>

        <h1>Esto viene del estado global{username} y el apellido {userApellido}</h1>

                    <ElementoFinal>


                    </ElementoFinal>

        </div>

)


}