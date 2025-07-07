# WIN11-BOARD 개발 가이드라인

## 프로젝트 개요

### 목적 및 기술 스택
- Windows 11 인터페이스 디자인을 기반으로 한 게시판 시스템 구현
- React와 TypeScript를 사용한 프론트엔드 개발
- Tailwind CSS를 통한 스타일링 및 Windows 11 UI 요소 구현
- Firebase 서비스를 활용한 백엔드 구현 (Authentication, Firestore, Hosting)

### 핵심 기능
- Windows 11 스타일 인터페이스 (작업 표시줄, 시작 메뉴, 창 시스템)
- 게시판 시스템 (카테고리별 게시물, 댓글, 검색 기능)
- 사용자 인증 (Firebase Authentication 활용)
- 마크다운 지원 및 프리뷰 기능
- 관리자 패널 (게시물, 카테고리, 백업 관리)

## 프로젝트 구조

### 주요 디렉토리 구조
- `src/components/`: UI 컴포넌트
- `src/hooks/`: 커스텀 React 훅
- `src/services/`: Firebase 연동 서비스
- `src/utils/`: 유틸리티 함수
- `src/types/`: TypeScript 타입 정의
- `public/assets/`: 이미지, 아이콘, 배경화면 등 정적 자원

### 핵심 컴포넌트
- `Desktop.tsx` → Windows 11 데스크탑 환경 구현
- `Taskbar.tsx` → Windows 11 작업 표시줄 구현
- `WindowControls.tsx` → 창 제어 버튼 구현
- `BulletinBoard.tsx` → 게시판 컴포넌트
- `StartMenu.tsx` → Windows 11 시작 메뉴 구현
- `Dashboard.tsx` → 게시판 대시보드 컴포넌트
- `PostList.tsx` → 게시물 목록 컴포넌트
- `PostDetail.tsx` → 게시물 상세 컴포넌트
- `CommentSection.tsx` → 댓글 섹션 컴포넌트
- `admin/` → 관리자 컴포넌트

## 디자인 표준

### Windows 11 디자인 언어 적용
- **필수** Windows 11 Fluent Design System 디자인 원칙 준수
- **금지** macOS 요소(트래픽 라이트, Dock 등) 사용
- **필수** 모든 UI 요소에 둥근 모서리(rounded corners) 적용 - 최소 `rounded-lg` (8px) 이상

### 색상 팔레트
- 주 색상: `#0078D4` (Windows 11 Blue)
- 보조 색상: `#FFFFFF`, `#F3F3F3`, `#E6E6E6`
- 강조 색상: `#60CDFF`, `#005FB8`
- 경고 색상: `#D13438`
- 성공 색상: `#107C10`

### 그림자 및 효과
- 창 그림자: `shadow-lg` (tailwind) 또는 `box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);`
- 미카 효과: 반투명한 배경 효과로 `backdrop-filter: blur(20px);` 와 `background-color: rgba(255, 255, 255, 0.8);` 활용
- 아크릴 효과: 깊이감을 주는 반투명 효과로 `backdrop-filter: blur(30px);` 와 `background-color: rgba(255, 255, 255, 0.7);` 활용

### 아이콘 표준
- Fluent 디자인 시스템의 아이콘 사용
- 아이콘 크기: 16px, 20px, 24px, 32px으로 표준화
- 선 두께: 1.5px 권장
- 모서리 반경: 2px 최소

## 컴포넌트 확장 가이드

### 새로운 컴포넌트 추가 시 디자인 가이드라인
- Windows 11 디자인 언어를 일관되게 적용
- 기존 컴포넌트의 스타일링 패턴 따르기
- Tailwind CSS 클래스 활용 (커스텀 CSS는 최소화)
- 반응형 디자인 고려 (모바일은 가로 모드 우선)

### 기존 컴포넌트 확장 방법
- 기존 컴포넌트의 구조와 스타일링 패턴 유지
- 새로운 기능 추가 시 기존 로직과의 일관성 유지
- 컴포넌트 props 확장 시 TypeScript 타입 정의 업데이트
- 성능 최적화 고려 (React.memo, useMemo, useCallback 활용)

### 모달 및 팝업 디자인
- 모든 모달에 Windows 11 디자인 언어 적용
- 헤더, 본문, 푸터 구조 유지
- 둥근 모서리와 그림자 효과 적용
- 창 제어 버튼(최소화, 최대화, 닫기)을 오른쪽 상단에 배치

## 코딩 표준

### 네이밍 규칙
- 컴포넌트: PascalCase (예: `WindowControls.tsx`)
- 함수 및 변수: camelCase (예: `handleStartMenuClick`)
- 상수: UPPER_SNAKE_CASE (예: `DEFAULT_WALLPAPER`)
- 불린 변수: is, has, can 등으로 시작 (예: `isStartMenuOpen`)

### 컴포넌트 구조
- 기능별로 폴더 분리 (예: `components/taskbar/`, `components/windows/`)
- 컴포넌트 당 하나의 파일
- 관련 컴포넌트 그룹화 (예: 창 관련 컴포넌트들)

### 주석 표준
- 모든 주요 함수와 컴포넌트에 JSDoc 형식의 주석 추가
- 복잡한 로직에 인라인 주석 추가
- 주석은 한국어로 작성하고 명확하게 기능 설명

## Firebase 사용 규칙

### 환경 변수 설정
- Firebase 설정 정보는 환경 변수로 관리
- `.env` 파일에 API 키 등 민감한 정보 저장
- `import.meta.env.VITE_FIREBASE_*` 형식으로 접근
- 환경 변수 누락 시 적절한 에러 메시지 표시

### 인증 관리
- `src/services/firebase/auth.ts`를 통해 인증 기능 접근
- 구글 로그인 및 익명 로그인 지원
- 사용자 상태 관리는 `useAuth` 훅 활용
- 관리자 인증은 `useAdminAuth` 훅 활용

### Firestore 데이터 접근
- `src/services/firebase/firestore.ts`를 통해 데이터베이스 접근
- CRUD 작업은 전용 함수 사용 (직접 Firestore API 호출 지양)
- 데이터 접근 로직은 커스텀 훅으로 분리 (예: `usePosts`, `useComments`)
- 에러 처리 및 로딩 상태 관리 표준화

### 보안 규칙
- Firestore 보안 규칙 준수
- 인증된 사용자만 데이터 쓰기 접근 허용
- 관리자 권한 확인 로직 통일
- 민감한 작업은 서버 측 검증 필수

## 데이터 모델

### 컬렉션 구조
- `posts`: 게시물 데이터 저장
- `comments`: 댓글 데이터 저장
- `users`: 사용자 정보 저장
- `bookmarks`: 북마크 정보 저장
- `settings`: 게시판 설정 정보 저장

### 문서 스키마
- 게시물(posts):
  ```typescript
  {
    id: string;             // 게시물 고유 ID
    title: string;          // 게시물 제목
    content: string;        // 게시물 내용 (마크다운 형식)
    category: string;       // 게시물 카테고리
    author: {               // 작성자 정보
      name: string;         // 작성자 이름
      avatarUrl: string;    // 작성자 프로필 이미지 URL
    };
    authorId: string;       // 작성자 고유 ID
    tags: string[];         // 게시물 태그 목록
    createdAt: Timestamp;   // 생성 시간
    updatedAt: Timestamp;   // 수정 시간
    commentCount: number;   // 댓글 수
    viewCount: number;      // 조회수
  }
  ```

- 댓글(comments):
  ```typescript
  {
    id: string;             // 댓글 ID
    postId: string;         // 게시물 ID
    content: string;        // 댓글 내용
    author: {               // 작성자 정보
      name: string;         // 작성자 이름
      avatarUrl: string;    // 작성자 프로필 이미지
    };
    authorId: string;       // 작성자 ID
    createdAt: Timestamp;   // 생성 시간
    updatedAt: Timestamp;   // 수정 시간
  }
  ```

### 관계 정의
- 게시물과 댓글: 1:N 관계 (postId로 연결)
- 사용자와 게시물: 1:N 관계 (authorId로 연결)
- 사용자와 북마크: 1:N 관계 (userId로 연결)

## 게시판 기능 구현 가이드

### 게시물 CRUD
- 게시물 작성: `createPost` 함수 사용
- 게시물 조회: `getPosts`, `getPostById` 함수 사용
- 게시물 수정: `updatePost` 함수 사용
- 게시물 삭제: `deletePost` 함수 사용
- 모든 데이터 변경은 Firestore 트랜잭션 활용

### 댓글 시스템
- 댓글 작성: `createComment` 함수 사용
- 댓글 조회: `getCommentsByPostId` 함수 사용
- 댓글 수정/삭제: `updateComment`, `deleteComment` 함수 사용
- 댓글 작성 시 게시물의 commentCount 자동 업데이트

### 검색 및 필터링
- 카테고리별 필터링: `getPostsByCategory` 함수 사용
- 태그 기반 검색: `getPostsByTag` 함수 사용
- 키워드 검색: `searchPosts` 함수 사용
- 정렬 옵션: 최신순, 인기순, 댓글순

## 구현 우선순위

### 1단계: 핵심 기능 강화
- 게시판 성능 최적화
- 댓글 시스템 개선
- 검색 기능 강화

### 2단계: 사용자 경험 개선
- UI/UX 개선
- 반응형 디자인 최적화
- 접근성 향상

### 3단계: 고급 기능 추가
- 알림 시스템 구현
- 사용자 프로필 기능 확장
- 통계 및 분석 기능 추가

## 금지 사항

### 디자인 관련
- **금지** Windows 11 디자인 가이드라인을 벗어난 UI 요소 사용
- **금지** 비표준 색상 팔레트 사용
- **금지** 각진 모서리(sharp corners) 디자인 사용

### 개발 관련
- **금지** Firebase 서비스 직접 호출 (서비스 레이어 우회)
- **금지** 타입 정의 없이 데이터 모델 사용
- **금지** 불필요한 외부 라이브러리 추가
- **금지** 성능에 영향을 주는 불필요한 렌더링 발생

## 의사결정 기준

### 디자인 충돌 시
1. Windows 11 공식 디자인 가이드라인 참조
2. 사용자 경험을 우선시
3. 일관성 유지를 위해 기존 디자인 패턴 고려

### 컴포넌트 구현 우선순위
1. 핵심 UI 요소 (작업 표시줄, 창 제어)
2. 사용자 상호작용 빈도가 높은 컴포넌트
3. 시각적 영향이 큰 요소

## 예시 코드

### Windows 11 스타일 버튼 예시
```tsx
// Windows 11 스타일 버튼 컴포넌트
const Win11Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-[#0078D4] hover:bg-[#005FB8] text-white",
    secondary: "bg-[#E6E6E6] hover:bg-[#CCCCCC] text-black",
    accent: "bg-[#60CDFF] hover:bg-[#4DB8FF] text-black"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

### Firebase 인증 예시
```tsx
// Firebase 인증 훅 사용 예시
import { useAuth } from '../hooks/useAuth';

const LoginComponent: React.FC = () => {
  const { user, signInWithGoogle, signInAnonymously, signOut } = useAuth();
  
  return (
    <div className="p-4 rounded-lg bg-white shadow-lg">
      {user ? (
        <div>
          <p>안녕하세요, {user.displayName || '게스트'}님!</p>
          <button 
            className="px-4 py-2 rounded-lg bg-[#E6E6E6] hover:bg-[#CCCCCC]"
            onClick={signOut}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <button 
            className="w-full px-4 py-2 rounded-lg bg-[#0078D4] hover:bg-[#005FB8] text-white"
            onClick={signInWithGoogle}
          >
            Google로 로그인
          </button>
          <button 
            className="w-full px-4 py-2 rounded-lg bg-[#E6E6E6] hover:bg-[#CCCCCC]"
            onClick={signInAnonymously}
          >
            게스트로 계속하기
          </button>
        </div>
      )}
    </div>
  );
};
```

### 게시물 데이터 접근 예시
```tsx
// 게시물 목록 컴포넌트 예시
import { usePosts } from '../hooks/usePosts';

const PostListComponent: React.FC<{ category?: string }> = ({ category }) => {
  const { posts, loading, error } = usePosts(category);
  
  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생: {error.message}</div>;
  
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div 
          key={post.id} 
          className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <span>{post.author.name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.createdAt.seconds * 1000).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
```

## 참고 자료

### Windows 11 디자인 가이드
- [Microsoft Fluent Design System](https://www.microsoft.com/design/fluent/)
- [Windows 11 Design Documentation](https://docs.microsoft.com/en-us/windows/apps/design/)

### Firebase 문서
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

### React 및 TypeScript 가이드
- [React 공식 문서](https://reactjs.org/docs/getting-started.html)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/) 