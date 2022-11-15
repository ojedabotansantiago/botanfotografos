import CustomLink from './customLink';
import Image from 'next/image';
import images from '../public/logoBotanBlanco.jpg';
import 'bulma/css/bulma.css';
import React from 'react';
export default function Header() {
  const imageLogo = images;
  const [isActive, setIsActive] = React.useState(false);

  return (
    <header className='mb-4'>
      <nav className='navbar is-fixed-top ' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <div className='navbar-start navbar-item'>
            <Image src={imageLogo} width='112' height='28' alt={''} />
          </div>
          <a
            onClick={() => {
              setIsActive(!isActive);
            }}
            role='button'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className='navbar-start'>
            <CustomLink className='navbar-item' href='/'>
              Home
            </CustomLink>
            <CustomLink className='navbar-item' href='/about' prefetch>
              About
            </CustomLink>
            <CustomLink className='navbar-item' href='/biography' prefetch>
              Biografia
            </CustomLink>
            <div className='navbar-item has-dropdown is-hoverable'>
              <div className='navbar-link'>Gallerias</div>

              <div className='navbar-dropdown'>
                <CustomLink className='navbar-item' href='/galleries/bullsGallery'>
                  Toros
                </CustomLink>
                <CustomLink className='navbar-item' href='/galleries/horsesGallery'>
                  Caballos
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
