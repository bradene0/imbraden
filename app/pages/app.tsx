import { GeistSans } from "geist/font/sans";
import "tailwindcss/tailwind.css"; // Import your Tailwind CSS styles
import "daisyui/dist/full.css"; // Import daisyUI styles
import "./globals.css";
import type { AppProps } from 'next/app';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Portfolio",
  description: "My Portfolio",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <html lang="en" data-theme="cupcake" className={GeistSans.className}>
        <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-col items-center">
            <Component {...pageProps} />
          </main>
        </body>
      </html>
    </>
  ); 
}

export default MyApp;
