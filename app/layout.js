import { DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tom Dolton Full Stack Developer",
  description:
    "Tom Dolton is a UK based full stack web developer who specialises in front end development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical background images to prevent layout shifts */}
        <link rel="preload" as="image" href="/images/background-2@2x.webp" />
        <link rel="preload" as="image" href="/images/background-3@2x.webp" />
      </head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
