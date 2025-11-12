import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../../components/NewsList";
type Props = {
  params: Promise<{ category: Category }>;
};

const NewsCategory = async (props: Props) => {
  const params = await props.params;

  const { category } = params;

  const news: Root = await fetchNews(category, undefined, true);
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
