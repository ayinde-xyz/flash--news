import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold md:text-lg text-normal"
      }`}>
      {category}
    </Link>
  );
};

export default NavLink;
