export interface ResponseImage {
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
}