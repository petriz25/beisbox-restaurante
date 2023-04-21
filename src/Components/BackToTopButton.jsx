import React from 'react';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () =>{
            if(window.scrollY > 100){
                setBackToTopButton(true);
            }else{
                setBackToTopButton(false);
            }
        });
    }, []);

    const scrollUp = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div className='boton-backtop'>
        {backToTopButton && (
            <button 
                style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "50px",
                borderRadius: "50%",
                justifyContent: "center", 
                backgroundColor: '#103595', 
                color: 'white'
                }} onClick={scrollUp}>^</button>
        )}
    </div>
  )
}

export default BackToTopButton