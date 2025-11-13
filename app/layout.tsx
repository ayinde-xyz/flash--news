import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Providers from "../components/Providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flash News - AI-Powered News Summarization",
  description:
    "Stay informed with Flash News, your go-to platform for AI-powered news summarization. Get concise and accurate summaries of the latest news articles, powered by cutting-edge AI technology.",
  authors: { name: "Ayinde AbdurRahman" },
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}

      <body className="bg-gray-200 dark:bg-zinc-900 transition-all duration-700 scroll-smooth">
        <Providers>
          <Header />
          <div className="mx-auto">{children}</div>
          <Footer />
        </Providers>
      </body>

      {/* </Suspense> */}
    </html>
  );
}

// genkit start -- tsc --watch actions/genkit/menuSuggestionFlow.ts --bun run dev

// ↑ @types/node 22.10.1 → 24.9.2
// ↑ @types/react 18.3.12 → 19.2.2
// ↑ @types/react-dom 18.3.1 → 19.2.2
// ↑ @types/react-timeago 4.1.3 → 8.0.0
// ↑ autoprefixer 10.4.20 → 10.4.21
// ↑ postcss 8.4.49 → 8.5.6
// ↑ tailwindcss 3.4.15 → 4.1.16
// ↑ typescript 5.1.6 → 5.9.3
// ↑ @hookform/resolvers 3.9.1 → 5.2.2
// ↑ @radix-ui/react-collapsible 1.1.1 → 1.1.12
// ↑ @radix-ui/react-dialog 1.1.3 → 1.1.15
// ↑ @radix-ui/react-label 2.1.0 → 2.1.7
// ↑ @radix-ui/react-popover 1.1.2 → 1.1.15
// ↑ @radix-ui/react-select 2.1.2 → 2.2.6
// ↑ @radix-ui/react-slot 1.1.1 → 1.2.3
// ↑ eslint 8.57.0 → 9.39.0
// ↑ eslint-config-next 14.2.18 → 16.0.1
// ↑ graphql 16.9.0 → 16.12.0
// ↑ graphql-request 7.1.2 → 7.3.1
// ↑ lucide-react 0.462.0 → 0.552.0
// ↑ next 14.2.18 → 16.0.1
// ↑ next-themes 0.4.3 → 0.4.6
// ↑ react 18.3.1 → 19.2.0
// ↑ react-day-picker 8.10.1 → 9.11.1
// ↑ react-dom 18.3.1 → 19.2.0
// ↑ react-hook-form 7.53.2 → 7.66.0
// ↑ react-timeago 7.2.0 → 8.3.0
// ↑ tailwind-merge 2.5.5 → 3.3.1
// ↑ zod 3.23.8 → 4.1.12
