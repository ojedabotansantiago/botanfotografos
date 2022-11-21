import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';
import { urlBase, dataHeaders } from '../const/servicesConst';

export function getMainPicture() {
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

  // Fetch data from external API
  const res$ = fromFetch(urlBase, {
    method: "POST",
    headers: dataHeaders,
    body: JSON.stringify({ query }),
  }).pipe(
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
      return of({ error: true, message: err.message });
    },)
  );
  return res$;
}


