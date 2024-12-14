import ReadMoreButton from "./ReadMoreButton";
import LiveTimeStamp from "./LiveTimestamp";
import DialogPreview from "./DialogPreview";

type Props = {
  article: ArticlesEntry;
};

const Article = ({ article }: Props) => {
  if (article.description !== "[Removed]")
    return (
      <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
        {article.urlToImage && (
          <picture>
            <img
              src={article?.urlToImage}
              alt={article?.title}
              loading="eager"
              className="h-56 w-full object-cover rounded-t-lg shadow-md"
            />
          </picture>
        )}
        <div className="flex-1 flex flex-col">
          {/* <DialogPreview article={article}> */}
          <div className="flex-1 flex flex-col p-5">
            <h2 className="font-bold font-serif">{article?.title}</h2>
            <section className="mt-2 flex-1">
              <p className="text-xs line-clamp-6">{article?.description}</p>
            </section>
            <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-500">
              <p>{article.source?.id} -</p>
              <p>
                {/* <Timeago date={article?.publishedAt} /> */}
                <LiveTimeStamp time={article?.publishedAt} />
              </p>
            </footer>
          </div>
          {/* </DialogPreview> */}

          <ReadMoreButton article={article} />
        </div>
      </article>
    );
};

export default Article;
