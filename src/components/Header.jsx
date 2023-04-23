import React from 'react'
import '../css/header.css';

export const Header = () => {
    return (
        <header>
            <div id="leftPart">
                <a href="/">
                    <div id="logo">
                        <img src={require('../img/pageLogo.webp')} alt="MasterShop" />
                    </div>
                </a>
                <div id="left-options">
                    <a href={window.location.href}>
                        <div className="headerItem">
                            <p>Acerca de</p>
                        </div>
                    </a>
                    <a href="/tienda">
                        <div className="headerItem">
                            <p>Productos</p>
                        </div>
                    </a>
                    <a href={window.location.href}>
                        <div className="headerItem">
                            <p>Contacto</p>
                        </div>
                    </a>
                    <a href={window.location.href}>
                        <div className="headerItem">
                            <p>Más <i className="fa-solid fa-chevron-down"></i></p>
                        </div>
                    </a>
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
