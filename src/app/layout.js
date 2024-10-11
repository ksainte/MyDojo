import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SHIDOSTUDIO - A Martial Arts And Fighting Sports Club",
  description: "Shidostudio is a new club specializing in martial arts. Come train with our dedicated professors in the heart of Brussels.",
  openGraph: {
    title: "SHIDOSTUDIO - A Martial Arts And Fighting Sports Club",
    description: "Shidostudio is a new club specializing in martial arts. Come train with our dedicated professors in the heart of Brussels.",
    siteName: "Shidostudio",
    images: [
      {
        url: "https://www.shidostudio.be/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogoshidostudio.519ee4be.png&w=3840&q=75",
        width: 300,
        height: 300,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App">
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
