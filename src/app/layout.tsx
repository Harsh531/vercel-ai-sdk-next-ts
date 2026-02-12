import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import AppBar from "@/components/appbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI SDK - Next.js",
  description: "Example of using the AI SDK with Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" flex flex-col h-screen w-screen overflow-hidden bg-gray-50">
          {/* AppBar would go here */}
          <header className="flex h-[10dvh] w-full sticky top-0 left-0  ">
            <AppBar />
          </header>

          <main className="flex h-[90dvh] w-full ">
            {/* <aside className="flex flex-col h-full w-[20dvw] bg-transparent border-r border-t ">
              <Sidebar />
            </aside> */}

            <main className="flex flex-col h-full w-[80dvw]">
              <div className="relative flex flex-col h-[90dvh] w-full overflow-hidden bg-gray-100">
                {children}
              </div>

              <footer className="flex h-[10dvh] w-full ">
                <Footer />
              </footer>
            </main>

          </main>


        </div>
      </body>
    </html>
  );
}
