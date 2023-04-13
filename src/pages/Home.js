import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Hero } from '../components/Home/Hero';
import { Testimonial } from '../components/Home/Testimonial';
import { Offer } from '../components/Home/Offer';

export const Home = () => {
  return (
    <>
      <Header />

        <Hero />
        <Testimonial />
        <Offer />
        
      <Footer />
    </>

  )
}
