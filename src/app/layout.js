import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/navbar';
import Footer from './components/footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nutrition App",
  description: "Generated by Squad 3 Inc.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-[family-name:var(--font-geist-sans)] text-gunmetal bg-beige ">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
