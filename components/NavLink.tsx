import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

type Props = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <Button asChild variant={"link"}>
      <Link
        href={`/news/${category}`}
        className={`navLink capitalize ${
          isActive &&
          "underline decoration-orange-400 underline-offset-4 font-bold md:text-lg text-normal"
        }`}>
        {category}
      </Link>
    </Button>
  );
};

export default NavLink;
