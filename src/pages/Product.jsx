import React from 'react';
import Items from '../json/items.json';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../css/product.css';

export const Product = () => {
  const productFound = Items.find(item => window.location.pathname.includes(`/tienda/${item.tipo}/_${item.id}`));
  if (!productFound) {
    console.error('No existe el producto.');
    return null;
  }

  let extraInfoI = 0;

  return (
    <>
      <Header />

      <main id="productContainer">
        <div id="item">
          <img src={require(`../img/productsImages/${productFound.imagen}.webp`)}></img>
          <div id="info">
            <h1>{productFound.titulo}</h1>
            <ul id="extraInfo">
              {
                productFound.extraInfo.map(info => {
                  extraInfoI++;
                  return (
                    <li key={`extraInfo_${extraInfoI}`}>
                      <span dangerouslySetInnerHTML={{ __html: `<b>${info.split(':')[0]}:</b>${info.split(':')[1]}` }}></span>
                    </li>
                  )
                })
              }
            </ul>
            <h2>{productFound.precio}</h2>
            <button>Añadir al carrito</button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
