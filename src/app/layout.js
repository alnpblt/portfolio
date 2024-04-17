import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss=false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Allen Poblete Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth snap-y snap-mandatory'>
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
