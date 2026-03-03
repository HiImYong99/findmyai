# 🤖 나와 환상의 궁합인 AI 파트너는? (Find My AI)

> **"나의 업무 스타일과 딱 맞는 AI 서비스와 가장 합리적인 요금제를 찾아주는 심리테스트 기반 웹 애플리케이션"**
>
> 🔗 **서비스 링크:** [Find My AI 바로가기](https://ai-match-test.vercel.app/)

<br/>

## 📝 프로젝트 개요

최근 수많은 AI 서비스가 쏟아져 나오고 있지만, 어떤 서비스가 나에게 가장 적합한지 고민되시나요?
**Find My AI**는 사용자의 직무, 업무 스타일, 예산 등을 분석하여 최적의 AI 파트너를 추천해주는 서비스입니다. 단순한 정보 제공을 넘어, 심리테스트 형식을 빌려 사용자의 흥미를 유발하고 개인화된 맞춤형 추천을 제공합니다.

- **개발 기간:** (해당 시 작성, 예: 2024.03 ~ 2024.04)
- **개발 인원:** 1인 (프론트엔드 전담)
- **주요 타겟:** 자신에게 맞는 AI 서비스와 요금제를 찾고 싶은 모든 직장인 및 프리랜서

<br/>

## 🎯 핵심 기능 (Key Features)

### 1. 직무 및 성향 기반 맞춤형 AI 추천
- 개발자, 마케터, 디자이너 등 다양한 직무 특성 고려
- 사용자의 작업 스타일(텍스트 중심, 이미지/창작 중심 등)을 분석하여 최적화된 툴 제안
- 주요 지원 AI: ChatGPT, Claude, Perplexity, Midjourney, NotebookLM, Gemini, CLOVA X 등

### 2. 예산 맞춤형 합리적인 요금제 제안
- 사용 가능한 예산에 맞춰 **무료 / Standard / Pro / Max 플랜** 등 상황에 맞는 최적의 플랜 제안
- 중복 투자를 방지하고 효율적인 구독 모델 가이드 제공

### 3. 직관적이고 몰입감 있는 인터페이스 (UX/UI)
- **Framer Motion**을 적극 활용한 부드러운 페이지 전환 및 인터랙티브 요소 구현
- 사용자 이탈을 최소화하기 위한 깔끔하고 모던한 UI 디자인 적용
- 다크 모드/라이트 모드 대응 (Tailwind CSS 활용)

<br/>

## 🛠 기술 스택 및 도입 배경 (Tech Stack & Reasoning)

### Frontend
- **Next.js 16 (App Router)**
  - 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 통한 초기 로딩 속도 최적화 및 SEO 향상 목적
  - App Router의 Layout과 Page 구조를 활용한 효율적인 라우팅 설계
- **React 19 & TypeScript**
  - 안정적인 컴포넌트 개발 및 정적 타입 체크를 통한 런타임 에러 사전 방지
- **Tailwind CSS 4**
  - 유틸리티 클래스 기반의 빠르고 일관성 있는 스타일링 및 반응형 디자인 구현
- **Zustand**
  - 테스트 진행 상태(현재 질문 인덱스, 사용자의 응답 데이터 등)를 전역적으로 관리하기 위한 가볍고 직관적인 상태 관리 라이브러리 채택
- **Framer Motion**
  - 심리테스트 특성상 질문이 넘어갈 때의 뷰 전환이 잦아, 자연스럽고 흥미로운 사용자 경험(UX)을 제공하기 위한 애니메이션 구현
- **Lucide React**
  - 일관되고 모던한 느낌의 아이콘 적용

<br/>

## 💡 주요 고민점 및 해결 과정 (Troubleshooting & Learnings)

*(이 섹션은 실제 개발하면서 겪었던 고민이나 성능 최적화, 상태 관리 등의 경험을 작성해 주세요. 아래는 예시입니다.)*

**1. 상태 관리의 복잡도 해소 (Zustand 도입)**
- **고민:** 각 질문마다 사용자의 답변을 기록하고, 이전/다음 버튼 클릭 시 상태를 추적해야 함. Props Drilling을 방지하고 전역에서 깔끔하게 관리할 필요성 대두.
- **해결:** Redux보다 보일러플레이트가 적고 직관적인 Zustand를 도입하여, `useTestStore`라는 단일 스토어에서 전체 테스트 진행률과 응답 데이터를 효율적으로 관리.

**2. 자연스러운 화면 전환 애니메이션 (Framer Motion)**
- **고민:** Next.js의 라우팅 환경이나 단순한 상태 변경 시 화면이 뚝뚝 끊기는 느낌이 심리테스트의 몰입도를 방해함.
- **해결:** `Framer Motion`의 `<motion.div>`와 `AnimatePresence`를 활용하여 페이지 진입/이탈 시 부드러운 Fade-in/out 효과와 트랜지션 애니메이션을 구현하여 UX 개선.

<br/>

## 📂 프로젝트 구조 (Directory Structure)

```text
src/
├── app/          # Next.js App Router (페이지 라우팅 및 전역 레이아웃)
│   ├── layout.tsx
│   ├── page.tsx
│   └── test/     # 심리테스트 질문 페이지 등
├── data/         # 질문지 및 결과 매핑 데이터 (상태 비의존성 정적 JSON 데이터)
├── store/        # Zustand 전역 상태 관리 (useTestStore 등)
└── utils/        # 공통 유틸리티 함수 (결과 계산 로직 등)
```

<br/>

## 🚀 설치 및 실행 방법 (Getting Started)

본 프로젝트를 로컬 환경에서 실행하는 방법입니다.

```bash
# 1. 저장소 클론 (Clone Repository)
git clone https://github.com/your-username/find-my-ai.git
cd find-my-ai

# 2. 패키지 설치 (Install Dependencies)
npm install
# or yarn / pnpm / bun install

# 3. 개발 서버 실행 (Run Development Server)
npm run dev
# or yarn dev / pnpm dev / bun dev
```
로컬 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

<br/>

## 🤝 기여 및 피드백

프로젝트에 대한 버그 제보, 기능 제안 및 Pull Request는 언제나 환영합니다!
의견이 있으시다면 Issue를 등록해 주세요.
