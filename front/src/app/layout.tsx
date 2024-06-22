// Libs
import type { Metadata } from "next";

// Styles
import { Nunito_Sans, Montserrat } from 'next/font/google';
import "./globals.css";

//Components
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

//Fonts
const nunito = Nunito_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

// Layout
export const metadata: Metadata = {
  title: "TechHaven",
  description: "TechHaven is a e-commerce website that provide a high quality of tech products",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={nunito.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
