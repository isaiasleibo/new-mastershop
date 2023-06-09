import React from 'react';
import '../css/footer.css';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>&copy; MasterShop {year}</p>
      <a href="/">
        <img src={require('../img/pageLogo.webp')} alt="MasterShop" />
      </a>
      <div id="socialMedia">
        <div className="mediaContainer">
          <p><i className="fa-brands fa-instagram"></i></p>
        </div>
        <div className="mediaContainer">
          <p><i className="fa-brands fa-twitter"></i></p>
        </div>
        <div className="mediaContainer">
          <p><i className="fa-brands fa-youtube"></i></p>
        </div>
        <div className="mediaContainer">
          <p><i className="fa-brands fa-facebook"></i></p>
        </div>
      </div>
    </footer>
  )
}
