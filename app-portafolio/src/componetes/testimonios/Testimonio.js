import React from 'react'
import './Testimonio.css'
import Testimonio1 from '../../images/man-testimony.jpg'
import Testimonio2 from '../../images/woman-testimony.jpg'
import Testimonio3 from '../../images/man-testimony1.jpg'
import Testimonio4 from '../../images/woman-testimony2.jpg'

const Testimonio = () => {
    return (
        <div className="testimonioC"> 
            <section className="testimonio container-t" id="testimonio">
                <h1 class="subtitle">Testimonios</h1>
                <div class="testimony__grid">
                    <article class="testimony__item">
                        <div class="testimony__person">
                            <img src={Testimonio1} alt="Imagen de un hombre" class="testimony__img"></img>
                            <div class="testimony__texts">
                                <h3 class="testimony__name">Isaac Viejo</h3>
                                <p class="testimony__verification">Empresario</p>
                            </div>
                        </div>
                        <p class="testimony__review">Say goodbye to pay per user and limited channels. JazzHR offers unlimited users and jobs right out of the box without any added fees or costs.</p>
                    </article>

                    <article class="testimony__item">
                        <div class="testimony__person">
                            <img src={Testimonio4} alt="Imagen de una mujer" class="testimony__img"></img>
                            <div class="testimony__texts">
                                <h3 class="testimony__name">Nathaly Lainez</h3>
                                <p class="testimony__verification">Contadora</p>
                            </div>
                        </div>
                        <p class="testimony__review">Our software is built on the principle that every team's process is unique. JazzHR gives you the power to create a customized solution tailored for your specific hiring needs.</p>
                    </article>

                    <article class="testimony__item">
                        <div class="testimony__person">
                            <img src={Testimonio2} alt="Imagen de una mujer" class="testimony__img"></img>
                            <div class="testimony__texts">
                                <h3 class="testimony__name">Blanka Valverde</h3>
                                <p class="testimony__verification">Docente</p>
                            </div>
                        </div>
                        <p class="testimony__review">Finding the right talent can be challenging. Our platform is ready to use upon sign up and lets you focus on the human side of recruiting.</p>
                    </article>

                    <article class="testimony__item">
                        <div class="testimony__person">
                            <img src={Testimonio3} alt="Imagen de un hombre" class="testimony__img"></img>
                            <div class="testimony__texts">
                                <h3 class="testimony__name">Moises Merelo</h3>
                                <p class="testimony__verification">Doctor</p>
                            </div>
                        </div>
                        <p class="testimony__review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eos
                            dolorem vel vero quam? Qui, neque! Corrupti voluptatem at laborum.</p>
                    </article>

                </div>
            </section>
        </div>
    )
}

export default Testimonio
