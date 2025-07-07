import React from 'react';

export const FolderIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z"></path>
  </svg>
);

// Windows XP 스타일 폴더 아이콘
export const FolderIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="folder-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFDF9E" />
        <stop offset="100%" stopColor="#FFC56E" />
      </linearGradient>
      <linearGradient id="folder-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C29B51" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#C29B51" stopOpacity="0.9" />
      </linearGradient>
    </defs>
    <path d="M22 6H12L10 4H2C1.45 4 1 4.45 1 5V19C1 19.55 1.45 20 2 20H22C22.55 20 23 19.55 23 19V7C23 6.45 22.55 6 22 6Z" fill="url(#folder-gradient)" stroke="#C29B51" strokeWidth="0.5" />
    <path d="M2.5 5.5H9.5L11.5 7.5H21.5V18.5H2.5V5.5Z" fill="url(#folder-gradient)" stroke="#C29B51" strokeWidth="0.5" />
    <path d="M2 19.5C1.45 19.5 1 19.05 1 18.5V6.5C1 6.8 1.45 7 2 7H9L11 9H22C22.55 9 23 9.45 23 10V18.5C23 19.05 22.55 19.5 22 19.5H2Z" fill="url(#folder-shadow)" stroke="#C29B51" strokeWidth="0.5" />
  </svg>
);

// Windows XP 스타일 열린 폴더 아이콘
export const OpenFolderIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="open-folder-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFDF9E" />
        <stop offset="100%" stopColor="#FFC56E" />
      </linearGradient>
      <linearGradient id="open-folder-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#C29B51" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#C29B51" stopOpacity="0.9" />
      </linearGradient>
    </defs>
    <path d="M22 6H12L10 4H2C1.45 4 1 4.45 1 5V19C1 19.55 1.45 20 2 20H22C22.55 20 23 19.55 23 19V7C23 6.45 22.55 6 22 6Z" fill="url(#open-folder-gradient)" stroke="#C29B51" strokeWidth="0.5" />
    <path d="M22.5 9.5L20.5 18.5H3.5L5.5 9.5H22.5Z" fill="url(#open-folder-shadow)" stroke="#C29B51" strokeWidth="0.5" />
  </svg>
);

export const MessagesSquareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

export const BookmarkIcon = ({ className = "w-6 h-6", fill = "none" }: { className?: string; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
  </svg>
);

// Windows XP 스타일 북마크 아이콘
export const BookmarkIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="bookmark-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7CB0E8" />
        <stop offset="100%" stopColor="#4A85D6" />
      </linearGradient>
    </defs>
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" fill="url(#bookmark-gradient)" stroke="#2B5797" strokeWidth="0.5" />
  </svg>
);

export const TagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
    <path d="M7 7h.01"></path>
  </svg>
);

export const PlusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// Windows XP 스타일 검색 아이콘
export const SearchIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="search-glass-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F0F0F0" />
        <stop offset="100%" stopColor="#D2D2D2" />
      </linearGradient>
      <linearGradient id="search-handle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D2D2D2" />
        <stop offset="100%" stopColor="#A0A0A0" />
      </linearGradient>
    </defs>
    <circle cx="10" cy="10" r="7" fill="url(#search-glass-gradient)" stroke="#808080" strokeWidth="0.5" />
    <circle cx="10" cy="10" r="5" fill="none" stroke="#808080" strokeWidth="0.5" />
    <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="url(#search-handle-gradient)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

export const WifiIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

export const BatteryIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
    <line x1="23" y1="13" x2="23" y2="11"></line>
  </svg>
);

export const SettingsIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24-.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
    </svg>
);

// Windows XP 스타일 설정 아이콘
export const SettingsIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="settings-body-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E8E8E8" />
        <stop offset="100%" stopColor="#B0B0B0" />
      </linearGradient>
      <linearGradient id="settings-gear-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7CB0E8" />
        <stop offset="100%" stopColor="#4A85D6" />
      </linearGradient>
    </defs>
    <rect x="2" y="4" width="20" height="16" rx="2" fill="url(#settings-body-gradient)" stroke="#808080" strokeWidth="0.5" />
    <circle cx="12" cy="12" r="6" fill="url(#settings-gear-gradient)" stroke="#2B5797" strokeWidth="0.5" />
    <path d="M12 8 L13 10 L15 10 L14 12 L15 14 L13 14 L12 16 L11 14 L9 14 L10 12 L9 10 L11 10 Z" fill="#FFFFFF" />
    <rect x="4" y="6" width="16" height="2" fill="#4A85D6" stroke="#2B5797" strokeWidth="0.5" />
    <rect x="4" y="16" width="16" height="2" fill="#4A85D6" stroke="#2B5797" strokeWidth="0.5" />
  </svg>
);

// Windows XP 스타일 도움말 아이콘
export const HelpIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="help-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7CB0E8" />
        <stop offset="100%" stopColor="#4A85D6" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#help-gradient)" stroke="#2B5797" strokeWidth="0.5" />
    <text x="12" y="17" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="middle">?</text>
  </svg>
);

// Windows XP 스타일 문서 아이콘
export const DocumentIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="document-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F0F0F0" />
      </linearGradient>
    </defs>
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="url(#document-gradient)" stroke="#808080" strokeWidth="0.5" />
    <path d="M14 2V8H20L14 2Z" fill="#D0D0D0" stroke="#808080" strokeWidth="0.5" />
    <line x1="8" y1="14" x2="16" y2="14" stroke="#808080" strokeWidth="0.5" />
    <line x1="8" y1="16" x2="16" y2="16" stroke="#808080" strokeWidth="0.5" />
    <line x1="8" y1="18" x2="12" y2="18" stroke="#808080" strokeWidth="0.5" />
  </svg>
);

export const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
);

export const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

// Windows XP 스타일 사용자 아이콘
export const UserIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="user-head-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE0B2" />
        <stop offset="100%" stopColor="#FFCC80" />
      </linearGradient>
      <linearGradient id="user-body-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#7CB0E8" />
        <stop offset="100%" stopColor="#4A85D6" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="8" r="4" fill="url(#user-head-gradient)" stroke="#C89B51" strokeWidth="0.5" />
    <path d="M4 20C4 17 7.6 14 12 14C16.4 14 20 17 20 20" fill="url(#user-body-gradient)" stroke="#2B5797" strokeWidth="0.5" />
    <rect x="4" y="19" width="16" height="1" fill="#2B5797" />
  </svg>
);

export const HashtagIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </svg>
);

export const PencilIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

export const TrashIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

// Windows XP 스타일 휴지통 아이콘
export const TrashIconXP = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="trash-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E8E8E8" />
        <stop offset="100%" stopColor="#C0C0C0" />
      </linearGradient>
    </defs>
    <path d="M8 4L10 2H14L16 4H20V6H4V4H8Z" fill="#A0A0A0" stroke="#808080" strokeWidth="0.5" />
    <path d="M5 7H19L18 22H6L5 7Z" fill="url(#trash-gradient)" stroke="#808080" strokeWidth="0.5" />
    <line x1="9" y1="10" x2="9.5" y2="18" stroke="#808080" strokeWidth="0.5" />
    <line x1="12" y1="10" x2="12" y2="18" stroke="#808080" strokeWidth="0.5" />
    <line x1="15" y1="10" x2="14.5" y2="18" stroke="#808080" strokeWidth="0.5" />
  </svg>
);