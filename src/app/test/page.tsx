'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useTestStore } from '@/store/useTestStore';
import questionsData from '@/data/questions.json';

export default function TestPage() {
    const router = useRouter();
    const addAnswer = useTestStore((state) => state.addAnswer);
    const removeLastAnswer = useTestStore((state) => state.removeLastAnswer);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const question = questionsData[currentIndex];

    if (!question) return <div className="flex-1 bg-gray-50 dark:bg-gray-950"></div>;

    const progress = ((currentIndex + 1) / questionsData.length) * 100;

    const handleOptionClick = (option: any) => {
        if (currentIndex >= questionsData.length || isTransitioning) return;

        setIsTransitioning(true);
        addAnswer({
            scores: option.scores,
            pricePlan: option.pricePlan,
        });

        if (currentIndex < questionsData.length - 1) {
            setTimeout(() => {
                setCurrentIndex((prev) => prev + 1);
                setIsTransitioning(false);
            }, 150);
        } else {
            router.push('/loading-ad');
        }
    };

    const handleBack = () => {
        if (isTransitioning) return;
        if (currentIndex === 0) {
            router.push('/');
        } else {
            setIsTransitioning(true);
            removeLastAnswer();
            setTimeout(() => {
                setCurrentIndex((prev) => prev - 1);
                setIsTransitioning(false);
            }, 100);
        }
    };

    return (
        <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 p-6">
            <div className="flex items-center mb-6 mt-4">
                <button
                    onClick={handleBack}
                    className="flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-1" />
                    <span className="text-sm font-bold">이전으로</span>
                </button>
            </div>

            <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full mb-8 overflow-hidden shadow-inner shrink-0">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full"
                    initial={{ width: `${(currentIndex / questionsData.length) * 100}%` }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                />
            </div>

            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 font-extrabold mb-4 font-mono text-xl tracking-wider">
                Q{currentIndex + 1}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -30, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-relaxed">
                        {question.question}
                    </h2>

                    <div className="flex flex-col gap-4 mt-8 pb-10">
                        {question.options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option)}
                                className="w-full text-left p-5 rounded-2xl border-2 border-transparent bg-white dark:bg-gray-900 dark:border-gray-800 shadow-sm hover:border-blue-400 hover:shadow-lg dark:hover:border-blue-500 dark:hover:shadow-blue-900/20 hover:translate-y-[-2px] active:scale-95 transition-all text-gray-800 dark:text-gray-200 font-semibold text-lg focus:outline-none flex items-center justify-between group"
                            >
                                <span>{option.text}</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 dark:text-blue-400 font-bold">&rarr;</span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
