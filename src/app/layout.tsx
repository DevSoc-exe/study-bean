import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Layout/Sidebar";
import Image from "next/image";
import GroupSidebar from '../components/Layout/GroupSidebar';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Collab Study",
  description: "Next Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`px-4 relative gap-x-4 h-screen overflow-y-hidden flex justify-start items-center bg-black ${poppins.className}`}>
        <Sidebar />
        <GroupSidebar />
        {children}
        <Image
          className="absolute top-0 overflow-x-hidden object-center -z-10 opacity-50 blur-sm"
          src={"/image.jpg"}
          width={1900}
          height={1200}
          alt="background"
        />
      </body>
    </html>
  );
}
