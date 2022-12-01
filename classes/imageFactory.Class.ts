import { MainPictureData } from '../interfaces/imageInterface';

export class ImageFactory {
  imageDataFromServer: any;
  constructor(imageDataFromServer: MainPictureData) {
    this.imageDataFromServer = imageDataFromServer;
  }
  getMainImageData() {
    debugger;
    const imageData = {
      title: this.imageDataFromServer?.mainPicture?.data.homeData.mainPictureImage.title,
      url: this.imageDataFromServer?.mainPicture?.data?.homeData?.mainPictureImage?.url,
      description: this.imageDataFromServer?.mainPicture?.data?.homeData?.mainPictureImage?.description,
      mainPictureText: this.imageDataFromServer?.mainPicture?.data?.homeData?.mainPictureText
    };
    return imageData;
  }

}