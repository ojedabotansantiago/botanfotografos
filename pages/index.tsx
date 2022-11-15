import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header';
import pirueta from '../public/laPiruetaA.jpg';

export default function Home() {
  return (
    <>
      <Header />

      <section className='hero is-fullheight-with-navbar mt-4'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title'>Botan Fotografos</p>
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by5'>
                  <Image src={pirueta} alt='Placeholder image' width='480' height='690' />
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
                  Fotografia de Fernado Botan Moe. <a>Plaza de Sevilla</a>
                  <br />
                  <time dateTime='1972-04-14'>14-04-1972</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
