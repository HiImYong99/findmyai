'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Share2, RefreshCw, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTestStore } from '@/store/useTestStore';
import { calculateResult } from '@/utils/scoring';
import resultsData from '@/data/results.json';

type ServiceData = {
    name: string;
    description: string;
    url: string;
    image: string;
}

type PlanData = {
    title: string;
    comment: string;
}

const getServiceStyle = (name: string) => {
    switch (name.toLowerCase()) {
        case 'claude':
            return {
                gradient: 'from-[#D95B38] to-[#99341B] dark:from-[#F07A5A] dark:to-[#C64A2B]',
                shadow: 'shadow-orange-500/30'
            };
        case 'chatgpt':
            return {
                gradient: 'from-[#10A37F] to-[#0A6B53] dark:from-[#21BA96] dark:to-[#108A68]',
                shadow: 'shadow-emerald-500/30'
            };
        case 'perplexity':
            return {
                gradient: 'from-[#22B8CD] to-[#157887] dark:from-[#44D5E9] dark:to-[#249BAC]',
                shadow: 'shadow-cyan-500/30'
            };
        case 'midjourney':
            return {
                gradient: 'from-[#7F5FB6] to-[#543E7A] dark:from-[#9574CE] dark:to-[#6C50A0]',
                shadow: 'shadow-purple-500/30'
            };
        case 'notebooklm':
            return {
                gradient: 'from-[#4285F4] to-[#2B5CA6] dark:from-[#6B9DF6] dark:to-[#3F75D2]',
                shadow: 'shadow-blue-500/30'
            };
        case 'gemini':
            return {
                gradient: 'from-[#1A73E8] via-[#B328D3] to-[#E33555] dark:from-[#438FFA] dark:via-[#C24BE0] dark:to-[#EC5C76]',
                shadow: 'shadow-fuchsia-500/30'
            };
        case 'clova x':
            return {
                gradient: 'from-[#00C73C] to-[#008227] dark:from-[#17E255] dark:to-[#02A434]',
                shadow: 'shadow-green-500/30'
            };
        default:
            return {
                gradient: 'from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700',
                shadow: 'shadow-blue-500/30'
            };
    }
};

export default function ResultPage() {
    const router = useRouter();
    const answers = useTestStore((state) => state.answers);
    const reset = useTestStore((state) => state.reset);

    const [result, setResult] = useState<{
        primary: ServiceData;
        secondary: ServiceData;
        plan: PlanData;
    } | null>(null);

    useEffect(() => {
        if (answers.length === 0) {
            router.push('/');
            return;
        }

        const { primary, secondary, plan } = calculateResult(answers);

        // Using simple typing assertion here for simplicity
        const data = resultsData as any;

        setResult({
            primary: data.services[primary],
            secondary: data.services[secondary],
            plan: data.plans[plan],
        });
    }, [answers, router]);

    const handleRestart = () => {
        reset();
        router.push('/');
    };

    const handleShare = async () => {
        const shareData = {
            title: '나의 AI 파트너 찾기',
            text: `나와 딱 맞는 AI는 ${result?.primary?.name}네요! 여러분도 테스트해보세요.`,
            url: window.location.origin,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert('현재 환경(HTTP 접속)에서는 아이폰 기본 공유창을 띄울 수 없습니다.\n(배포 후 실제 HTTPS 도메인에서는 정상 작동합니다!)\n임시로 링크 클립보드 복사를 실행합니다.');
                handleCopyLink();
            }
        } catch (err: any) {
            if (err.name !== 'AbortError') {
                console.error('Error sharing:', err);
            }
        }
    };

    const fallbackCopy = (text: string, isAccount = false) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            if (isAccount) {
                const goToToss = window.confirm('계좌번호가 복사되었습니다.\n토스(Toss) 앱으로 이동하시겠습니까?');
                if (goToToss) {
                    window.location.href = 'supertoss://';
                }
            } else {
                alert('링크가 클립보드에 복사되었습니다!');
            }
        } catch (err) {
            console.error('Fallback copy failed', err);
            if (!isAccount) {
                alert('복사에 실패했습니다. 브라우저에서 직접 복사해주세요.');
            }
        }
        textArea.remove();
    };

    const handleCopyLink = async () => {
        const url = window.location.href;
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(url);
                alert('링크가 클립보드에 복사되었습니다!');
            } catch (err) {
                fallbackCopy(url);
            }
        } else {
            fallbackCopy(url);
        }
    };

    const handleSupport = async () => {
        const account = "411801-04-427626";
        if (navigator.clipboard && window.isSecureContext) {
            try {
                await navigator.clipboard.writeText(account);
                const goToToss = window.confirm('계좌번호가 복사되었습니다.\n토스(Toss) 앱으로 이동하시겠습니까?');
                if (goToToss) {
                    window.location.href = 'supertoss://';
                }
            } catch (err) {
                fallbackCopy(account, true);
            }
        } else {
            fallbackCopy(account, true);
        }
    };

    if (!result) return <div className="flex-1 bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-6 min-h-[100dvh]"><div className="w-10 h-10 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div></div>;

    return (
        <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 p-6 min-h-[100dvh] relative overflow-y-auto transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full flex-1 flex flex-col items-center"
            >
                <span className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full text-xs font-black mb-8 tracking-widest shadow-sm uppercase border border-blue-200 dark:border-blue-800">
                    당신의 최고 파트너 🏆
                </span>

                <div className="bg-white dark:bg-gray-900 w-full rounded-[2rem] p-8 shadow-2xl border border-gray-100 dark:border-gray-800 mb-6 flex flex-col items-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 dark:from-blue-900/20 to-transparent rounded-bl-[100px] z-0 transition-transform group-hover:scale-110 duration-500"></div>

                    <div className={`w-28 h-28 bg-gradient-to-tr ${getServiceStyle(result.primary.name).gradient} rounded-3xl mb-8 shadow-xl ${getServiceStyle(result.primary.name).shadow} flex items-center justify-center text-white font-black text-5xl z-10 rotate-3 transform-gpu group-hover:rotate-6 transition-transform duration-500`}>
                        {result.primary.name.charAt(0)}
                    </div>

                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 z-10 text-center tracking-tight leading-none">
                        {result.primary.name}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-center font-semibold leading-relaxed mb-8 z-10 px-2">
                        {result.primary.description}
                    </p>

                    <a
                        href={result.primary.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-4 rounded-full shadow-lg hover:bg-black dark:hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2 group z-10"
                    >
                        <span className="text-lg tracking-wide">바로 시작하기</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <a
                    href={result.secondary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 w-full rounded-[2rem] p-6 shadow-lg border border-indigo-100/50 dark:border-indigo-900/50 mb-6 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                    <div className="absolute inset-0 bg-white/20 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-[10px] font-black text-indigo-400 dark:text-indigo-500 tracking-widest mb-3 block uppercase relative z-10">서브 추천 AI 🥈</span>
                    <div className="flex items-center justify-between relative z-10">
                        <div className="pr-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">{result.secondary.name}</h3>
                            <p className="text-sm font-semibold text-indigo-900/60 dark:text-indigo-200/60 line-clamp-2">{result.secondary.description}</p>
                        </div>
                        <div className={`p-3 bg-gradient-to-tr ${getServiceStyle(result.secondary.name).gradient} rounded-full shadow-md text-white group-hover:scale-110 group-active:scale-95 transition-transform shrink-0`}>
                            <ExternalLink className="w-4 h-4" />
                        </div>
                    </div>
                </a>

                <div className="w-full bg-white dark:bg-gray-900 rounded-[2rem] p-6 shadow-lg border border-gray-200 dark:border-gray-800 mb-10 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-600"></div>
                    <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 tracking-widest mb-3 block uppercase pl-2">추천 요금제 💳</span>
                    <h3 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-3 leading-tight pl-2">{result.plan.title}</h3>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 leading-relaxed bg-gray-50 dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 ml-2">
                        {result.plan.comment}
                    </p>
                </div>

                <div className="flex gap-4 w-full mb-8">
                    <button
                        onClick={handleShare}
                        className="flex-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-md active:scale-95 transition-all border border-blue-200/50 dark:border-blue-800/50"
                    >
                        <Share2 className="w-5 h-5" /> 공유하기
                    </button>

                    <button
                        onClick={handleRestart}
                        className="flex-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all shadow-sm"
                    >
                        <RefreshCw className="w-5 h-5" /> 다시하기
                    </button>
                </div>



                <button
                    onClick={handleSupport}
                    className="w-full bg-[#3182F6] hover:bg-[#1b64da] text-white font-bold py-4 px-2 text-sm sm:text-base rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl active:scale-95 transition-all mb-8 border border-blue-400/50"
                >
                    <span className="mr-2 text-lg">☕️</span> 개발자의 빠른 퇴근을 앞당겨주세요! (커피 후원)
                </button>

                <div className="w-full bg-gray-50 dark:bg-gray-950 h-24 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-700 relative overflow-hidden group mb-8 shadow-inner">
                    <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    <p className="text-gray-400 dark:text-gray-600 font-extrabold text-xs tracking-widest uppercase relative z-10 delay-100">AdSense Banner Area</p>
                </div>
            </motion.div>
        </div>
    );
}
