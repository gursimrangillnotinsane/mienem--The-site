import type { Metadata } from "next";
import "./globals.css";
import mixpanel from "mixpanel-browser";



export const metadata: Metadata = {
  title: "mienem",
  description: "carrd by mienem",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Near entry of your product, init Mixpanel
  mixpanel.init("f5d1fdb7e92b09cb5c9720165c0b893f", {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });

  return (
    <html lang="en">
      {/* <head>
        <script type="text/javascript">
          {`
          (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "oryas4n2ws");
    `}
        </script>
      </head> */}
      <body>
        {children}
      </body>
    </html>
  );
}
