'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useTestStore } from '@/store/useTestStore';
import { useEffect } from 'react';

export default function HomePage() {
  const router = useRouter();
  const reset = useTestStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center p-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-24 h-24 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full flex items-center justify-center mb-8 shadow-inner ring-1 ring-blue-100 dark:ring-blue-900">
        <Sparkles className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-4 tracking-tight leading-snug">
        나와 환상의 궁합인<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          AI 파트너
        </span>는?
      </h1>

      <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
        내 업무 스타일과 딱 맞는 AI 서비스와<br />가장 합리적인 요금제를 찾아보세요.
      </p>

      <button
        onClick={() => router.push('/test')}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
      >
        <span className="text-xl">테스트 시작하기</span>
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="mt-8 text-sm text-gray-400 dark:text-gray-500 font-medium z-10">
        약 1분 소요 · 심리테스트 기반 맞춤 추천
      </p>

    </motion.div>
  );
}
