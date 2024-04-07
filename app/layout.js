import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gustavo Amamia Kumagai",
  description: "Portifolio Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <main className="w-screen h-min-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
