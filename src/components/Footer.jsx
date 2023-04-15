import React from 'react';
import '../css/footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>&copy; MasterShop {year}</p>
      <Link to="/">
        <img src={require('../img/pageLogo.webp')} alt="MasterShop" />
      </Link>
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
