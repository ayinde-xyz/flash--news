type ArticlesEntry = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
};
type Root = {
  articles: [ArticlesEntry];
  status: string;
  totalResults: Int;
};

type Source = {
  id: string;
  name: string;
};
type Category =
  | "general"
  | "entertainment"
  | "business"
  | "health"
  | "science"
  | "sports"
  | "technology";
