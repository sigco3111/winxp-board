# WINXP-BOARD

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

WINXP-BOARD는 Windows XP 인터페이스에서 영감을 받은 온라인 게시판 시스템입니다. 사용자들은 다양한 주제에 대한 게시물을 작성하고, 공유하며 커뮤니티를 형성할 수 있습니다. Windows XP 데스크톱 환경을 시뮬레이션하는 UI를 통해 친숙하고 직관적인 사용자 경험을 제공합니다.

실행주소1 : https://winxp-board.vercel.app/

실행주소2 : https://dev-canvas-pi.vercel.app/

## ⚠️ 중요 공지

### 모바일 사용자를 위한 안내
**[중요]** 모바일 기기에서는 반드시 **가로 화면(Landscape) 모드**로 전환하여 사용해주세요. 앱은 가로 모드에 최적화되어 있으며, 세로 모드에서는 UI 요소가 제대로 표시되지 않을 수 있습니다. 세로 모드에서는 자동으로 화면 회전 안내가 표시됩니다.

## 🌟 주요 기능

- **Windows XP 스타일 인터페이스**
  - 바탕화면, 창 시스템, 작업 표시줄 등 Windows XP 스타일 UI
  - 창 드래그, 리사이즈, 최소화/최대화 기능
  - 사용자 지정 배경화면 설정
  - XP 스타일의 입체적인 버튼과 그라데이션 효과

- **Firebase 인증**
  - 구글 소셜 로그인
  - 익명 사용자 접근 지원
  - 로그인 상태 유지 및 관리

- **게시판 시스템**
  - 카테고리 기반 게시물 관리 (모든 게시물, 공지사항, 자유게시판, 라이브러리, 뉴스 스크랩)
  - 게시물 CRUD 기능
  - 댓글 및 대댓글 지원

- **고급 기능**
  - 마크다운 지원 및 실시간 프리뷰
  - 게시물 북마크 및 Quick Look 미리보기
  - 태그, 작성자, 기간 등 다양한 필터 기반 고급 검색

- **반응형 디자인**
  - 모바일(가로 모드), 태블릿, 데스크톱 지원
  - 모든 화면 크기에 최적화된 레이아웃

## 💻 기술 스택

### 프론트엔드
- React (TypeScript)
- Tailwind CSS
- React Markdown
- React Draggable/Resizable
- Vercel Analytics & Speed Insights

### 백엔드
- Firebase Authentication
- Firestore Database
- Firebase Hosting
- Firebase Security Rules

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js (v14 이상)
- npm 또는 yarn

### 설치 방법

1. 저장소 클론
```bash
git clone https://github.com/yourusername/winxp-board.git
cd winxp-board
```

2. 의존성 패키지 설치
```bash
npm install
# 또는
yarn install
```

3. 환경 변수 설정
- `.env` 파일을 생성하고 Firebase 설정 정보 추가
```
# Firebase 설정
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id


# 관리자 계정 정보
VITE_ADMIN_ID=your_admin_id
VITE_ADMIN_PW=your_admin_pw
```

4. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

5. 빌드
```bash
npm run build
# 또는
yarn build
```

## 📂 프로젝트 구조

```
winxp-board/
├── public/
│   ├── index.html
│   └── assets/
│       ├── favicon/
│       └── wallpapers/
├── src/
│   ├── components/
│   │   ├── Desktop.tsx
│   │   ├── Window.tsx
│   │   ├── BulletinBoard.tsx
│   │   ├── admin/
│   │   │   ├── AdminLayout.tsx
│   │   │   ├── AdminLoginScreen.tsx
│   │   │   ├── categories/
│   │   │   ├── posts/
│   │   │   └── backup/
│   │   └── ...
│   ├── services/
│   │   └── firebase/
│   │       ├── config.ts
│   │       ├── auth.ts
│   │       └── firestore.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── usePosts.ts
│   │   └── ...
│   ├── utils/
│   ├── App.tsx
│   ├── index.tsx
│   └── types.ts
├── .env.local
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🔍 주요 기능 구현

### 1. 인증 시스템
Firebase Authentication을 활용하여 구글 로그인 및 익명 로그인을 지원합니다. 사용자의 인증 상태는 전역적으로 관리되며, 로그인 상태에 따라 접근 가능한 기능이 달라집니다.

### 2. 게시판 시스템
Firestore를 사용하여 게시물 데이터를 저장하고 관리합니다. 카테고리별 게시물 조회, 필터링, 태그 기반 검색 등의 기능을 제공합니다.

### 3. 마크다운 지원
게시물 작성 시 마크다운 문법을 지원하여 풍부한 텍스트 포맷팅이 가능합니다. 실시간 프리뷰 기능을 통해 작성 중인 마크다운의 렌더링 결과를 바로 확인할 수 있습니다.

### 4. Windows XP 스타일 UI
데스크톱 환경, 창 시스템, 작업 표시줄 등 Windows XP의 사용자 경험을 웹에서 구현하였습니다. 파란색 그라데이션 작업 표시줄, 녹색 시작 버튼, 입체적인 창 제어 버튼 등 XP의 특징적인 디자인 요소를 적용했습니다. 창 드래그, 리사이즈, 작업 표시줄 애니메이션 등 OS와 유사한 상호작용을 제공합니다.

## 👑 관리자 기능 (Admin Panel)

WINXP-BOARD는 강력한 관리자 패널을 제공하여 사이트 관리 및 콘텐츠 모더레이션을 효율적으로 수행할 수 있습니다.

### 관리자 계정 접속 방법

1. `/admin` 경로로 이동
2. 관리자 계정으로 로그인 (기본 관리자 계정: admin@winxpboard.com / 비밀번호: 별도 공유)
3. [중요] 로그인 성공후 새로고침을 해야 어드민 대시보드로 이동됩니다.

### 주요 관리자 기능

#### 게시물 관리 (`/admin/posts`)
- 모든 게시물 목록 조회 및 필터링
- 게시물 상세 보기 및 수정
- 부적절한 게시물 삭제 및 차단
- 게시물 통계 대시보드 (조회수, 댓글 수 등)
- 일괄 처리 기능 (다중 선택 삭제, 카테고리 이동 등)

#### 카테고리 관리 (`/admin/categories`)
- 카테고리 생성, 수정, 삭제
- 드래그 앤 드롭으로 카테고리 순서 조정
- 카테고리별 아이콘 설정
- 카테고리 권한 설정 (공개/비공개)
- 서브 카테고리 관리

#### 백업 및 복원 (`/admin/backup`)
- 전체 데이터베이스 백업 (JSON 형식)
- 특정 시점으로 데이터 복원
- 백업 스케줄링 설정
- 자동 백업 기록 관리
- 증분 백업 지원

#### 관리자 대시보드 (`/admin`)
- 사이트 전체 활동 요약
- 신규 가입자 통계
- 게시물 작성 트렌드
- 인기 게시물 및 태그
- 시스템 상태 모니터링

### 보안 기능
- 권한 기반 접근 제어
- 관리자 활동 로그 기록
- 비정상 접근 시도 모니터링
- 2단계 인증 지원
- IP 접근 제한 설정

## 🔄 개발 로드맵

1. **기본 인프라 및 UI 구성** - 프로젝트 초기 설정, Firebase 연동, 기본 UI 컴포넌트
2. **핵심 기능 개발** - 게시글 CRUD, 파일 탐색기 인터페이스, 마크다운 에디터
3. **고급 기능 구현** - 댓글 시스템, 북마크 기능, 고급 검색, 설정
4. **최적화 및 배포** - 반응형 디자인, 성능 최적화, 테스트, Vercel 배포

## 📱 모바일 사용 안내

WINXP-BOARD는 기본적으로 데스크톱 환경을 모바일 기기에서 사용할 때는 다음 사항을 참고해주세요:

1. **가로 화면(Landscape) 필수**
   - 모바일에서는 반드시 가로 모드로 전환하여 사용해주세요.
   - 세로 모드에서는 화면 회전 안내가 표시됩니다.

2. **권장 브라우저**
   - Chrome, Edge, Firefox 최신 버전을 권장합니다.
   - 일부 기능은 모바일 브라우저에서 제한될 수 있습니다.

3. **모바일 최적화 팁**
   - 한 번에 하나의 창만 사용하기
   - 글꼴 크기를 기본 설정으로 유지하기
   - 불필요한 브라우저 탭 닫기
   - 화면 확대/축소는 피하고 기본 화면 비율 사용하기

## 🤝 기여하기

1. Fork 저장소
2. 새로운 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트 링크: https://win11-board.vercel.app/

프로젝트 관리자 - https://win11-board.vercel.app/ > 자유게시판
