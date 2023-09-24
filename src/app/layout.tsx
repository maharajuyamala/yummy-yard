"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "@/Redux/Store/store";
import { Provider } from "react-redux";
import { createContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./icon.ico" className="bg-black h-32" />
      </head>
      <body className={inter.className}>
        <Provider store={store}> {children}</Provider>
      </body>
    </html>
  );
}
