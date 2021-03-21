import React from 'react'

const Tarjeta = ({imagen,titulo,contenido}) => {
    return (
        <div className="tarjeta">
            <img src={imagen} alt="" className="tarjeta-imagen"/>

            <div className="tarjeta-contenido"> 

                <h3 className="tarjeta-titulo">{titulo}</h3>
                <p className="tarjeta-parrafo">{contenido}</p>
            </div>
        </div> 
    )
}

export default Tarjeta
