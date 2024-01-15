import Header from "@/components/Shared/Header";
import Sidebar from "@/components/Shared/Sidebar";
import PageWrapper from "@/components/page-wrapper";
import type { Metadata } from "next";
import "./common.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dailyhub",
  description: "Generated by create next app",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="50" />
      </head>
      <body className="antialiased pageContent">
        <PageWrapper>
          <div className="flex  h-screen w-auto  flex-row   justify-start overflow-hidden p-0 relative">
            <div className=" lg:hidden">
              <Header />
            </div>

            <Sidebar className=" hidden lg:flex" />

            <main className=" p-2 pt-[80px]  lg:pt-0 pl-0  flex-1 flex flex-col rounded-lg bg-main  relative  z-10 will-change-transform justify-start h-screen w-[1px]">
              <div className=" bg-main-border hidden lg:block"></div>
              <div className="flex-1 flex flex-col justify-start relative p-4 sm:p-8 gap-8  overflow-hidden overflow-y-auto w-full  will-change-transform h-[1px] flex-nowrap">
                {children}
              </div>
            </main>
          </div>
        </PageWrapper>
      </body>
    </html>
  );
}
