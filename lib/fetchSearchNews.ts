"use server";
import { gql } from "graphql-request";
import { revalidatePath, updateTag } from "next/cache";
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

  // fetch function with Next.js caching control
  // Use `cache: "no-store"` so this call always fetches fresh data.
  // When `isDynamic` is true we also trigger a revalidation of the
  // `/search` path so any cached pages depending on this data are updated.
  const res = await fetch(
    "https://kelegerdus.us-east-a.ibm.stepzen.net/api/flash-news/__graphql",
    {
      method: "POST",
      cache: "no-cache",
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

  // Optionally revalidate the search page so any cached pages get updated.
  // We only run this when the caller explicitly requests dynamic behavior.
  // try {
  //   if (isDynamic) {
  //     // revalidate the search route which consumes this data
  //     revalidatePath("/search");
  //     updateTag("term");
  //   }
  // } catch (e) {
  //   // revalidatePath is a best-effort operation; don't throw if it fails
  //   // (for example in older Next.js versions or non-app-router contexts).
  //   // eslint-disable-next-line no-console
  //   console.warn("revalidatePath failed:", e);
  // }

  revalidatePath("/search");

  return newsResponse.data.fetchSearchNews;
};
export default fetchSearchNews;
