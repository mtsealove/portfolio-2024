import type { Metadata } from 'next';
import '@/styles/globals.scss';
import RootProvider from '@/providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Pretendard from './font/Pretendard';

export const metadata: Metadata = {
  title: '개발자 이산해 포트폴리오',
  description: '개발자 이산해의 포트폴리오입니다.',
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: '개발자 이산해 포트폴리오',
    description: '개발자 이산해의 포트폴리오입니다.',
    siteName: '개발자 이산해 포트폴리오',
    url: 'https://mtsealove.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ko">
      <head>
          <link rel='icon' href='/images/favicon.ico' sizes='any'/>
      </head>
      <body className={Pretendard.variable}>
      <RootProvider>
          <Header/>
          {children}
          <Footer/>
      </RootProvider>
      </body>
      </html>
  );
}
