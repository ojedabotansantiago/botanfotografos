import Image from 'next/image';
import 'bulma/css/bulma.css';
import React from 'react';
import { ImageFactory } from '../classes/imageFactory.Class';
import ContentFullRichTextComponent from './contentFullRichTextComponent';
import { MainPictureDataInterface } from '../interfaces/HomeImagesInterfaces';

export default function HomeImage(imageProps: MainPictureDataInterface): JSX.Element {
  const imageFactory = new ImageFactory(imageProps);
  const imageData = imageFactory.getMainImageData();
  console.log('HomeImage', imageData);
  const richText = imageData?.mainPictureText?.json;

  return (
    <section className='hero'>
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
                {richText ? (
                  <div className='content'>
                    <ContentFullRichTextComponent {...richText} />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
