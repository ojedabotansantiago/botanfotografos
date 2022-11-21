import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, Observable } from 'rxjs';


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

  const url = `https://graphql.contentful.com/content/v1/spaces/ra6agklz6n65/environments/master`;
  // Fetch data from external API
  const res$ = fromFetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer _ujsh2tGg_7EFQv15JAccqo01NOBbf6wyIFI75BB7bY" },
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
  );;


  debugger;
  // Pass data to the page via props

  return res$;
}


