import Link from 'next/link';
import { ArrowLeft, Code2, Sparkles } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 p-6 md:p-10 min-h-[100dvh] relative overflow-hidden">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-8 transition-colors z-10 w-max">
                <ArrowLeft className="w-4 h-4 mr-2" /> 메인으로 돌아가기
            </Link>

            <div className="flex-1 flex flex-col items-center max-w-sm mx-auto z-10 w-full">
                <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-3xl mb-8 shadow-xl flex items-center justify-center text-white transform rotate-3 hover:rotate-6 transition-transform">
                    <Code2 className="w-12 h-12" />
                </div>

                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 tracking-tight text-center">
                    FindMyAI는<br />어떻게 만들어졌나요?
                </h1>

                <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 shadow-lg border border-gray-100 dark:border-gray-800 mb-8 w-full">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-6">
                        안녕하세요! 평소 업무 자동화와 생산성 향상에 관심이 많은 <strong className="text-blue-600 dark:text-blue-400">평범한 IT 직장인</strong>입니다. 👨‍💻
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        매일같이 쏟아지는 수많은 AI 모델과 도구들을 직접 업무에 적용해보고 부딪혀가며 써보게 되었습니다.
                        그 결과 <strong>'남들이 좋다는 AI가 무조건 내게도 최고인 건 아니구나'</strong>라는 깨달음을 얻었죠.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        어떤 분은 코딩 특화 AI가 필요하고, 어떤 분은 논문 요약이나 번역이 간절하며, 유료 결제 의사도 저마다 다릅니다.
                        그래서 <strong>테스트 엔지니어 특유의 깐깐한 시선</strong>으로 각각의 AI 모델들이 지닌 장단점과 가성비를 분석하여 이 맞춤형 추천 서비스를 만들게 되었습니다.
                    </p>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 flex items-start gap-3 mt-8">
                        <Sparkles className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold leading-relaxed">
                            여러분들의 소중한 시간과 비용을 아껴주는 최고의 AI 파트너를 찾으시길 진심으로 응원합니다!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
