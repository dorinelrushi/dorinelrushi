import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dorinel Rushi",
  description: "I am a web developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XWXiHp" />
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
