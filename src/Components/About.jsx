import React from 'react';
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div id='about' className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage}/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>Conocer más</p>
            <h1 className='primary-heading'>
                El lugar donde se reune el entretenimiento y la comida
            </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, molestias! Consequatur placeat molestias dolor eos quia voluptas consequuntur id laborum eum mollitia molestiae aperiam libero magni nulla quo, voluptatem repellendus.
            </p>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, molestias! Consequatur placeat molestias dolor eos quia voluptas consequuntur id laborum eum mollitia molestiae aperiam libero magni nulla quo, voluptatem repellendus.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Ver más</button>
                <button className='watch-video-button'>
                    {' '}
                    <BsFillPlayCircleFill />Ver Video
                </button>
            </div>
        </div>

    </div>
  )
}

export default About