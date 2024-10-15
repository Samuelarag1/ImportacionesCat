import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react"; // Importa ChakraProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Importaciones Catamarca",
  description: "Tienda digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
