import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContext from "./Context/themeContext";
import MenuContext from "./Context/MenuContext";
import NavBar from "./components/sections/NavBar";
import Footer from "./components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlloyC",
  description:
    "A portfolio site for john okeoghene, a frontend developer, showcasing his works, about him and contacts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen h-screen flex justify-center bg-main bg-cover bg-center`}
      >
        <ThemeContext>
          <MenuContext>
            <NavBar />
            <main className="mt-28 h-max">{children}</main>
            <Footer/>
          </MenuContext>
        </ThemeContext>
      </body>
    </html>
  );
}
