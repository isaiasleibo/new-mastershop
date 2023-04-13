import React from 'react';
import '../css/footer.css';

export const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 MasterShop - isaiasleibo</p>
      <img src={require('../img/pageLogo.png')} alt="MasterShop" />
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
