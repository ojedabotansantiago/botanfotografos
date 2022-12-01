export interface MainPictureData {
  mainPicture: {
    errors: [];
    data:
    {
      homeData: {
        sys: {
          id: string;
        },
        pictureData: {
          url: string,
          title: string,
          description: string;
          mainPictureText: any;
        };
      };
    };
  };
}

export interface ErrorLoadImagData { hasError: boolean; message?: string; }