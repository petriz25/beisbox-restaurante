import React from 'react';
import Logo from '../Assets/beis.webp';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import Twitter from '../Assets/twitter.svg'
import Facebook from '../Assets/facebook.svg'
import Instagram from '../Assets/instagram.svg'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt="" />
            </div>
            <div className='footer-icons'>
                <a href="https://www.facebook.com/beisbox"><img className='icono-sociales' src={Facebook} alt="" /></a>
                <a href="https://www.instagram.com/beisbox/"><img className='icono-sociales' src={Instagram} alt="" /></a>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Calidad</span>
                <span>Ayuda</span>
                <span>Compartir</span>
                <span>Carreras</span>
                <span>Testimoniales</span>
                <span>Trabajo</span>
            </div>
            <div className='footer-section-columns'>
                <span>244-5333-7783</span>
                <span>hola@comida.com</span>
                <span>presiona@comida.com</span>
                <span>contactanos@comida.com</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terminos y Condiciones</span>
                <span>Politicas de Privacidad</span>
            </div>
        </div>
    </div>
  )
}

export default Footer