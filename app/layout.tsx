import type {Metadata} from "next";

import "@/styles/globals.css";
import {TailwindIndicator} from "@/components/tailwind-indicator";
import {ThemeProvider} from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "nextjs-starter",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-background container min-h-screen font-sans antialiased">
        <ThemeProvider disableTransitionOnChange enableSystem attribute="class" defaultTheme="dark">
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
