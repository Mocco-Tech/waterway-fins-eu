import "./globals.css";
import Header from "@/components/custom/header/Header";
import { Montserrat } from "next/font/google";
import Footer from "@/components/custom/footer/Footer";
import ShopifyDataProvider from "@/components/custom/ShopifyDataProvider";
import CartDataProvider from "@/components/custom/CartDataProvider";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

const body = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} font-body text-slate-700 duration-150`}
      >
        <ShopifyDataProvider>
          <CartDataProvider>
            <NextTopLoader color="#2563eb" showSpinner={false} />
            <Header />
            {children}
            <Footer />
            <Toaster offset={10} duration={3000} position="top-left" />
          </CartDataProvider>
        </ShopifyDataProvider>
      </body>
    </html>
  );
}
