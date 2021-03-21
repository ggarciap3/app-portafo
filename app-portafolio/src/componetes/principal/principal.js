import React from 'react'
import Portada from '../portada/Portada'
import Acerca from '../Acerca/acerca'
import Servicio from '../servicios/servicio'
import Testimonio  from "../testimonios/Testimonio";
import Contacto from "../contacto/Contacto"
import {Portafolio}  from "../portafolio/Portafolio";


const Principal = () => {
    return (
        <div>
           <Portada/>
           <Acerca/>
           <Servicio/>
           <Portafolio/> 
           <Testimonio/>
           <Contacto/>
           
        </div>
    )
}

export default Principal

