import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='contact-page-wrapper'>
        <h1 className='primary-heading'>Tienes preguntas?</h1>
        <h1 className='primary-heading'>Dejanos ayudarte</h1>
        <div className='contact-form-container'>
            <input type="text" placeholder='tuemail@gmail.com' />
            <button className='secondary-button'>Enviar</button>
        </div>
    </div>
  )
}

export default Contact