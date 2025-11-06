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
      <BreadcrumbList className="flex overflow-x-auto scrollbar-hide whitespace-nowrap space-x-2 py-2">
        <li className="font-bold text-center text-red-700 shrink-0">
          <span className="relative">
            <span className="absolute top-1.5 -left-2.5 flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-700 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-red-700"></span>
            </span>
            LIVE
          </span>
        </li>

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
