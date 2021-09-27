
//Este es el provider que se debe de crear para compartir los estados.

import React from 'react'

const UserContext = React.createContext();

export default function UserProvider ({...props}) {

    
//Aqui se definen tantos estados como necesite compartir
    const [username, setUsername] = React.useState('yoex')
    const [userApellido, setApellido] = React.useState('torres')


    //se pasan las misma variables y metodos creadas 
    const value = {
        username,

        setUsername,

        userApellido,

        setApellido
    }


    //Se retornan poraqui

    return <UserContext.Provider{...props} value = {value}/>

}

export  function useUserContext (){
    return React.useContext(UserContext)
}