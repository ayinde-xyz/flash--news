import React from "react";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../../components/NewsList";
type Props = {
  params: { category: Category };
};

const NewsCategory = async ({ params: { category } }: Props) => {
  const news: Root = await fetchNews(category, undefined, false);
  // console.log(news);
  return (
    <div>
      <h1 className="headerTitle">{category} - Top Headlines</h1>
      <NewsList articles={news.articles} />
    </div>
  );
};

export default NewsCategory;
// Prebuilding pages with ISR eg category sports..... etc
// export async function generateStaticParams() {
//   return categories.map((category) => ({
//     // key: category,
//     category: category,
//   }));
// }
