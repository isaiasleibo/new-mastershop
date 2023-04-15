import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../css/decorativeCarousel.css';

export const DecorativeCarousel = () => {
    const options = {
        items: 1,
        autoplay: true,
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        autoplayTimeout: 2000
    }

    return (
        <div id="decorativeCarousel">
            <OwlCarousel id="carousel" {...options}>
                <div className="carouselImg">
                    <img src={require('../../img/DecorativeCarousel/intel1.webp')} alt="Intel_1" />
                </div>
                <div className="carouselImg">
                    <img src={require('../../img/DecorativeCarousel/ryzen1.webp')} alt="Ryzen_1" />
                </div>
                <div className="carouselImg">
                    <img src={require('../../img/DecorativeCarousel/intel2.webp')} alt="Intel_2" />
                </div>
                <div className="carouselImg">
                    <img src={require('../../img/DecorativeCarousel/ryzen2.webp')} alt="Ryzen_2" />
                </div>
                <div className="carouselImg">
                    <img src={require('../../img/DecorativeCarousel/intel3.webp')} alt="Intel_3" />
                </div>
                <div className="carouselImg">
                    <img src={require('../../img/DecorativeCarousel/ryzen3.webp')} alt="Ryzen_3" />
                </div>
            </OwlCarousel>
        </div>
    )
}
