import React from "react";
import Article from "./Article";

type Props = {
  articles: ArticlesEntry[];
};

const NewsList = ({ articles }: Props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {articles?.map((article) => (
        <Article key={article?.title} article={article} />
      ))}
    </main>
  );
};

export default NewsList;
