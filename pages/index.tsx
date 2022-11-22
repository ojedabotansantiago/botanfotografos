import { getMainPictureSSR } from '../api/homePage.service';
import Header from '../components/header';
import HomeImage from '../components/HomeImage';
import { MainPictureData } from '../interfaces/imageInterface';
import Image from 'next/image';
import pirueta from '../public/loading.gif';

function Home(response: MainPictureData): JSX.Element {
  debugger;
  const mainPictureData = response;
  console.log(mainPictureData);
  return (
    <>
      <Header />
      <section className='section is-fullheight-with-navbar'>
        <h1 className='title has-text-centered'>Botan Fotografos</h1>
        <h2 className='subtitle has-text-centered pt-3'>Fotografia para la historia desde 1957.</h2>

        <div className='bd-snippet-preview'>
          {!mainPictureData.mainPicture.errors ? (
            <HomeImage {...mainPictureData} />
          ) : (
            <div>
              <figure className='image is-128x128'>
                <Image src={pirueta} alt={''} width='480' height='690' />
              </figure>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export async function getServerSideProps() {
  const mainPicture = await getMainPictureSSR();

  return { props: { mainPicture } };
}
export default Home;
