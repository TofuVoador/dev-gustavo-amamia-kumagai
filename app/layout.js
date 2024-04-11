import { Lora, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lora = Lora({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Gustavo Amamia Kumagai",
  description: "Portifolio Dev de Gustavo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={lora.className}>
        <Header />
        <main className={quicksand.className}>{children}</main>
      </body>
    </html>
  );
}
