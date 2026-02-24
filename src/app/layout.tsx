import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://find-my-ai.com'),
  title: '나의 AI 파트너 찾기',
  description: '내 업무 스타일과 성향에 맞는 최적의 AI 서비스와 요금제를 추천받아보세요.',
  openGraph: {
    title: '나의 AI 파트너 찾기',
    description: '내 업무 스타일과 성향에 맞는 최적의 AI 서비스와 요금제를 추천받아보세요.',
    url: 'https://find-my-ai.com',
    siteName: '나의 AI 파트너 찾기',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '나의 AI 파트너 찾기 OG Image',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  verification: {
    google: "google-site-verification-id-here", // 추후 Search Console 인증용 ID로 교체
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        <main className="min-h-[100dvh] flex justify-center w-full bg-gray-100 dark:bg-gray-950 overflow-x-hidden">
          {/* 좌측 배너 광고 (Desktop) */}
          <aside className="hidden lg:flex flex-col justify-center items-end flex-1 pr-8 pb-10">
            <div className="w-[160px] h-[600px] bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center rounded-2xl shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
              <span className="text-gray-400 dark:text-gray-600 font-extrabold text-xs tracking-widest uppercase rotate-90 whitespace-nowrap relative z-10">AdSense Wing Area</span>
            </div>
          </aside>

          {/* 메인 모바일 뷰 컨테이너 */}
          <div className="w-full max-w-md bg-white dark:bg-gray-900 min-h-[100dvh] shadow-2xl relative flex flex-col transition-colors duration-300 z-10">
            {children}
          </div>

          {/* 우측 배너 광고 (Desktop) */}
          <aside className="hidden lg:flex flex-col justify-center items-start flex-1 pl-8 pb-10">
            <div className="w-[160px] h-[600px] bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center rounded-2xl shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
              <span className="text-gray-400 dark:text-gray-600 font-extrabold text-xs tracking-widest uppercase -rotate-90 whitespace-nowrap relative z-10">AdSense Wing Area</span>
            </div>
          </aside>
        </main>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
