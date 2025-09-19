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
  title: {
    default: "Histovoid  ",            // Default title
    template: "%s | Histovoid",        // Dynamic per-page titles
  },
  description: "Explore microscopic tissue histology slides.",
  icons: {
    icon: "/abstract.png",      // ✅ favicon from /public
    apple: "/abstract.png",     // ✅ for iOS/Apple
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
