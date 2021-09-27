import ContenedorMedio from "./ContenedorMedio";
import UserProvider from "./UserProvider";


//Esto es un ejemplo para aprender a usar los context en react.
export default function ContenedorPrincipal () {

return(

    <div>
    
    <UserProvider>

   
    <h1>Esto es un ejemplo de context para pasar informacion de un estado a otro</h1>

        <ContenedorMedio>
            
        </ContenedorMedio>
    </UserProvider>
    </div>

)

}