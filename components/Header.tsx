import React, { Suspense } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";
import LiveDateTime from "./LiveDateTime";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Lightning from "../public/lightning.svg";

const oswald = Oswald({
  subsets: ["cyrillic"],
  fallback: ["system-ui"],
});

const Header = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className="px-5 md:px-10">
        <div className="py-10 px-6 items-center ">
          <Link className={`${oswald.className}`} href="/" prefetch={false}>
            <h1 className="md:text-4xl text-center text-xl whitespace-nowrap">
              The{" "}
              <span className="underline decoration-4 decoration-orange-400">
                Flash
              </span>{" "}
              News
              <Image
                src={Lightning}
                alt="Logo"
                width={40}
                height={40}
                className="inline-block ml-2 mb-1"
              />
            </h1>
            <p className="text-center text-sm md:text-xl">
              Summarize the latest news easily with Gemini
            </p>
          </Link>
          <div className="flex items-center space-x-4 justify-end absolute top-8 right-0">
            {/* Dark Mode Button */}
            <DarkModeButton />
          </div>
        </div>
        <div className="flex justify-between">
          <LiveDateTime />
          <div className="font-bold text-center text-red-700 shrink-0">
            <span className="relative">
              <span className="absolute top-1.5 -left-2.5 flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-700 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-red-700"></span>
              </span>
              LIVE
            </span>
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
