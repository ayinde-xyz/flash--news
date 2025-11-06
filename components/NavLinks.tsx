"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { categories } from "../constants";
import NavLink from "./NavLink";
import { Breadcrumb, BreadcrumbList } from "./ui/breadcrumb";

const NavLinks = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <Breadcrumb className="text-xs md:text-sm mx-auto border-b">
      <BreadcrumbList className="flex overflow-x-auto scrollbar-hide whitespace-nowrap space-x-2 md:space-x-5 py-2 md:justify-center">
        {categories.map((category) => (
          <NavLink
            key={category}
            category={category}
            isActive={isActive(category)}
          />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavLinks;
