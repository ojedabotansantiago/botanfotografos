import { useCallback, useEffect, useState } from 'react';
import { map } from 'rxjs';
import { getMainPicture } from '../api/homePage.service';
import Header from '../components/header';
import HomeImage from '../components/HomeImage';
import { ResponseImage } from '../interfaces/imageInterface';

export default function Home() {
  const [mainPictureData, setMainImage] = useState<ResponseImage>();

  const mainPictureDataResult = useCallback(() => {
    return mainPictureData;
  }, []);

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
  }, [mainPictureDataResult]);

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
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const data = await getMainPicture();
  const result = JSON.parse(JSON.stringify(data));
  // Props returned will be passed to the page component
  return { props: { result } };
}
