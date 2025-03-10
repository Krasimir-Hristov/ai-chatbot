import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import React from 'react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'NoteWorthy - Интелигентно приложение за бележки',
  description:
    'Организирайте мислите си, повишете продуктивността и никога не забравяйте важна информация с NoteWorthy.',
  keywords: [
    'бележки',
    'организация',
    'продуктивност',
    'приложение за бележки',
    'NoteWorthy',
  ],
  authors: [{ name: 'NoteWorthy Team' }],
  creator: 'NoteWorthy',
  publisher: 'NoteWorthy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='bg'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='mx-auto max-w-6xl h-screen'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
