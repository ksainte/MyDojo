import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "SHIDOSTUDIO - A Martial Arts And Fighting Sports Club",
  description: "Nouveau club d'arts martiaux au centre de Bruxelles. Nous pratiquons le Karate, K1, MMA, Judo et Grappling.Tous niveaux,et tout âge,petits,enfants et adultes.",
  openGraph: {
    title: "SHIDOSTUDIO - A Martial Arts And Fighting Sports Club",
    description: "Nouveau club d'arts martiaux au centre de Bruxelles. Nous pratiquons le Karate, K1, MMA, Judo et Grappling. Tous niveaux,et tout âge, petits, enfants et adultes.",
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
