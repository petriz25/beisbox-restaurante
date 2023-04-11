import React from 'react';
import PickMeals from '../Assets/pick-meals-image.png';
import ChoseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Escoje tu comida',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus numquam, id rerum excepturi.',
        },
        {
            image: ChoseMeals,
            title: 'Elige con que frecuencia',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus numquam, id rerum excepturi.',
        },
        {
            image: DeliveryMeals,
            title: 'Entregas rapidas',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus numquam, id rerum excepturi.',
        },
    ];
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Trabajo</p>
            <h1 className='primary-heading'>Como Trabajamos</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsam ducimus consectetur nesciunt quas earum tempora, quae explicabo sunt eius dolorum qui voluptas sequi similique ut voluptatum quis aperiam fugiat unde?
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) =>(
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work