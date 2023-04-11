import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div id='testimonials' className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonios</p>
            <h1 className='primary-heading'>Comentarios</h1>
            <p className='primari-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Dolore cupiditate iusto eum totam. Voluptate consequatur.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Dolore cupiditate iusto eum totam. Voluptate consequatur. 
            </p>
            <div className='testimonials-stars-container'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>Jhon Doe</h2>
        </div>

    </div>
  )
}

export default Testimonials