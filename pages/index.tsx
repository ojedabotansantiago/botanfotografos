import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getMainPicture } from '../api/homePage.service';

import Header from '../components/header';
import HomeImage from '../components/HomeImage';
import { ResponseImage } from '../interfaces/imageInterface';

export default function Home() {
  const [photo, setMainImage] = useState<ResponseImage>();

  let componentLoad = false;
  const res$ = getMainPicture();
  useEffect(() => {
    debugger;
    res$.subscribe({
      next: (result: ResponseImage) => {
        console.log(result);
        setMainImage(result);
      },
      complete: () => {
        console.log('done');
        componentLoad = true;
      },
    });
  });

  debugger;

  return (
    <>
      <Header />
      <section className='section is-fullheight-with-navbar'>
        <h1 className='title has-text-centered'>Botan Fotografos</h1>
        <h2 className='subtitle has-text-centered pt-3'>Fotografia para la historia desde 1957.</h2>

        <div className='bd-snippet-preview'>{photo ? <HomeImage {...photo} /> : <div> hola</div>}</div>
      </section>
    </>
  );
}
