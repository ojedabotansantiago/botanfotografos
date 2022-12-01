import { getMainPictureSSR } from '../api/homePage.service';
import Header from '../components/header';
import HomeImage from '../components/HomeImage';
import { MainPictureData } from '../interfaces/imageInterface';
import Image from 'next/image';
import pirueta from '../public/loading.gif';
import LoadingComponent from '../components/loadingComponent';

function Home(propsPictureData: MainPictureData): JSX.Element {
  const mainPictureData = propsPictureData;
  console.log(mainPictureData);
  return (
    <>
      <Header />
      <section className='section is-fullheight-with-navbar'>
        <h1 className='title has-text-centered'>Botan Fotografos</h1>
        <h2 className='subtitle has-text-centered pt-3'>Fotografia para la historia desde 1957.</h2>

        <div className='bd-snippet-preview'>
          {!mainPictureData.mainPicture.errors ? <HomeImage {...mainPictureData} /> : <LoadingComponent></LoadingComponent>}
        </div>
      </section>
    </>
  );
}
export async function getStaticProps() {
  const mainPicture = await getMainPictureSSR();

  return { props: { mainPicture } };
}
export default Home;
