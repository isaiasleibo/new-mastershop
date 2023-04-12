import React from 'react';
import '../../css/testimonial.css';

export const Testimonial = () => {
    return (
        <div id="testimonial">
            <div id="cardsSubContainer">
                <h2>Nuestros clientes dicen:</h2>

                <div id="cardsContainer">
                    <div className="cardContainer">
                        <div className="card">
                            <h3>10 de 10</h3>
                            <p>La entrega del producto fue exelente, pedí una Notebook XPG Xenia 15 que valía alrededor de $500.000, me llegó en óptimas condiciones y menos tiempo del esperado. Según el sitio, la entrega era de 5 días y me llegó en 3. Muy buena tienda, la recomiendo!!</p>
                            <div className="triangle"></div>
                        </div>

                        <div className="perfil">
                            <img src={require('../../img/claraGonzales.jpg')} alt="Calara Gonzales" />
                            <div className="perfilInfo">
                                <h4>Clara Gonzales</h4>
                                <p>Córdoba, Córdoba, Argentina</p>
                            </div>
                        </div>
                    </div>
                    <div className="cardContainer">
                        <div className="card">
                            <h3>Buenos precios</h3>
                            <p>Lo que más me fascina de esta tienda es que cada semana dan un descuento diferente para un producto al azar. La semana pasada estaban promocionando una notebook gamer con un 35% de descuento, obviamente aproveché y me llegó en tiempo y forma. Aprovechen.</p>
                            <div className="triangle"></div>
                        </div>

                        <div className="perfil">
                            <img src={require('../../img/juanCruzGarcia.jpg')} alt="Juan Cruz García" />
                            <div className="perfilInfo">
                                <h4>Juan cruz García</h4>
                                <p>Rosario, Santa Fé, Argentina</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
