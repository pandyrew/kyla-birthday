import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const grand = localfont({
  src: [
    {
      path: "../public/fonts/GrandRoyal.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-grand",
});
const aurora = localfont({
  src: [
    {
      path: "../public/fonts/AURORA-PRO.otf",
    },
  ],
  variable: "--font-aurora",
});

const coco = localfont({
  src: [
    {
      path: "../public/fonts/coco.ttf",
    },
  ],
  variable: "--font-coco",
});

const laterlocks = localfont({
  src: [
    {
      path: "../public/fonts/Laterlocks.otf",
    },
  ],
  variable: "--font-laterlocks",
});

const mahar = localfont({
  src: [
    {
      path: "../public/fonts/mahar.ttf",
    },
  ],
  variable: "--font-mahar",
});
const queen = localfont({
  src: [
    {
      path: "../public/fonts/queen.ttf",
    },
  ],
  variable: "--font-queen",
});
const romantic = localfont({
  src: [
    {
      path: "../public/fonts/romantic.ttf",
    },
  ],
  variable: "--font-romantic",
});
const tommy = localfont({
  src: [
    {
      path: "../public/fonts/tommy.ttf",
    },
  ],
  variable: "--font-tommy",
});

const ander = localfont({
    src: [
      {
        path: '../public/fonts/AndersonGrotesk-Ultrabold.ttf',
        weight: '400',
        style: 'ultrabold',
      },
      {
        path: '../public/fonts/AndersonGrotesk-Bold.otf',
        weight: '500',
        style: 'bold',
      }
    ],
    variable: "--font-ander"
});

export const metadata: Metadata = {
  title: "Kyla's Birthday",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ander.variable} ${grand.variable} ${aurora.variable} ${coco.variable} ${laterlocks.variable} ${mahar.variable} ${queen.variable} ${tommy.variable} ${romantic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
