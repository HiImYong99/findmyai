'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingAdPage() {
    const router = useRouter();
    const [showAd, setShowAd] = useState(false);
    const [countdown, setCountdown] = useState(5); // 5 seconds ad mock
    const [loadingText, setLoadingText] = useState("AI가 당신의 답변을 분석 중입니다...");

    // Phase 1: Show Loading for 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAd(true);
            setLoadingText("광고 시청 후 결과가 나타납니다!");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    // Phase 2: Show fake ad and countdown
    useEffect(() => {
        if (showAd && countdown > 0) {
            const interval = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (showAd && countdown === 0) {
            router.push('/result');
        }
    }, [showAd, countdown, router]);

    const handleSkipAd = () => {
        if (countdown <= 2) { // Allow skip after 3 seconds (when countdown is 2 or less)
            router.push('/result');
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            {!showAd ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center flex-1 justify-center w-full h-full"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl animate-pulse"></div>
                        <Loader2 className="w-16 h-16 animate-spin text-blue-600 dark:text-blue-400 relative z-10" />
                    </div>
                    <p className="mt-8 text-lg font-bold text-gray-700 dark:text-gray-200 animate-pulse text-center">
                        {loadingText}
                    </p>
                </motion.div>
            ) : (
                <AnimatePresence>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-6 relative flex flex-col border border-gray-100 dark:border-gray-800"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase">Sponsored</span>
                            {countdown <= 2 ? (
                                <button
                                    onClick={handleSkipAd}
                                    className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 transition-colors"
                                >
                                    Skip Ad <X className="w-4 h-4" />
                                </button>
                            ) : (
                                <div className="text-sm font-bold text-gray-400 dark:text-gray-500">
                                    {countdown}초 후 이동
                                </div>
                            )}
                        </div>

                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-800 h-48 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                            <div className="text-white font-extrabold text-2xl text-center leading-tight">
                                당신의 비즈니스를<br />한 단계 더 위로 🚀
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">프리미엄 AI 솔루션 광고</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                            이 공간은 실제 배포 시 Google AdSense 전면광고(Interstitial Ad) 또는 보상형 광고가 송출될 영역입니다. 자동 광고 코드를 삽입하여 수익화를 극대화할 수 있습니다.
                        </p>

                        <button disabled className="w-full bg-blue-600/50 dark:bg-blue-500/30 text-white font-bold py-3 rounded-xl shadow cursor-not-allowed">
                            더 알아보기
                        </button>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}
