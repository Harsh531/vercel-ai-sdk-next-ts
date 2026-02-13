import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar2";
import AppBar from "@/components/appbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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

const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <SidebarProvider
            style={{
              // "--sidebar-width": "20rem",
              // "--sidebar-width-mobile": "20rem",
            }}
          >

            <AppSidebar />

            <SidebarInset>
              
              <header className="flex h-[10dvh] w-full sticky top-0 left-0  ">
                <AppBar />
              </header>

              <main className="flex flex-col flex-1">

                  <div className="relative flex flex-col h-[90dvh] w-full overflow-hidden bg-gray-100">
                    {children}
                  </div>

                  <footer className="flex h-[10dvh] w-full ">
                    <Footer />
                  </footer>
       
              </main>

            </SidebarInset>

          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
