"use server";
import { gql } from "graphql-request";
import { DateRange } from "react-day-picker";

const fetchSearchNews = async (
  keywords: string | null,
  sortBy?: string,
  isDynamic?: boolean,
  from?: DateRange["from"],
  to?: DateRange["to"],
  pageSize?: number,
  page?: number
) => {
  // Grapql query
  const query = gql`
    query MyQuery(
      $apiKey: String!
      $q: String
      $sortBy: String
      $from: String
      $to: String
      $pageSize: String
      $page: String
    ) {
      fetchSearchNews(
        apiKey: $apiKey
        q: $q
        sortBy: $sortBy
        language: "en"
        from: $from
        to: $to
        pageSize: $pageSize
        page: $page
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

  // fetch function with Next js 15 caching
  const res = await fetch(
    "https://kelegerdus.us-east-a.ibm.stepzen.net/api/flash-news/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-store" : "default",
      // next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
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
          from: from ? from.toString() : null,
          to: to ? to.toString() : null,
          pageSize: pageSize ? pageSize.toString() : null,
          page: page ? page.toString() : null,
        },
      }),
    }
  );

  const newsResponse = await res.json();
  // console.log(newsResponse.data.fetchSearchNews);

  return newsResponse.data.fetchSearchNews;
};
export default fetchSearchNews;
