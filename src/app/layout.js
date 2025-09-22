import { Analytics } from "@vercel/analytics/react";  // ✅ correct import
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://histovoid.org"),
  title: {
    default: "Histovoid",
    template: "%s | Histovoid",
  },
  description: "Explore microscopic tissue histology slides.",
  icons: {
    icon: "/supercoil.png",
    apple: "/supercoil.png",
  },
  other: {
    "p:domain_verify": "dc5f6aced1e4d69fcf3b3a60494d83ec", // ✅ Pinterest verification
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* ✅ Add Analytics at the bottom of <body> */}
        <Analytics />
      </body>
    </html>
  );
}
