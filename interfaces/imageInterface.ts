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
        };
      };
    };
  };
}

export interface ErrorLoadImagData { hasError: boolean; message?: string; }