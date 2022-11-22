import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, take } from 'rxjs';
import { urlBase, dataHeaders } from '../const/servicesConst';
import { MainPictureData } from '../interfaces/imageInterface';
const query = `query {
  homeData(id: "2TghW1Qc8Bf6qG6gxe9OYP") {
    sys {
      id
    }
    mainPicture {
      url
      title
      description
    }
  }
}`;
export async function getMainPicture() {

  // Fetch data from external API
  const res$ = fromFetch(urlBase, {
    method: "POST",
    headers: dataHeaders,
    body: JSON.stringify({ query }),
  }).pipe(
    take(1),
    switchMap(response => {
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError(err => {
      // Network or other error, handle appropriately
      console.error(err);
      return of({ error: true, message: err.message, data: 'error al cargar los datos de la imagen principal' });
    },)
  );
  return res$;
}


export async function getMainPictureSSR() {

  const res$ = await fetch(urlBase, {
    method: 'POST',
    headers: dataHeaders,
    body: JSON.stringify({ query }),
  }).then((resp) => {
    debugger;
    return resp;
  });
  return await res$.json();
}