import React from 'react'
import '../css/header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div id="leftPart">
                <Link to="/">
                    <div id="logo">
                        <img src={require('../img/pageLogo.webp')} alt="MasterShop" />
                    </div>
                </Link>
                <div id="left-options">
                    <Link>
                        <div className="headerItem">
                            <p>Acerca de</p>
                        </div>
                    </Link>
                    <Link to="/tienda">
                        <div className="headerItem">
                            <p>Productos</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="headerItem">
                            <p>Contacto</p>
                        </div>
                    </Link>
                    <Link>
                        <div className="headerItem">
                            <p>Más <i className="fa-solid fa-chevron-down"></i></p>
                        </div>
                    </Link>
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
