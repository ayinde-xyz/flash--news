import React, { Suspense } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
import LiveDateTime from "./LiveDateTime";

const Header = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className="px-5 md:px-10">
        <div className="py-10 px-6 items-center relative">
          <LiveDateTime />
          <Link href="/" prefetch={false}>
            <h1 className="font-serif md:text-4xl text-center text-xl whitespace-nowrap">
              The{" "}
              <span className="underline decoration-4 decoration-orange-400">
                Flash
              </span>{" "}
              News
            </h1>
          </Link>
          <div className="flex items-center space-x-4 justify-end absolute top-8 right-0">
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
