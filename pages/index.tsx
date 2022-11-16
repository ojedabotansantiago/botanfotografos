import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header';
import HomeImage from '../components/HomeImage';

export default function Home() {
  return (
    <>
      <Header />
      <section className='section is-fullheight-with-navbar'>
        <h1 className='title has-text-centered'>Botan Fotografos</h1>
        <h2 className='subtitle has-text-centered pt-3'>Fotografia para la historia desde 1957.</h2>

        <div className='bd-snippet-preview'>
          <HomeImage />
        </div>
      </section>
    </>
  );
}
