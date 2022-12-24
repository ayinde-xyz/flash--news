import { gql } from "graphql-request";
//import sortNewsByImage from "./sortNewsByImage";
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // Grapql query
  const query = gql`
    query MyQuery($apiKey: String!, $category: String!) {
      myQuery(
        apiKey: $apiKey
        language: "en"
        category: $category
        pageSize: 100
      ) {
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
    "https://malanville.stepzen.net/api/willing-wolf/__graphql",
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
          category: category,
          q: keywords,
        },
      }),
    }
  );

  const newsResponse = await res.json();
  // sort function of images
  // const news = sortNewsByImage(newsResponse.data.myQuery);
  // console.log(news);

  return newsResponse.data.myQuery;
};
export default fetchNews;
