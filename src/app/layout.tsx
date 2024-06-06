import { FooterI } from "@/components/Footer/Footer";
import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";

const inter = Red_Hat_Text({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Launch Countdown Timer",
  description: "This app is built using NextJs, functions like a countdown timer",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../images/favicon-32x32.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        {children}
       
      </body>
    </html>
  );
}
