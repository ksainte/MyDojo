import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SHIDOSTUDIO - A Martial Arts And Fighting Sports Club",
  description: "Shidostudio is a new club specializing in martial arts. Come train with our dedicated professors in the heart of Brussels.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <title>SHIDOSTUDIO - A Martial Arts And Fighting Sports Club</title>
      <meta
          name="description"
          content="Shidostudio is a new club specializing in martial arts. Come train with our dedicated professors in the heart of Brussels."
          key="desc"
        />
        <meta property="og:title" content="SHIDOSTUDIO - A Martial Arts And Fighting Sports Club" />
        <link rel="canonical" href="https://dojowebsite.vercel.app/" />
        <meta
          property="og:description"
          content="Shidostudio is a new club specializing in martial arts. Come train with our dedicated professors in the heart of Brussels."
        />
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
        <meta 
        property="og:url" 
        content="https://dojowebsite.vercel.app/"/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Shidostudio" />
        </Head>
      <body className="App">
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
