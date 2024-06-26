"use client"

import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "E-Cell Ramaiah",
//   description: "The Entrepreneurship Development Cell of RIT",
// };

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Meet our Team</title>
        <meta name='description' content="The Team of Entrepreneurship Development Cell of RIT" />
      </head>
      <body className={inter.className}>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}