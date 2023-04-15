import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Items from '../../json/items.json';
import '../../css/carosuelProcesadores.css';
import { useRef } from 'react';

// Separando Items
const items = [];
Items.forEach(item => {
  if (item.tipo === 'intel' || item.tipo === 'ryzen') {
    items.push(item);
  }
})

export const CarouselProcesadores = () => {
  const options = {
    items: 7
  };

  const carousel = useRef(null);
  const handlePrev = () => {
    carousel.current.prev();
  };

  const handleNext = () => {
    carousel.current.next();
  };


  return (
    <div id="carouselProcesadores">
      <OwlCarousel id="carousel" {...options} ref={carousel}>
        {
          items.map(item => {
            return (
              <div className="item" key={`${item.tipo}_${item.id}`}>
                <img src={require(`../../img/productsImages/${item.imagen}.webp`)} alt={`${item.titulo}`} />
                <h2>{item.precio}</h2>
                <h3>{item.titulo}</h3>
                <button>Ver Item</button>
              </div>
            )
          })
        }
      </OwlCarousel>

      <button onClick={() => handlePrev()} className='owl-prev'>
        <div>
          <p><i className='fa-solid fa-angle-left fa-2xl'></i></p>
        </div>
      </button>
      <button onClick={() => handleNext()} className='owl-next'>
        <div>
          <i className='fa-solid fa-angle-right fa-2xl'></i>
        </div>
      </button>
    </div>
  )
}
