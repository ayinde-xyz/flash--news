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
    <Breadcrumb className="text-xs md:text-sm  pb-10 max-w-6xl mx-auto border-b">
      <BreadcrumbList className="grid grid-cols-4 md:grid-cols-7 md:gap-4 gap-x-0">
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
