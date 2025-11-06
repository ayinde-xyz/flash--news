"use client";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {
  article: ArticlesEntry;
};

const ArticleImage = ({ article }: Props) => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <div>
      {imageLoading && article.urlToImage && (
        <Skeleton className="h-56 w-full rounded-t-lg" />
      )}
      {article.urlToImage && (
        <picture>
          <img
            src={article?.urlToImage}
            alt={article?.title}
            loading="eager"
            className="h-56 w-full object-cover rounded-t-lg shadow-md"
            onLoad={() => setImageLoading(false)}
            style={{ display: imageLoading ? "none" : "block" }}
          />
        </picture>
      )}
    </div>
  );
};

export default ArticleImage;
