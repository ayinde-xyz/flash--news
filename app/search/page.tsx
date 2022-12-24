import React from "react";
import fetchSearchNews from "../../lib/fetchSearchNews";
import NewsList from "../NewsList";
type Props = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news: Root = await fetchSearchNews(searchParams?.term, "relevancy");
  console.log(news);
  return (
    <div>
      <h1 className="headerTitle">Search Results For: {searchParams?.term}</h1>
      {news && <NewsList articles={news.articles} />}
    </div>
  );
};

export default SearchPage;
