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
