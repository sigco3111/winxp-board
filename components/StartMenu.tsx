import React, { useRef, useEffect } from 'react';
import type { User } from '../types';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  onLogout: () => void;
  onOpenBoard: () => void;
  onOpenSettings: () => void;
  onOpenHelp: () => void;
  onOpenBookmarks: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ 
  isOpen, 
  onClose, 
  user, 
  onLogout,
  onOpenBoard,
  onOpenSettings,
  onOpenHelp,
  onOpenBookmarks
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // 메뉴 항목 클릭 핸들러 - 기능 실행 후 시작 메뉴 닫기
  const handleMenuItemClick = (action: () => void) => {
    action();
    onClose();
  };

  // 외부 웹사이트 열기 핸들러
  const handleOpenExternalSite = (url: string) => {
    window.open(url, '_blank');
    onClose();
  };

  // 시작 메뉴가 닫혀있으면 렌더링하지 않음
  if (!isOpen) return null;

  // 고정됨 앱 목록 (기능 있는 것만 유지)
  const pinnedApps = [
    { name: '게시판', icon: '📝', color: 'bg-blue-100', onClick: onOpenBoard },
    { name: '북마크', icon: '🔖', color: 'bg-yellow-100', onClick: onOpenBookmarks },
    { name: 'AI 테크 허브', icon: '🤖', color: 'bg-purple-100', onClick: () => handleOpenExternalSite('https://tech-toolkit-hub.vercel.app/') },
    { name: '데브캔버스', icon: '🎨', color: 'bg-green-100', onClick: () => handleOpenExternalSite('https://dev-canvas-pi.vercel.app/') },
    { name: '설정', icon: '⚙️', color: 'bg-gray-100', onClick: onOpenSettings },
    { name: '도움말', icon: '❓', color: 'bg-red-100', onClick: onOpenHelp },
  ];

  return (
    <div 
      ref={menuRef}
      className="absolute bottom-10 left-0 w-[400px] bg-winxp-window border-2 border-winxp-border rounded-winxp shadow-winxp-window z-50 overflow-hidden"
    >
      {/* 상단 영역: Windows XP 그라데이션 바 */}
      <div className="h-8 bg-winxp-gradient text-white font-winxp flex items-center px-4 font-bold">
        <div className="flex items-center">
          <div 
            className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-winxp-blue mr-2 font-bold"
          >
            {user.displayName.charAt(0).toUpperCase()}
          </div>
          {user.displayName}
        </div>
      </div>
      
      <div className="flex">
        {/* 좌측 패널: 고정된 항목 목록 */}
        <div className="w-48 bg-winxp-window border-r border-gray-300 p-2">
          {/* 사용자 정보 영역 */}
          <div className="p-2 mb-4 bg-white border border-gray-300 rounded-winxp">
            <div className="text-winxp-blue font-winxp font-bold mb-1">
              {user.displayName}
            </div>
            <div className="text-xs text-gray-600 font-winxp">
              {user.email}
            </div>
          </div>
          
          {/* 고정 항목 목록 */}
          <div className="space-y-1">
            {pinnedApps.map((app, index) => (
              <button 
                key={index} 
                onClick={() => handleMenuItemClick(app.onClick)}
                className="flex items-center w-full p-1 hover:bg-winxp-blue hover:text-white rounded-winxp transition-colors font-winxp text-sm"
              >
                <div className={`w-6 h-6 ${app.color} rounded-sm flex items-center justify-center text-lg mr-2`}>
                  {app.icon}
                </div>
                <span>{app.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* 우측 패널: 프로그램 목록 */}
        <div className="flex-1 p-2">
          <div className="font-winxp font-bold text-sm mb-2 text-winxp-blue">
            모든 프로그램
          </div>
          
          <div className="space-y-1">
            <div 
              onClick={() => handleMenuItemClick(onOpenBoard)}
              className="flex items-center p-1 hover:bg-winxp-blue hover:text-white rounded-winxp transition-colors cursor-pointer font-winxp text-sm"
            >
              <div className="w-6 h-6 bg-blue-100 rounded-sm flex items-center justify-center text-lg mr-2">
                📝
              </div>
              <span>게시판</span>
            </div>
            
            <div 
              onClick={() => handleMenuItemClick(onOpenBookmarks)}
              className="flex items-center p-1 hover:bg-winxp-blue hover:text-white rounded-winxp transition-colors cursor-pointer font-winxp text-sm"
            >
              <div className="w-6 h-6 bg-yellow-100 rounded-sm flex items-center justify-center text-lg mr-2">
                🔖
              </div>
              <span>북마크</span>
            </div>
            
            <div 
              onClick={() => handleOpenExternalSite('https://tech-toolkit-hub.vercel.app/')}
              className="flex items-center p-1 hover:bg-winxp-blue hover:text-white rounded-winxp transition-colors cursor-pointer font-winxp text-sm"
            >
              <div className="w-6 h-6 bg-purple-100 rounded-sm flex items-center justify-center text-lg mr-2">
                🤖
              </div>
              <span>AI 테크 허브</span>
            </div>
            
            <div 
              onClick={() => handleOpenExternalSite('https://dev-canvas-pi.vercel.app/')}
              className="flex items-center p-1 hover:bg-winxp-blue hover:text-white rounded-winxp transition-colors cursor-pointer font-winxp text-sm"
            >
              <div className="w-6 h-6 bg-green-100 rounded-sm flex items-center justify-center text-lg mr-2">
                🎨
              </div>
              <span>데브캔버스</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 하단 영역: 로그아웃 및 종료 버튼 */}
      <div className="bg-winxp-window border-t border-gray-300 p-2 flex justify-between">
        <button 
          onClick={onOpenHelp}
          className="flex items-center text-sm bg-winxp-button-gradient border border-gray-400 rounded-winxp px-3 py-1 shadow-winxp-button hover:bg-winxp-button-hover font-winxp"
        >
          <span className="mr-1">❓</span>
          도움말
        </button>
        
        <button 
          onClick={onLogout}
          className="flex items-center text-sm bg-winxp-button-gradient border border-gray-400 rounded-winxp px-3 py-1 shadow-winxp-button hover:bg-winxp-button-hover font-winxp"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
            <path d="M8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1ZM8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM4 7.5V8.5H10.5V11L14 8L10.5 5V7.5H4Z" fill="black"/>
          </svg>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default StartMenu; 