import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const mont_init = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
  weight: ["100", "300", "400","500","700", "900"],
});

const poppins_init = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ["100","300","400","500","700","900"]
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont_init.variable} ${poppins_init.variable}  antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
