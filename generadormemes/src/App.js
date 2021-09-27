
import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';
import ContenedorPrincipal from './componentes/ContenedorPrincipal';
import ElementoFuera from './componentes/ElementoFuera';






function App() {

  const [linea1, setLinea1] = useState('')
  const [linea2, setLinea2] = useState('')
  const [imagen, setImagen] = useState('')
 

  const onChangeLinea1 = (evento) =>{
    //Los eventos son los objetos en los que se estan trabajando el onchange, ejemplo el evento recibido del onchage input, es el propio input

    setLinea1(evento.target.value)

  }

  const onChangeLinea2 = (evento) =>{
    

    setLinea2(evento.target.value)

  }

  const onChangeImagen = (evento) =>{
 

    setImagen(evento.target.value)

  }

  const onclickExportar = (evento) =>{
        alert("Exportar")

        
        html2canvas(document.querySelector("#meme")).then(canvas => {


            var img = canvas.toDataURL("image/png")
            var link = document.createElement('a')
            link.download = 'meme.png'

            link.href = img;

            link.click();


        })
   
     }

  


  return (

    <div>


         <h1>Generador de memes</h1>

         <input onChange={ onChangeLinea1} placeholder="Aqui va la linea 1" type="text"></input> 
         
         <br/>
          <input onChange={ onChangeLinea2} placeholder="Aqui va la linea 2" type="text"></input>
          <br/>
          <select onChange={onChangeImagen}>

            <option value="\imagenes\jerry.jpg">jerry</option>
            <option value="\imagenes\quedice.jpg">quedice</option>
            <option value="\imagenes\smart.jpg">smart</option>
          </select>
          <button onClick={onclickExportar} >Exportar</button>


          <div className="meme" id="meme">
          <span>{linea1}</span> <br/>
          <span>{linea2}</span>
          <img src={imagen}></img>
          </div>
          
          <ContenedorPrincipal></ContenedorPrincipal>

       
          <ElementoFuera></ElementoFuera>

    </div>
      
  )
}

export default App;
