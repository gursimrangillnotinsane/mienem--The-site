import type { Metadata } from "next";
import "./globals.css";
// app/layout.js
import Script from 'next/script'



export const metadata: Metadata = {
  title: "mienem",
  description: "carrd by mienem",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="a32734c3-5097-4e8c-a01b-49f47e85db4c" />
      </body>
    </html>
  );
}
