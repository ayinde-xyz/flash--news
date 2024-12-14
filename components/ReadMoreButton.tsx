"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
type Props = {
  article: ArticlesEntry;
};

const ReadMoreButton = ({ article }: Props) => {
  return (
    <Button
      variant={"outline"}
      className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-500 hover:bg-orange-500">
      <Link className="h-full w-full" href={article?.url} prefetch={false}>
        Read More
      </Link>
    </Button>
  );
};

export default ReadMoreButton;
