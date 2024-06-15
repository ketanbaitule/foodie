import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
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
      <body className={`${poppins.className} bg-[#121212] text-[#F7F7F7] px-4 md:px-8`}>
        {children}
      </body>
    </html>
  );
}
