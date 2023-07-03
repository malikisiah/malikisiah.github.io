import NavBar from "@/components/NavBar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Malik Teague",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='black'>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
