import React from 'react';
import '../../css/offer.css';

export const Offer = () => {
  return (
    <div id="offerContainer">
      <div id="offer">
        <div id="offer-text">
          <h3>Ryzen 9 7950X</h3>
          <h2>40% OFF</h2>
        </div>
        <img src={require('../../img/offerProduct.png')} alt="Ryzen 9 7950X" />
      </div>
    </div>
  )
}
