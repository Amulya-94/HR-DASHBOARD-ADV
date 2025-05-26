
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import { BookmarkProvider } from "@/contexts/bookmark-context";
import { AppLayout } from "@/components/layout/app-layout";
import { APP_NAME } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: "HR Performance Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BookmarkProvider>
            <AppLayout>{children}</AppLayout>
          </BookmarkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Note: The ThemeProvider from shadcn/ui might be slightly different.
// The one used here is a common pattern. Adjusted to match a simpler setup from scratch.
// If using shadcn's generated ThemeProvider, it might be in `components/theme-provider.tsx`.
// For this exercise, assuming a custom ThemeProvider as created in `contexts/theme-provider.tsx`.
// Updated ThemeProvider usage as per the custom one.
