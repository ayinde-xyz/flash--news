import { gql } from "graphql-request";

const fetchSearchNews = async (
  keywords?: string,
  sortBy?: string,
  isDynamic?: boolean
) => {
  // Grapql query
  const query = gql`
    query MyQuery($apiKey: String!, $q: String, $sortBy: String) {
      myQuery(apiKey: $apiKey, q: $q, sortBy: $sortBy, language: "en") {
        articles {
          author
          description
          content
          publishedAt
          title
          url
          urlToImage
          source {
            id
            name
          }
        }
        status
        totalResults
      }
    }
  `;

  // fetch function with Next js 13 caching
  const res = await fetch(
    "https://malanville.stepzen.net/api/wandering-walrus/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `APIkey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          apiKey: process.env.NEWSAPI_API_KEY,
          sortBy: sortBy,
          q: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();

  return newsResponse.data.myQuery;
};
export default fetchSearchNews;
