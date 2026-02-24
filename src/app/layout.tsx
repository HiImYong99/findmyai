import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-match-test.vercel.app'),
  title: '나의 AI 파트너 찾기',
  description: '내 업무 스타일과 성향에 맞는 최적의 AI 서비스와 요금제를 추천받아보세요.',
  openGraph: {
    title: '나의 AI 파트너 찾기',
    description: '내 업무 스타일과 성향에 맞는 최적의 AI 서비스와 요금제를 추천받아보세요.',
    url: 'https://ai-match-test.vercel.app',
    siteName: '나의 AI 파트너 찾기',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '나의 AI 파트너 찾기',
    description: '내 업무 스타일과 성향에 맞는 최적의 AI 서비스와 요금제를 추천받아보세요.',
  },
  verification: {
    google: "google-site-verification-id-here",
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
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2371797890397990"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        <main className="min-h-[100dvh] flex justify-center items-start md:items-center w-full bg-gray-100 dark:bg-gray-950 md:overflow-hidden p-0 md:px-8">
          {/* 좌측 배너 광고 (Desktop) */}
          <aside className="hidden lg:flex flex-col justify-center items-end flex-1 pr-16 xl:pr-24 self-center">
            <div className="w-[160px] h-[75vh] max-h-[700px] bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center rounded-2xl shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
              <span className="text-gray-400 dark:text-gray-600 font-extrabold text-xs tracking-widest uppercase rotate-90 whitespace-nowrap relative z-10">AdSense Wing Area</span>
            </div>
          </aside>

          {/* 메인 모바일 뷰 컨테이너 */}
          <div className="w-full max-w-md shrink-0 bg-white dark:bg-gray-900 min-h-[100dvh] md:h-[85vh] md:max-h-[900px] md:rounded-[2.5rem] shadow-none md:shadow-2xl relative flex flex-col transition-colors duration-300 z-10 md:overflow-hidden">
            <div className="flex-1 flex flex-col relative w-full md:overflow-y-auto styled-scrollbar scroll-smooth pb-12">
              {children}
            </div>
            <footer className="w-full py-8 mt-auto flex flex-col items-center justify-center gap-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 z-20 shrink-0">
              <div className="flex gap-6 text-[11px] font-bold text-gray-400 dark:text-gray-500">
                <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">서비스 소개</a>
                <a href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider">개인정보 처리방침</a>
              </div>
              <div className="flex flex-col items-center gap-1.5 px-4 text-center">
                <a
                  href="mailto:good19422@gmail.com"
                  className="text-[10px] font-bold text-gray-400 dark:text-gray-600 hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  Business Inquiries • good19422@gmail.com
                </a>
                <p className="text-[9px] font-black text-gray-300 dark:text-gray-700 uppercase tracking-[0.2em]">
                  &copy; {new Date().getFullYear()} FindMyAI. All rights reserved.
                </p>
              </div>
            </footer>
          </div>

          {/* 우측 배너 광고 (Desktop) */}
          <aside className="hidden lg:flex flex-col justify-center items-start flex-1 pl-16 xl:pl-24 self-center">
            <div className="w-[160px] h-[75vh] max-h-[700px] bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center rounded-2xl shadow-inner relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
              <span className="text-gray-400 dark:text-gray-600 font-extrabold text-xs tracking-widest uppercase -rotate-90 whitespace-nowrap relative z-10">AdSense Wing Area</span>
            </div>
          </aside>
        </main>
        <GoogleAnalytics gaId="G-Y5V5QW2CZ7" />
      </body>
    </html>
  );
}
