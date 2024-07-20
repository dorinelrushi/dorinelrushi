import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dorinel Rushi",
  description: "I am a web developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
     
      </Head>
      <body className={inter.className}>
        <div className="">
          <Header />
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
