import React, { Suspense } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className="px-10">
        <div className="grid grid-cols-3 py-10 px-6 items-center">
          <Bars3Icon className="h-8 w-8 cursor-pointer" />
          <Link href="/" prefetch={false}>
            <h1 className="font-serif md:text-4xl text-center text-xl whitespace-nowrap">
              The{" "}
              <span className="underline decoration-6 decoration-orange-400">
                Flash
              </span>{" "}
              News
            </h1>
          </Link>
          <div className="flex items-center justify-end">
            {/* Dark Mode Button */}
            <DarkModeButton />
          </div>
        </div>
        {/* NavLinks */}
        <NavLinks />
        {/* SearchBox */}
        <SearchBox />
      </header>
    </Suspense>
  );
};

export default Header;
