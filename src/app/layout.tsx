import type { Metadata } from 'next';
import '@/styles/globals.scss';
import RootProvider from '@/providers';
import Pretendard from '@/font/Pretendard';
import Header from '@/components/Header';

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
          <link rel='icon' href='/images/favicon.ico' sizes='any'/>
      </head>
      <body className={Pretendard.className}>
      <RootProvider>
                <Header/>
                {children}
            </RootProvider>
        </body>
      </html>
  );
}
