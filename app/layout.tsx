import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

import { cn } from '@/lib/utils/cn';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather App ',
  description: 'Weather information app based on cities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'min-h-screen max-w-[100vw] flex flex-col justify-between overflow-x-hidden dark'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
