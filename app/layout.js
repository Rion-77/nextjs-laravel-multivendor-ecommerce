// import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from "./components/BootstrapClient";
import CartProvider from "./context/CartContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "CareKart",
  description: "Online Pharmacy Template",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
    <html lang="en">
      <head>
        {/* <meta charset="utf-8" /> */}
        {/* <meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    /> */}
        {/* <title>CareKart – Online Pharmacy Template</title> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
         <BootstrapClient />
      </body>
    </html>
  );
}
