import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import "@fontsource/dm-sans"; // Defaults to weight 400
import "@fontsource/dm-sans/400.css"; // Specify weight
import "@fontsource/dm-sans/400-italic.css"; // Specify weight and style
export const metadata: Metadata = {
  title: "Zify",
  description: "Reinventing Group Travel In Australia",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
