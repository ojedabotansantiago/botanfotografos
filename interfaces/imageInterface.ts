export interface MainPictureData {
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
}

export interface ErrorLoadImagData { hasError: boolean; message?: string; }