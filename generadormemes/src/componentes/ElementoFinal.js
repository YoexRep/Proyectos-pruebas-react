import { useUserContext } from "./UserProvider"
//Esto es un ejemplo para aprender a usar los context en react.

export default function ElementoFinal () {

    const {username, setUsername} = useUserContext();


    const ModificarEstado = (e) =>{

        setUsername(e.target.value)
    }

    return(


            <div>

            <h1>Este elemento esta afuera {username}</h1>

            <input type="text" onChange={ModificarEstado}/>
            </div>

       
    )

}