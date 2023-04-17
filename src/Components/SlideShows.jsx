import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import img1 from '../Assets/promo1.webp';
import img2 from '../Assets/promo2.webp';
import img3 from '../Assets/promo3.webp';
import img4 from '../Assets/promo4.webp';
import img5 from '../Assets/promo5.webp';
import img6 from '../Assets/promo6.webp';
import img7 from '../Assets/promo7.webp';
import img8 from '../Assets/promo8.webp';
import img9 from '../Assets/promo9.webp';
import img10 from '../Assets/promo10.webp';
import { ReactComponent as FlechaIzquierda } from '../Assets/flecha-izquierda.svg';
import { ReactComponent as FlechaDerecha } from '../Assets/flecha-derecha.svg';


const SlideShows = () => {
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);

    const manejarMouseEnter = () => {
        clearInterval(intervaloSlideshow.current);
      };
      
    const manejarMouseLeave = () => {
        intervaloSlideshow.current = setInterval(siguiente, 9000);
      };

    const siguiente = () => {
        if(slideshow.current.children.length > 0){
            const primerElemento = slideshow.current.children[0];

            slideshow.current.style.transition = `300ms ease-out all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const transicion = () =>{
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }

            slideshow.current.addEventListener('transitionend', transicion);
        }
    }

    const anterior = () =>{
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
        
            slideshow.current.style.transition = 'none';

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            }, 30) 
        }
    }

    useEffect(() => {
        setInterval(() => {
            siguiente();
        }, 9000);

        // slideshow.current.addEventListener('mouseenter', () => {
        //     clearInterval(intervaloSlideshow.current);
        //     console.log('mouseenter');
        // });
        // slideshow.current.addEventListener('mouseleave', () => {
        //     intervaloSlideshow.current = setInterval(() => {
        //         siguiente();
        //         console.log('mouseleve');
        //     }, 5000);
        // });
    }, []);

  return (
    <ContenedorPrincipal>
        <ContenedorSlideshow ref={slideshow}>
            <Slide>
                <a href="#">
                    <img src={img1} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img2} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img3} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img4} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img5} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img6} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img7} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img8} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img9} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
            <Slide>
                <a href="#">
                    <img src={img10} alt="imagen promocion uno" />
                </a>
                {/* <TextoSlide>
                    <p>15% de descuento en cervezas</p>
                </TextoSlide> */}
            </Slide>
        </ContenedorSlideshow>
        <Controles>
            <Boton onClick={anterior}>
                <FlechaIzquierda />
            </Boton>
            <Boton derecho onClick={siguiente}>
                <FlechaDerecha />
            </Boton>
        </Controles>
    </ContenedorPrincipal>
  )
}

const ContenedorPrincipal = styled.div`
    overflow: hidden;
    position: relative;
`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 300px;
    gap: 10px;
    margin-top: 50px;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    min-height: 300px;
    position: relative;
    img{
    width: 100%;
    border-radius: 10px;
    vertical-align: top;
    }
`;

const TextoSlide = styled.div`
    background: rgba(0, 0, 0, .5);
    color: #fff;
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    border-radius: 10px;
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 115%;
    text-align: center;
    position: absolute;
    transition: .3s ease;
    &:hover{
        background: (0,0,0,.2);
        path{
            fill: #fff;
        }
    }

    path{
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0'}
`;
export default SlideShows