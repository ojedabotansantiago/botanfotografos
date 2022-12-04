import Image from 'next/image';
import 'bulma/css/bulma.css';
import { ImageFactory } from '../classes/imageFactory.Class';
import { MainPictureDataInterface } from '../interfaces/HomeImagesInterfaces';
import CustomLink from './customLink';
import { GalleriesTypes } from '../utils/enumsGallery';

export default function CardAccessGalleryComponent(imageProps: MainPictureDataInterface) {
  console.log('imageProps', imageProps);
  const imageFactory = new ImageFactory(imageProps);
  const imageData = imageFactory.getAccessGalleryComponent(imageProps.configOptions);
  let link = getLink(imageProps.configOptions);
  function getLink(urlNavigate: string | undefined) {
    let link = '/galleries/bullsGallery';
    if (urlNavigate === GalleriesTypes.BULLS_GALLERY_TYPE) {
      return '/galleries/bullsGallery';
    }
    if (urlNavigate === GalleriesTypes.HORSES_GALLERY_TYPE) {
      return '/galleries/horsesGallery';
    }
    return '/';
  }

  debugger;
  return (
    <div className='card'>
      <header className='card-header is-centered'>
        <p className='card-header-title has-text-centered is-centered'>{imageData?.title}</p>
      </header>
      <div className='card-image'>
        <figure className='image is-4by5'>{imageData?.url ? <Image src={imageData.url} alt='Placeholder image' width='480' height='690' /> : ''}</figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            {/*  <p className='title is-4'>{imageData?.title}</p> */}
            {/* <<p className='subtitle is-6'>La Pirueta</p>> */}
            <div className='content'>{imageData?.description}</div>
          </div>
        </div>
      </div>
      <footer className='card-footer'>
        <p className='card-footer-item'>
          <span>
            <CustomLink className='navbar-item' href={link}>
              Entrar a galeria
            </CustomLink>
          </span>
        </p>
      </footer>
    </div>
  );
}
