import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Navbar";
import '@radix-ui/themes/styles.css';
import "./globals.css";
import { Container, Theme, ThemePanel } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";



const inter = Inter({ subsets: ["latin"]
, variable: '--font-inter', });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <Theme appearance="light" accentColor="iris" panelBackground="solid" radius="large">
     
        <Navbar/>
        <main className="p-5"> 
        <Container>{children}</Container>
        </main>
        
        </Theme>
      
       
        </body>
    </html>
  );
}
