export interface MainPictureDataInterface {
  mainPicture: {
    errors: [];
    data:
    {
      homeData: {
        pageHomeData: {
          title: string;
          subtitle: string;
        };
        sys: {
          id: string;
        },
        pictureData: {
          mainPictureImage: {
            url: string,
            title: string,
            description: string;
          };

          mainPictureText: {
            json: {
              data: Object,
              nodeType: string;
              conten: any[];
            };
          };
        };
      };
    };
  };
  configOptions?: string;
}

export interface ErrorLoadImagDataInterface { hasError: boolean; message?: string; }

export interface CardAccessGalleriesInterface {
  title: string;
  url: string,
  description: string,
}