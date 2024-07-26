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
      <Script id="hotjar-script" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:5066633,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
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
