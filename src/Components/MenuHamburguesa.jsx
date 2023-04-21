import React from 'react';

const MenuHamburguesa = () => {
  return (
    <div>
        <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button 
    class="navbar-toggler" 
    type="button" 
    data-bs-toggle="offcanvas" 
    data-bs-target="#offcanvasNavbar" 
    aria-controls="offcanvasNavbar" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h1 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h1>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-2">
          <li class="nav-item">
            <a data-bs-toggle="offcanvas" data-bs-target="#home" class="nav-link" >Inicio</a>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="offcanvas" data-bs-target="#about" class="nav-link" >Nosotros</a>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="offcanvas" data-bs-target="#coments" class="nav-link">Testimoniales</a>
          </li>
          <li class="nav-item">
            <a data-bs-toggle="offcanvas" data-bs-target="#contact" class="nav-link" >Contactanos</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default MenuHamburguesa