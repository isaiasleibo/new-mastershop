import React, { useRef, useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Items from '../../json/items.json';
import '../../css/carouselNotebooks.css';

const items = [];
Items.forEach(item => {
  if (item.tipo === 'notebook') {
    items.push(item);
  }
})

export const CarouselNotebooks = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [numItems, setItems] = useState(3);

  const options = {
    items: numItems
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width <= 1240) {
        setItems(2);
      } else {
        setItems(3);
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
    <div id="carouselNotebooksContainer">
      <h2>Elige tu notebook ideal:</h2>
      <div id="carosuelNotebooks">
        <OwlCarousel id="carousel" ref={carousel} {...options}>
          {
            items.map(item => {
              return (
                <div className="item" key={`${item.tipo}_${item.id}`}>
                  <img src={require(`../../img/productsImages/${item.imagen}.webp`)} alt={item.titulo} />
                  <h3>{item.precio}</h3>
                  <h4>{item.titulo}</h4>
                  <a href={`/tienda/${item.tipo}/_${item.id}`} style={{textDecoration:'none'}}>
                    <button>Ver Item</button>
                  </a>
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
