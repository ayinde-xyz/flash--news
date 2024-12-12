"use client";
import React from "react";
import Link from "next/link";
type Props = {
  article: ArticlesEntry;
};

const ReadMoreButton = ({ article }: Props) => {
  return (
    <button className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-500 hover:bg-orange-500">
      <Link href={article?.url} target="_blank">
        Read More
      </Link>
    </button>
  );
};

export default ReadMoreButton;
