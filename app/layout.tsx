import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import Providers from "./Providers";

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
      <head />
      <Providers>
        <body className="bg-gray-200 dark:bg-zinc-900 transition-all duration-700">
          <Header />
          <div className="max-w-6xl mx-auto">{children}</div>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
