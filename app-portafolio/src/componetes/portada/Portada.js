import React, {useState} from 'react'
import './Portada.css'
import Foto2 from '../../images/Aron2.jpg'
import Foto1 from '../../images/portada.png'

const Portada = () => {
    const [foto, setFoto]= useState(Foto1);
    const [bandera, setBandera]= useState(true);
    
    const cambiarFoto = () =>{
        if (bandera){
            setFoto(Foto2)
            setBandera(false)
        }
        else{
            setFoto(Foto1)
            setBandera(true)
        } 
        
    }

    return (
        <div className="container">
            <div class="textos">
                <h1>Gabriel Garcia<span>&#160;</span></h1>
                <h2>Estudiante </h2>
                <a href="#contacto">Contacto</a>
            </div>
            <img 
                onClick={() => cambiarFoto()} /*ojo que arriba puse el #contacto y solo estama*/ 
                src={foto} alt= ""           
            />
        </div>
    )
}

export default Portada
