import React from 'react'
import '../../css/hero.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div id="hero">
      <div id="hero-main">
        <h1>MasterShop</h1>
        <p>La mejor tienda de tecnología para comprar notebooks, procesadores o cualquier componente o accesorio para computadoras.</p>
        <Link to="/tienda">
          <button>
            <p>Ir a la tienda</p>
          </button>
        </Link>
      </div>

      <div id="mainImg">
        <div id='mainCircle'>
          <img src={require('../../img/pc.webp')} alt="PC Gamer" />
        </div>
      </div>

    </div>
  )
}
