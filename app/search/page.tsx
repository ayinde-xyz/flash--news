import fetchSearchNews from "../../lib/fetchSearchNews";
import NewsList from "../../components/NewsList";
import { DateRange } from "react-day-picker";
import Footer from "@/components/Footer";
import PaginationLink from "@/components/PaginationLink";
import { Suspense } from "react";

type Props = {
  searchParams?: {
    term: string;
    sortBy: string;
    from: DateRange["from"];
    to: DateRange["to"];
    pageSize: number;
    page: number;
  };
};

const SearchPage = async ({ searchParams }: Props) => {
  if (!searchParams) return null;
  const { term, sortBy, from, to, pageSize, page } = searchParams;
  const news: Root = await fetchSearchNews(
    term,
    sortBy,
    true,
    from,
    to,
    pageSize,
    page
  );
  // console.log(news);
  return (
    <div>
      <h1 className="headerTitle">Search Results For: {term}</h1>
      <NewsList articles={news?.articles} />
      <PaginationLink />
    </div>
  );
};

export default SearchPage;
