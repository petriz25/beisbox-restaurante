import React from 'react';
import Navbar from './Navbar';
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';
import Carrusel from './SlideShows';

const Home = () => {
  return (
    <div id='home' className='home-container'>
      <Navbar />
      <Carrusel />
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground} />
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            Restaurante Sport Bar Familiar
          </h1>
          <p className='primary-text'>
            Caja de bateo, Billar, Jenga gigante, Deportes en vivo...
          </p>
          <button  className='secondary-button'>
            Reserva Aqui <FiArrowRight />
          </button>
        </div>
        <div className='home-image-container'>
          <img src={BannerImage} />
        </div>
      </div>
    </div>
  )
}

export default Home