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
      </body>
    </html>
  );
}
