"use server";
import { gql } from "graphql-request";
import { revalidatePath } from "next/cache";
import { DateRange } from "react-day-picker";

const fetchSearchNews = async (
  keywords: string | null,
  sortBy?: string | null,
  isDynamic?: boolean,
  from?: DateRange["from"] | null,
  to?: DateRange["to"] | null,
  pageSize?: number | null,
  page?: number | null
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

  // Force fetch to always get fresh data on the server:
  // - Next.js fetch option `cache: "no-store"` ensures no caching by Next
  // - `next: { revalidate: 0 }` explicitly disables ISR for this request
  // - HTTP headers ensure intermediary caches (CDNs/proxies) don't cache
  const res = await fetch(
    "https://kelegerdus.us-east-a.ibm.stepzen.net/api/flash-news/__graphql",
    {
      method: "POST",
      cache: "no-store",
      next: { revalidate: 0 },
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

  return newsResponse.data.fetchSearchNews;
};
export default fetchSearchNews;
