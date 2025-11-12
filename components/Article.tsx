import ReadMoreButton from "./ReadMoreButton";
import LiveTimeStamp from "./LiveTimestamp";

import ArticleImage from "./ArticleImage";
import AIButton from "./AIButton";

type Props = {
  article: ArticlesEntry;
};

const Article = ({ article }: Props) => {
  if (article.description !== "[Removed]")
    return (
      <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-xs hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
        <div className="relative">
          <ArticleImage article={article} />
        </div>
        <div className="flex-1 flex flex-col">
          {/* <DialogPreview article={article}> */}
          <div className="flex-1 flex flex-col p-5">
            <h2 className="font-bold font-serif">{article?.title}</h2>
            <section className="mt-2 flex-1">
              <p className="text-xs line-clamp-6">{article?.description}</p>
            </section>
            <div className="text-xs text-right flex justify-between items-center space-x-1 pt-5 italic text-gray-500">
              <AIButton article={article} />
              <div className="ml-auto">
                <span>{article.source?.id} -</span>{" "}
                <span>
                  {/* <Timeago date={article?.publishedAt} /> */}
                  <LiveTimeStamp time={article?.publishedAt} />
                </span>
              </div>
            </div>
          </div>
          {/* </DialogPreview> */}

          <ReadMoreButton article={article} />
        </div>
      </article>
    );
};

export default Article;
