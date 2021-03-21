import React from 'react'
import './Contacto.css'
const Contacto = () => {
    return (
        <div>
            <section className="formulario" id="contacto">
            <form action="">
                <h1 class="titulo__form">Contáctame</h1>
                <div class="grupo">
                    <input type="text" name="" id="" required></input><span class="barra"></span>
                    <label>Nombre</label>
                </div>
            

                <div class="grupo">
                    <input type="text" name="" id="" required></input><span class="barra"></span>
                    <label>Email</label>
                </div>
                <div class="grupo">
                    <input type="text" name="" id="" required min="0"></input><span class="barra"></span>
                    <label>Edad</label>
                </div>
                <div class="grupo">
                    <textarea name="" id="" rows="3" required></textarea><span class="barra"></span>
                    <label>Mensaje</label>
                </div>
                <button class="contactar__btn" type="submit">Contactar</button>
            </form>
            </section>
            
        </div>
    )
}

export default Contacto
