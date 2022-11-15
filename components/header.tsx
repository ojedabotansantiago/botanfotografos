import CustomLink from './customLink';
import Image from 'next/image';
import images from '../public/logoBotanBlanco.jpg';
import 'bulma/css/bulma.css';
import React from 'react';
export default function Header() {
  const imageLogo = '/../public/logoBotanNegro.jpg';
  const [isActive, setisActive] = React.useState(false);

  return (
    <header>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a
            onClick={() => {
              setisActive(!isActive);
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
            <a className='navbar-item'>
              {' '}
              <CustomLink href='/'>Home</CustomLink>
            </a>
            <a className='navbar-item'>
              {' '}
              <CustomLink href='/about' prefetch>
                About
              </CustomLink>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
