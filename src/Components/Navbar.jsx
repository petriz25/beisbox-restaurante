import React, { useState, Link } from 'react';
import Logo from '../Assets/beis.webp';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import MenuCel from './MenuHamburguesa';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import IfonIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  // const [navbar, setNavBar] = useState(false);
  const menuOptions =[
    {
      text: 'Inicio',
      icon: <HomeIcon />,
      href: '#home'
    },
    {
      text: 'Nosotros',
      icon: <IfonIcon />,
      href: '#about'
    },
    {
      text: 'Comentarios',
      icon: <CommentRoundedIcon />,
      href: '#testimonials'
    },
    {
      text: 'Contactanos',
      icon: <PhoneRoundedIcon />,
      href: '#contact'
    },
    {
      text: 'Carrito',
      icon: <ShoppingCartRoundedIcon />,
      href: '#'
    },
  ];

  const handleMenuClick = (href) => {
    setOpenMenu(false);
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: 'smooth' });
  };

  // const cambiarNavbar = ()=>{
  //   if(window.scrollY >= 80){
  //     setNavBar(true);
  //   }else{
  //     setNavBar(false);
  //   }
  // };
  // window.addEventListener('scroll', cambiarNavbar);

  // return <nav className={navbar ? 'navbar active' : 'navbar'}>
  return <nav>
    <div className='nav-logo-container'>
      <img src={Logo} alt="" />
    </div>
    <div className='navbar-links-container'>
      <a href="#home">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Inicio
      </a>
      <a href="#about">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Nosotros
      </a>
      <a href="#coments">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Testimoniales
      </a>
      <a href="#contact">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Contáctanos
      </a>
      {/* <a href="">
        <BsCart2 className='navbar-cart-icon' />
      </a>
      <button className='primary-button'>Bookings Now</button> */}
    </div>
      
    <div className='navbar-menu-container'>
      {/* <HiOutlineBars3 onClick={() => setOpenMenu(true)} /> */}
      <MenuCel />
    </div>
    {/* <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
      <Box 
        sx={{width: 250}}
        role='presentation'
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(item.href)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

      </Box>
    </Drawer> */}
  </nav>

}

export default Navbar