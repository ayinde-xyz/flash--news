import React from "react";
import fetchNews from "../lib/fetchNews";
import response from "../response.json";

import NewsList from "./NewsList";
// import NewsList from "./NewsList";

// async function getData() {
//   const news = await fetchNews("general", "");
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//   return news;
// }
// type news = string | Root

async function Page() {
  // const news: any = response;

  const news: Root = await fetchNews("general", "");
  console.log(news);

  return (
    <div>
      <NewsList articles={news.articles} />
    </div>
    // <div>
    //   <NewsList news={news} />
    // </div>
  );
}

export default Page;
