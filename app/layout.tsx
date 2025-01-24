import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-datepicker/dist/react-datepicker.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatBox",
  description: "Video Calling app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider 
        appearance={{
          layout:{
            logoImageUrl: '/icons/video.svg',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1c1f2e',
            colorInputBackground: '#252a41',
            colorInputText: '#fff'
          }
        }
        }
      >
        <body className={`${inter.className} bg-black-3`}>{children}</body>
      </ClerkProvider>
      
    </html>
  );
}