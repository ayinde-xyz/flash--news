import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full h-2 space-x-4 flex flex-row justify-center items-center">
      <div className="mx-auto text-center text-sm text-muted-foreground w-full">
        <Separator className="mb-2" />
        <span className="whitespace-nowrap  block md:inline ">
          <Link href={"https://ayindeabdulrahman.vercel.app"}>
            &copy; {new Date().getFullYear()}{" "}
            <span className="underline text-black dark:text-white underline-offset-2 font-semibold">
              Ayinde AbdurRahman.
            </span>
          </Link>
        </span>{" "}
        <span className="whitespace-nowrap">All rights reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
