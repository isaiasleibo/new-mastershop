import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { CarouselProcesadores } from '../components/Shop/CarouselProcesadores';
import { DecorativeCarousel } from '../components/Shop/DecorativeCarousel';
import { CarouselNotebooks } from '../components/Shop/CarouselNotebooks';

export const Shop = () => {
  return (
    <>
      <Header />
        <DecorativeCarousel />
        <CarouselProcesadores />
        <CarouselNotebooks />
      <Footer />
    </>
  )
}
