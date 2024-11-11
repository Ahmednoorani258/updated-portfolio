import type { Metadata } from "next";
import localFont from "next/font/local";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Developed by Ahmed Noorani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <main className="flex-grow p-6 md:p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 ease-in-out">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
