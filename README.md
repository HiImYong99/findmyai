# 나와 환상의 궁합인 AI 파트너는? (Find My AI)

나의 업무 스타일과 딱 맞는 AI 서비스와 가장 합리적인 요금제를 찾아주는 심리테스트 기반 웹 애플리케이션입니다.

## 🚀 프로젝트 소개

최근 수많은 AI 서비스가 쏟아져 나오고 있지만, 어떤 서비스가 나에게 가장 적합한지 고민되시나요?
**Find My AI**는 간단한 테스트를 통해 사용자의 직무, 업무 스타일, 예산 등을 분석하여 최적의 AI 파트너를 추천해줍니다.

## ✨ 주요 기능

- **맞춤형 AI 추천**: 개발자, 마케터, 디자이너 등 다양한 직무에 맞는 최적의 AI 서비스 추천
- **합리적인 요금제 제안**: 예산에 맞춰 무료, Standard, Pro, Max 플랜 등 맞춤형 요금제 제안
- **직관적인 인터페이스**: Framer Motion을 활용한 부드러운 애니메이션과 깔끔한 UI
- **다양한 AI 서비스 정보**: ChatGPT, Claude, Perplexity, Midjourney, NotebookLM, Gemini, CLOVA X 등 주요 AI 서비스 상세 정보 제공

## 🛠 기술 스택

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 설치 및 실행 방법

이 프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

1. **저장소 클론 (Clone Repository)**
   ```bash
   git clone https://github.com/your-username/find-my-ai.git
   cd find-my-ai
   ```

2. **패키지 설치 (Install Dependencies)**
   ```bash
   npm install
   # 또는
   yarn install
   # 또는
   pnpm install
   # 또는
   bun install
   ```

3. **개발 서버 실행 (Run Development Server)**
   ```bash
   npm run dev
   # 또는
   yarn dev
   # 또는
   pnpm dev
   # 또는
   bun dev
   ```

4. **브라우저 확인**
   [https://ai-match-test.vercel.app/](https://ai-match-test.vercel.app)으로 접속하여 결과를 확인하세요.

## 📂 프로젝트 구조

```
src/
├── app/          # Next.js App Router 페이지 및 레이아웃
├── data/         # 질문 및 결과 데이터 (JSON)
├── store/        # Zustand 상태 관리 (테스트 진행 상태 등)
└── utils/        # 유틸리티 함수
```

## 🤝 기여하기

이 프로젝트에 기여하고 싶으시다면 언제든지 Pull Request를 보내주세요! 버그 제보나 기능 제안도 환영합니다.
