/**
 * 데스크톱 화면을 표현하는 컴포넌트
 * Windows XP 스타일의 데스크톱 환경을 제공합니다.
 */
import React, { useState, useEffect } from 'react';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import { FolderIcon, SettingsIcon } from './icons';
import HelpModal from './HelpModal';
import BulletinBoard from './BulletinBoard';
import { User } from '../types';
import SettingsModal from './SettingsModal';

// 더 이상 사용하지 않는 로컬 스토리지 키 제거
// const LOGOUT_FLAG_KEY = 'win11_board_force_logout';
// 배경화면 저장을 위한 로컬 스토리지 키
const WALLPAPER_KEY = 'winxp_board_wallpaper';
const WALLPAPER_TYPE_KEY = 'winxp_board_wallpaper_type';
// 기본 배경화면 경로
const DEFAULT_WALLPAPER = '/assets/wallpapers/winxp_bliss.jpg';
// 대체 배경색
const FALLBACK_BG_COLOR = '#3A6EA5'; // Windows XP 기본 파란색

type BoardState = 'closed' | 'board' | 'bookmarks';

/**
 * Desktop 컴포넌트 속성
 */
interface DesktopProps {
  /** 현재 로그인된 사용자 정보 */
  user: User;
  /** 게시판 열기 핸들러 */
  onOpenBoard: () => void;
  /** 로그아웃 핸들러 */
  onLogout: () => Promise<void>;
}

/**
 * Desktop 컴포넌트
 */
const Desktop: React.FC<DesktopProps> = ({ user, onOpenBoard, onLogout }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isStartMenuOpen, setStartMenuOpen] = useState(false);
  const [boardState, setBoardState] = useState<BoardState>('closed');
  const [wallpaper, setWallpaper] = useState<string>(() => {
    const type = localStorage.getItem(WALLPAPER_TYPE_KEY);
    if (type === 'default' || !type) {
      return DEFAULT_WALLPAPER;
    } else {
      return localStorage.getItem(WALLPAPER_KEY) || DEFAULT_WALLPAPER;
    }
  });
  const [defaultImageError, setDefaultImageError] = useState<boolean>(false);

  useEffect(() => {
    if (wallpaper === DEFAULT_WALLPAPER) {
      const img = new Image();
      img.onload = () => setDefaultImageError(false);
      img.onerror = () => setDefaultImageError(true);
      img.src = DEFAULT_WALLPAPER;
    }
  }, [wallpaper]);

  // 외부 웹사이트 열기 핸들러
  const handleOpenExternalSite = (url: string) => {
    window.open(url, '_blank');
  };

  const desktopItems = [
    { id: 'bulletin-board', name: '게시판', Icon: FolderIcon, onOpen: () => setBoardState('board'), color: 'text-winxp-blue' },
    { id: 'bookmark', name: '북마크', Icon: FolderIcon, onOpen: () => setBoardState('bookmarks'), color: 'text-winxp-blue' },
    { id: 'settings', name: '설정', Icon: SettingsIcon, onOpen: () => setSettingsModalOpen(true), color: 'text-gray-600' },
  ];

  const handleCloseBoard = () => {
    setBoardState('closed');
  };

  const handleWallpaperChange = (wallpaperUrl: string) => {
    if (wallpaperUrl) {
      setWallpaper(wallpaperUrl);
      setDefaultImageError(false);
    } else {
      setWallpaper(DEFAULT_WALLPAPER);
      const img = new Image();
      img.onload = () => setDefaultImageError(false);
      img.onerror = () => setDefaultImageError(true);
      img.src = DEFAULT_WALLPAPER;
    }
  };

  const handleLogout = async () => {
    // 더 이상 로컬 스토리지 플래그를 사용하지 않음
    // localStorage.setItem(LOGOUT_FLAG_KEY, 'true');
    try {
      await onLogout();
    } catch (error) {
      console.error('Desktop: 로그아웃 오류:', error);
      // 더 이상 로컬 스토리지 플래그를 사용하지 않음
      // localStorage.setItem(LOGOUT_FLAG_KEY, 'true');
    }
  };

  const handleStartMenuToggle = () => {
    setStartMenuOpen(!isStartMenuOpen);
  };

  // 게시판 열기 핸들러
  const handleOpenBoard = () => {
    setBoardState('board');
  };

  // 북마크 열기 핸들러
  const handleOpenBookmarks = () => {
    setBoardState('bookmarks');
  };

  // 설정 열기 핸들러
  const handleOpenSettings = () => {
    setSettingsModalOpen(true);
  };

  // 자동 로그아웃을 유발하는 불필요한 useEffect 제거
  /*
  useEffect(() => {
    const checkLogoutFlag = () => {
      if (localStorage.getItem(LOGOUT_FLAG_KEY) === 'true') {
        onLogout().catch(err => console.error('자동 로그아웃 오류:', err));
      }
    };
    const interval = setInterval(checkLogoutFlag, 1000);
    return () => clearInterval(interval);
  }, [onLogout]);
  */

  const bgStyle = defaultImageError || (wallpaper === DEFAULT_WALLPAPER && defaultImageError) ?
    { backgroundColor: FALLBACK_BG_COLOR } :
    {
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };

  return (
    <div
      className="w-screen h-screen overflow-hidden"
      onClick={() => {
        setSelectedId(null);
        if (isStartMenuOpen) setStartMenuOpen(false);
      }}
      style={bgStyle}
    >
      {/* 데스크탑 아이콘 영역 */}
      <div className="w-full h-full p-4 flex flex-col items-start">
        {desktopItems.map(item => (
          <button
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedId(item.id);
              item.onOpen();
            }}
            className="flex flex-col items-center w-20 h-24 mb-2 space-y-1 focus:outline-none rounded-winxp p-2 transition-colors hover:bg-white/10"
          >
            <div className={`w-12 h-12 ${item.color} flex items-center justify-center rounded-winxp bg-white/80 shadow-winxp-window mb-1`}>
              <item.Icon className="w-8 h-8" />
            </div>
            <span className={`text-sm text-black text-center px-1 py-0.5 rounded-sm ${selectedId === item.id ? 'bg-winxp-blue text-white' : 'bg-white/70'}`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>

      {/* 작업 표시줄 */}
      <Taskbar
        onOpenHelp={() => setHelpModalOpen(true)}
        onLogout={handleLogout}
        user={user}
        onStartMenuToggle={handleStartMenuToggle}
        isStartMenuOpen={isStartMenuOpen}
        onOpenBoard={handleOpenBoard}
        onOpenBookmarks={handleOpenBookmarks}
        onOpenSettings={handleOpenSettings}
      />

      {/* 시작 메뉴 */}
      <StartMenu
        isOpen={isStartMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        user={user}
        onLogout={handleLogout}
        onOpenBoard={handleOpenBoard}
        onOpenSettings={handleOpenSettings}
        onOpenHelp={() => setHelpModalOpen(true)}
        onOpenBookmarks={handleOpenBookmarks}
      />

      {/* 모달 컴포넌트들 */}
      {isHelpModalOpen && <HelpModal isOpen={isHelpModalOpen} onClose={() => setHelpModalOpen(false)} />}
      {isSettingsModalOpen && (
        <SettingsModal
          isOpen={isSettingsModalOpen}
          onClose={() => setSettingsModalOpen(false)}
          onWallpaperChange={handleWallpaperChange}
        />
      )}
      {boardState !== 'closed' && (
        <BulletinBoard
          onClose={handleCloseBoard}
          user={user}
          initialShowBookmarks={boardState === 'bookmarks'}
        />
      )}
    </div>
  );
};

export default Desktop;
