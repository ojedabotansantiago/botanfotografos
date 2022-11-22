import CustomLink from './customLink';
import Image from 'next/image';
import images from '../public/logoBotanBlanco.jpg';
import 'bulma/css/bulma.css';
import pirueta from '../public/laPiruetaA.jpg';
import React from 'react';
import { MainPictureData } from '../interfaces/imageInterface';

export default function HomeImage(mainPictureData: MainPictureData): JSX.Element {
  const imageLogo = images;

  debugger;
  return (
    <section className='hero is-fullheight-with-navbar'>
      <div className='container'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by5'>
                  <Image src={mainPictureData?.mainPicture?.data?.homeData?.mainPicture?.url} alt='Placeholder image' width='480' height='690' />
                </figure>
              </div>
              <div className='card-content'>
                <div className='media'>
                  <div className='media-content'>
                    <p className='title is-4'>Fotografia</p>
                    <p className='subtitle is-6'>La Pirueta</p>
                  </div>
                </div>

                <div className='content'>
                  Fotografia de Fernado Botan Mon. <a>Plaza de Sevilla</a>{' '}
                  <p>
                    Ganadora del world press Photo del <time dateTime='1972-04-14'>14-04-1972</time>
                  </p>
                  <br />
                  <time dateTime='1972-04-14'>14-04-1972</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
