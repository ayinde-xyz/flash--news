import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-2 space-x-4 flex flex-row justify-center items-center">
      <p className="text-lg text-center text-orange-400">The Flash News</p>
      <p className="text-lg text-center">
        &copy; Developed by{" "}
        <Link href={"https://twitter.com/ayinde_xyz"}>ayinde_xyz</Link>
      </p>
    </footer>
  );
};
export default Footer;
