import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

type Props = {
  category: Category;
  isActive: boolean;
};

const NavLink = ({ category, isActive }: Props) => {
  return (
    <BreadcrumbItem
      className={`md:gap-1.5 gap-0 ${
        category === "entertainment" && "col-span-2 md:col-span-1"
      }`}>
      <BreadcrumbLink asChild>
        <Link
          href={`/news/${category}`}
          className={`navLink capitalize ${
            isActive &&
            "underline decoration-orange-400 underline-offset-4 font-bold md:text-lg text-normal"
          }`}>
          {category}
        </Link>
      </BreadcrumbLink>
      <BreadcrumbSeparator className="md:block hidden" />
    </BreadcrumbItem>
  );
};

export default NavLink;
