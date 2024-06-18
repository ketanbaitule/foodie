import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Foodie",
  description: "Foodie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#121212] text-[#F7F7F7]`}>
        <Navbar />
        <div className="px-4 md:px-8 container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
