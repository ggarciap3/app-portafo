import React, {useState, useEffect} from 'react'
import './servicio.css'
// import servicio1 from '../../images/servicio1.svg'
// import servicio2 from '../../images/servicio2.svg'
// import servicio3 from '../../images/servicio3.svg'
import Tarjeta from './Tarjeta'
import {db} from '../../firebase'

function Servicio() {
    // const [servicios, /*setServicios*/] = useState([

    //     {
    //         imagen: servicio1,
    //         titulo: "Análisis y Diseño",
    //         contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos dolorem vel vero quam? Qui, neque! Corrupti voluptatem at laborum"
    //     },
    //     {
    //         imagen: servicio2,
    //         titulo: "Desarrollo Web",
    //         contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos dolorem vel vero quam? Qui, neque! Corrupti voluptatem at laborum"
    //     },
    //     {
    //         imagen: servicio3,
    //         titulo: "Cursos Recientes",
    //         contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos dolorem vel vero quam? Qui, neque! Corrupti voluptatem at laborum"
    //     }])


        const [servicios, setServicios] = useState([])

        useEffect(()=> {
            db.collection('servicios').onSnapshot(datos => {
                const servis =[]
                datos.forEach(registro => {
                    console.log(registro.id, registro.data());
                    servis.push({...registro.data(),id:registro.id});
                });
                console.log(servis)
                setServicios(servis)
                })
            },[setServicios]);

        return (
            <div className="servicio" id="servicios">
                    <h2 className="servicio-titulo">Mis Servicios</h2>
                    <div className="servicio-cajas">
                        {servicios.map(servicio => 
                            <Tarjeta
                                imagen={`images/${servicio.imagen}`}
                                titulo={servicio.titulo}
                                contenido={servicio.contenido}
                            />
                        )}
                    </div>
                
            </div>
        )
}
 
export default Servicio
