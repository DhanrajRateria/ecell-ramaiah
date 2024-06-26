import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "E-Cell Ramaiah",
//   description: "The Entrepreneurship Development Cell of RIT",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-Cell Ramaiah</title>
        <meta name='description' content="The Entrepreneurship Development Cell of RIT" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}