import { useEffect, useState } from 'react';
import { getMainPicture } from '../api/homePage.service';
import Header from '../components/header';
import HomeImage from '../components/HomeImage';
import { ResponseImage } from '../interfaces/imageInterface';

export default function Home() {
  const [mainPictureData, setMainImage] = useState<ResponseImage>();
  const mainPictureData$ = getMainPicture();
  useEffect(() => {
    mainPictureData$.subscribe({
      next: (result: ResponseImage) => {
        console.log(result);
        setMainImage(result);
      },
      complete: () => {
        console.log('done');
      },
    });
  });

  return (
    <>
      <Header />
      <section className='section is-fullheight-with-navbar'>
        <h1 className='title has-text-centered'>Botan Fotografos</h1>
        <h2 className='subtitle has-text-centered pt-3'>Fotografia para la historia desde 1957.</h2>

        <div className='bd-snippet-preview'>{mainPictureData ? <HomeImage {...mainPictureData} /> : <div> ...loading svg</div>}</div>
      </section>
    </>
  );
}
