import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Providers from "../components/Providers";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Providers>
        <body className="bg-gray-200 dark:bg-zinc-900 transition-all duration-700">
          <Header />
          <div className="mx-auto">{children}</div>
          {/* <Footer /> */}
        </body>
      </Providers>
      {/* </Suspense> */}
    </html>
  );
}
