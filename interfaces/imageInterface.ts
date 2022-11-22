export interface MainPictureData {
  mainPicture: {
    data:
    {
      homeData: {
        sys: {
          id: string;
        },
        mainPicture: {
          url: string,
          title: string,
          description: string;
        };
      };
    };
  };
}

export interface ErrorLoadImagData { error: boolean; message?: string; }