import { getMainPictureSSR } from '../api/homePage.service';
import Header from '../components/header';
import HomeImage from '../components/homeImage';
import { MainPictureDataInterface } from '../interfaces/HomeImagesInterfacesnterface';
import LoadingComponent from '../components/loadingComponent';
import CardAccessGalleryComponent from '../components/cardAccessGalleryComponent';
import { GalleriesTypes } from '../utils/enumsGallery';

function Home(propsPictureData: MainPictureDataInterface): JSX.Element {
  const mainPictureData = propsPictureData;
  console.log('mainPictureData', mainPictureData);
  const pageHomeData = mainPictureData?.mainPicture?.data?.homeData?.pageHomeData;
  const { configTypeBulls, configTypeHorses } = getEntryConfigCards();
  return (
    <>
      <Header />
      <section className='section is-fullheight-with-navbar'>
        <h1 className='title has-text-centered'>{pageHomeData?.title}</h1>
        <h2 className='subtitle has-text-centered pt-3'>{pageHomeData?.subtitle}</h2>

        <div className='bd-snippet-preview'>
          {!mainPictureData.mainPicture.errors ? <HomeImage {...mainPictureData} /> : <LoadingComponent></LoadingComponent>}
        </div>
        <section className='section'>
          <div className='columns'>
            <div className='column'>
              {!mainPictureData.mainPicture.errors ? <CardAccessGalleryComponent {...configTypeBulls} /> : <LoadingComponent></LoadingComponent>}
            </div>
            <div className='column'>
              {!mainPictureData.mainPicture.errors ? <CardAccessGalleryComponent {...configTypeHorses} /> : <LoadingComponent></LoadingComponent>}
            </div>
          </div>
        </section>
      </section>
    </>
  );

  function getEntryConfigCards() {
    const configTypeBulls = {
      ...mainPictureData,
      configOptions: GalleriesTypes.BULLS_GALLERY_TYPE,
    };
    const configTypeHorses = {
      ...mainPictureData,
      configOptions: GalleriesTypes.HORSES_GALLERY_TYPES,
    };
    return { configTypeBulls, configTypeHorses };
  }
}
export async function getStaticProps() {
  const mainPicture = await getMainPictureSSR();

  return { props: { mainPicture } };
}
export default Home;
