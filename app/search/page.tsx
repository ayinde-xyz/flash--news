import fetchSearchNews from "../../lib/fetchSearchNews";
import NewsList from "../../components/NewsList";
import { DateRange } from "react-day-picker";
import PaginationLink from "@/components/PaginationLink";

export const dynamic = "force-dynamic";

type Props = {
  searchParams?: Promise<{
    term: string;
    sortBy: string;
    from: DateRange["from"];
    to: DateRange["to"];
    pageSize: number;
    page: number;
  }>;
};

const SearchPage = async (props: Props) => {
  const searchParams = await props.searchParams;
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

  return (
    <div>
      <h1 className="headerTitle">Search Results For: {term}</h1>
      <NewsList articles={news?.articles} />
      <PaginationLink />
    </div>
  );
};

export default SearchPage;
