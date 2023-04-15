import React, { useRef, useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Items from '../../json/items.json';
import '../../css/carosuelProcesadores.css';

// Separando Items
const items = [];
Items.forEach(item => {
  if (item.tipo === 'intel' || item.tipo === 'ryzen') {
    items.push(item);
  }
})

export const CarouselProcesadores = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numItems, setItems] = useState(7);

  const options = {
    items: numItems
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width < 590) {
        setItems(3);
      } else if (width < 900) {
        setItems(4);
      } else if (width < 1090) {
        setItems(5);
      } else if (width < 1240) {
        setItems(6);
      } else {
        setItems(7);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  const carousel = useRef(null);
  const handlePrev = () => {
    carousel.current.prev();
  };

  const handleNext = () => {
    carousel.current.next();
  };


  return (
    <div id="carouselProcesadoresContainer">
      <h2>Los Mejores procesadores:</h2>
      <div id="carouselProcesadores">
        <OwlCarousel id="carousel" {...options} ref={carousel}>
          {
            items.map(item => {
              return (
                <div className="item" key={`${item.tipo}_${item.id}`}>
                  <img src={require(`../../img/productsImages/${item.imagen}.webp`)} alt={`${item.titulo}`} />
                  <h3>{item.precio}</h3>
                  <h4>{item.titulo}</h4>
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
    </div>
  )
}
