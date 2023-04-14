import React from 'react'
import '../css/header.css';

export const Header = () => {
    return (
        <header>
            <div id="leftPart">
                <div id="logo">
                    <img src={require('../img/pageLogo.webp')} alt="MasterShop" />
                </div>
                <div id="left-options">
                    <div className="headerItem">
                        <p>Acerca de</p>
                    </div>
                    <div className="headerItem">
                        <p>Productos</p>
                    </div>
                    <div className="headerItem">
                        <p>Contacto</p>
                    </div>
                    <div className="headerItem">
                        <p>Más <i class="fa-solid fa-chevron-down"></i></p>
                    </div>
                </div>
            </div>

            <div id="rightPart">
                <div id="login-buttons">
                    <button id="login">
                        <p>Iniciar Sesion</p>
                    </button>
                    <button id="signUp">
                        <p>Registrarse</p>
                    </button>
                </div>
            </div>
        </header>
    )
}
