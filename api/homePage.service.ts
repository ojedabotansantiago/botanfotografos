

export async function getMainPicture() {
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
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Authorization": "Bearer _ujsh2tGg_7EFQv15JAccqo01NOBbf6wyIFI75BB7bY" },
    body: JSON.stringify({ query }),
  });
  const data = await res.json();
  debugger;
  // Pass data to the page via props
  return { props: { data } };
}


