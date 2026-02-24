import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-950 p-6 md:p-10 min-h-[100dvh]">
            <Link href="/" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> 메인으로 돌아가기
            </Link>

            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 tracking-tight">개인정보 처리방침</h1>

            <div className="prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4"><strong>FindMyAI</strong>(이하 '본 서비스')는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다.</p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">1. 수집하는 개인정보 항목</h3>
                <p className="mb-4">본 서비스는 별도의 회원가입을 요구하지 않으며, 서비스 이용(심리테스트) 과정에서 어떠한 개인 식별 정보(이름, 연락처, 이메일 등)도 직접 수집, 저장, 처리하지 않습니다.</p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">2. 쿠키(Cookie) 및 자동 수집 정보</h3>
                <p className="mb-4">본 서비스는 구글 애널리틱스(Google Analytics) 및 구글 애드센스(Google AdSense)를 사용하여 사이트 트래픽 분석 및 맞춤형 광고를 제공합니다. 이 과정에서 다음과 같은 정보가 자동으로 생성되어 수집될 수 있습니다.</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>이용자의 브라우저 종류 및 OS</li>
                    <li>접속 IP 주소 및 쿠키(Cookie)</li>
                    <li>방문 일시 및 서비스 이용/클릭 기록</li>
                </ul>
                <p className="mb-4">이용자는 웹 브라우저의 옵션을 설정함으로써 쿠키 저장을 거부할 수 있습니다. (설정 방법 예: 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보) 단, 쿠키 저장을 거부할 경우 맞춤형 광고 제공 등의 이용에 제약을 받을 수 있습니다.</p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">3. 제3자 제공 및 위탁</h3>
                <p className="mb-4">본 서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 트래픽 분석 및 광고 송출을 위해 <strong>구글(Google LLC)</strong>의 정보 수집 도구를 이용하고 있으며, 해당 정보는 구글의 개인정보 처리방침에 따라 안전하게 처리됩니다.</p>
                <p className="mb-4"><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">▶ 구글 개인정보 처리방침 보기</a></p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">4. 적용 일자</h3>
                <p className="mt-4 text-sm font-semibold text-gray-500 dark:text-gray-400">본 개인정보 처리방침은 2026년 2월 24일부터 시행됩니다.</p>
            </div>
        </div>
    );
}
