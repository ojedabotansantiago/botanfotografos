import { CardAccessGalleriesInterface, MainPictureDataInterface } from '../interfaces/HomeImagesInterfacesnterface';
import { GalleriesTypes } from '../utils/enumsGallery';

export class ImageFactory {
  imageDataFromServer: any;
  constructor(imageDataFromServer: MainPictureDataInterface) {
    this.imageDataFromServer = imageDataFromServer;
  }
  getMainImageData() {
    const imageData = {
      title: this.imageDataFromServer?.mainPicture?.data.homeData.mainPictureImage.title,
      url: this.imageDataFromServer?.mainPicture?.data?.homeData?.mainPictureImage?.url,
      description: this.imageDataFromServer?.mainPicture?.data?.homeData?.mainPictureImage?.description,
      mainPictureText: this.imageDataFromServer?.mainPicture?.data?.homeData?.mainPictureText
    };
    return imageData;
  }
  getAccessGalleryComponent(configOptions: string | undefined): CardAccessGalleriesInterface | undefined {
    if (configOptions === GalleriesTypes.BULLS_GALLERY_TYPE) {
      return this.getBullsCardGalleryData();
    }
    if (configOptions === GalleriesTypes.HORSES_GALLERY_TYPE) {
      return this.getHorsesCardGalleryData();
    }

  }
  private getHorsesCardGalleryData() {
    return {
      title: this.imageDataFromServer?.mainPicture?.data.homeData.galleryHorsesMainPicture.title,
      url: this.imageDataFromServer?.mainPicture?.data?.homeData?.galleryHorsesMainPicture?.url,
      description: this.imageDataFromServer?.mainPicture?.data?.homeData?.galleryHorsesMainPicture?.description,
    };
  }
  private getBullsCardGalleryData() {
    return {
      title: this.imageDataFromServer?.mainPicture?.data.homeData.galleryBullsMainPicture?.title,
      url: this.imageDataFromServer?.mainPicture?.data?.homeData?.galleryBullsMainPicture?.url,
      description: this.imageDataFromServer?.mainPicture?.data?.homeData?.galleryBullsMainPicture?.description,
    };
  }
}