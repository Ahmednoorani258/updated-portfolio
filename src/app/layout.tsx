
import localFont from "next/font/local";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import WhatsappButton from "@/components/WhatsappButton";
import "./globals.css";
import MouseTrackingBackground from "@/components/MouseTrackingComponent";
import { Analytics } from '@vercel/analytics/next';

export const metadata:Metadata = {
  title: {
    default:"CodeAN-Portfolio",
    template:"%s | CodeAN-Portfolio ",
  },
  description: "Developed by Ahmed Noorani",
  icons:"/image.png"
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <MouseTrackingBackground />
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-grow min-h-screen overflow-y-auto transition-colors duration-300 ease-in-out lg:ml-72" style={{ color: "var(--foreground)", background: "var(--background)" }}>
        {children}
        <WhatsappButton/>
      </main>
    </div>
    <Analytics />
  </body>
</html>

  );
}
