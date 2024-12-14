"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
