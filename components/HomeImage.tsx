import Image from 'next/image';
import 'bulma/css/bulma.css';
import React from 'react';
import { MainPictureData } from '../interfaces/imageInterface';
import { ImageFactory } from '../classes/imageFactory.Class';

export default function HomeImage(imageProps: MainPictureData): JSX.Element {
  const imageFactory = new ImageFactory(imageProps);
  const imageData = imageFactory.getMainImageData();
  debugger;
  return (
    <section className='hero is-fullheight-with-navbar'>
      <div className='container'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by5'>
                  <Image src={imageData.url} alt='Placeholder image' width='480' height='690' />
                </figure>
              </div>
              <div className='card-content'>
                <div className='media'>
                  <div className='media-content'>
                    <p className='title is-4'>{imageData.title}</p>
                    {/* <<p className='subtitle is-6'>La Pirueta</p>> */}
                  </div>
                </div>

                <div className='content'>
                  <p>
                    Fotografia de Fernado Botan Mon. <a>Plaza de Sevilla</a>
                  </p>
                  <p>
                    Ganadora del world press Photo del <time dateTime='1972-04-14'>14-04-1972</time>
                  </p>

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
