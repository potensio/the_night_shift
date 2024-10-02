import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Night Shift Studio",
  description: "Coolest Bubble developer in the world",
};

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${epilogue.className} antialiased`}>{children}</body>
    </html>
  );
}
