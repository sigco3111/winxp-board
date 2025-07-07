import React, { useState, useEffect, useRef } from 'react';
import type { User } from '../types';
import { FolderIcon, SettingsIcon } from './icons';

interface TaskbarProps {
  onOpenHelp: () => void;
  onLogout: () => void;
  user: User;
  onStartMenuToggle: () => void;
  isStartMenuOpen: boolean;
  onOpenBoard: () => void;
  onOpenBookmarks: () => void;
  onOpenSettings: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ 
  onOpenHelp, 
  onLogout, 
  user, 
  onStartMenuToggle,
  isStartMenuOpen,
  onOpenBoard,
  onOpenBookmarks,
  onOpenSettings
}) => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState('');
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const taskbarRef = useRef<HTMLDivElement>(null);

  // 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      setDate(now.toLocaleDateString('ko-KR', { weekday: 'short', month: 'long', day: 'numeric' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (taskbarRef.current && !taskbarRef.current.contains(event.target as Node)) {
        setShowNotificationPanel(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 외부 웹사이트 열기 핸들러
  const handleOpenExternalSite = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div 
      ref={taskbarRef}
      className="fixed bottom-0 left-0 right-0 h-10 bg-winxp-gradient shadow-winxp-window z-50 flex items-center justify-between px-2"
    >
      {/* 시작 버튼 영역 - 좌측 정렬 */}
      <div className="flex items-center space-x-2">
        {/* 시작 버튼 */}
        <button 
          onClick={onStartMenuToggle}
          className={`px-2 py-1 bg-winxp-start-gradient text-white font-winxp font-bold rounded-winxp flex items-center transition-colors ${isStartMenuOpen ? 'shadow-winxp-inset' : 'shadow-winxp-button'}`}
          aria-label="시작 메뉴"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
            <path d="M0 0H7V7H0V0Z" fill="#ffffff" />
            <path d="M9 0H16V7H9V0Z" fill="#ffffff" />
            <path d="M0 9H7V16H0V9Z" fill="#ffffff" />
            <path d="M9 9H16V16H9V9Z" fill="#ffffff" />
          </svg>
          시작
        </button>
        
        {/* 게시판 아이콘 */}
        <button 
          onClick={onOpenBoard}
          className="p-1 bg-winxp-button-gradient border border-gray-400 rounded-winxp shadow-winxp-button hover:bg-winxp-button-hover transition-colors flex items-center justify-center"
          aria-label="게시판"
          title="게시판"
        >
          <div>
            <FolderIcon className="w-5 h-5" />
          </div>
        </button>
        
        {/* 북마크 아이콘 */}
        <button 
          onClick={onOpenBookmarks}
          className="p-1 bg-winxp-button-gradient border border-gray-400 rounded-winxp shadow-winxp-button hover:bg-winxp-button-hover transition-colors flex items-center justify-center"
          aria-label="북마크"
          title="북마크"
        >
          <div>
            <FolderIcon className="w-5 h-5" />
          </div>
        </button>
        
        {/* AI 테크 허브 아이콘 */}
        <button 
          onClick={() => handleOpenExternalSite('https://tech-toolkit-hub.vercel.app/')}
          className="p-1 bg-winxp-button-gradient border border-gray-400 rounded-winxp shadow-winxp-button hover:bg-winxp-button-hover transition-colors flex items-center justify-center"
          aria-label="AI 테크 허브"
          title="AI 테크 허브"
        >
          <div>
            <span className="text-xl">🤖</span>
          </div>
        </button>
        
        {/* 데브캔버스 아이콘 */}
        <button 
          onClick={() => handleOpenExternalSite('https://dev-canvas-pi.vercel.app/')}
          className="p-1 bg-winxp-button-gradient border border-gray-400 rounded-winxp shadow-winxp-button hover:bg-winxp-button-hover transition-colors flex items-center justify-center"
          aria-label="데브캔버스"
          title="데브캔버스"
        >
          <div>
            <span className="text-xl">🎨</span>
          </div>
        </button>
        
        {/* 설정 아이콘 */}
        <button 
          onClick={onOpenSettings}
          className="p-1 bg-winxp-button-gradient border border-gray-400 rounded-winxp shadow-winxp-button hover:bg-winxp-button-hover transition-colors flex items-center justify-center"
          aria-label="설정"
          title="설정"
        >
          <div>
            <SettingsIcon className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* 시스템 트레이 영역 - 우측 정렬 */}
      <div className="flex items-center space-x-2 text-black text-sm">
        {/* 알림 패널 버튼 */}
        <button 
          onClick={() => setShowNotificationPanel(!showNotificationPanel)}
          className={`p-1 bg-winxp-button-gradient border border-gray-400 rounded-winxp shadow-winxp-button hover:bg-winxp-button-hover transition-colors ${showNotificationPanel ? 'shadow-winxp-inset' : ''}`}
          aria-label="알림"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 16C9.1 16 10 15.1 10 14H6C6 15.1 6.9 16 8 16ZM14 11V6.5C14 4.01 12.42 1.92 10 1.18V0.5C10 0.22 9.78 0 9.5 0H6.5C6.22 0 6 0.22 6 0.5V1.18C3.58 1.92 2 4.01 2 6.5V11L0 13V14H16V13L14 11Z" fill="black"/>
          </svg>
        </button>

        {/* 날짜/시간 */}
        <div className="bg-winxp-button-gradient border border-gray-400 rounded-winxp px-2 py-1 shadow-winxp-button flex flex-col items-end">
          <span className="text-xs font-winxp">{time.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}</span>
          <span className="text-xs font-winxp">{date}</span>
        </div>
      </div>

      {/* 알림 패널 */}
      {showNotificationPanel && (
        <div className="absolute bottom-12 right-2 w-80 bg-winxp-window border-2 border-winxp-border rounded-winxp shadow-winxp-window p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold font-winxp">알림</h3>
            <button 
              onClick={() => setShowNotificationPanel(false)}
              className="text-sm text-winxp-blue font-winxp bg-winxp-button-gradient border border-gray-400 rounded-winxp px-2 py-0.5 shadow-winxp-button hover:bg-winxp-button-hover"
            >
              모두 지우기
            </button>
          </div>
          
          <div className="space-y-2">
            <div className="p-3 bg-white border border-gray-300 rounded-winxp hover:bg-winxp-button-hover transition-colors">
              <div className="font-medium font-winxp">시스템</div>
              <p className="text-sm font-winxp">Windows XP 스타일 UI로 업데이트되었습니다.</p>
            </div>
            
            <div className="p-3 bg-white border border-gray-300 rounded-winxp hover:bg-winxp-button-hover transition-colors">
              <div className="font-medium font-winxp">사용자</div>
              <p className="text-sm font-winxp">{user.displayName}님, 환영합니다!</p>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <button 
              onClick={onLogout}
              className="text-sm text-red-500 hover:underline font-winxp bg-winxp-button-gradient border border-gray-400 rounded-winxp px-2 py-0.5 shadow-winxp-button"
            >
              로그아웃
            </button>
            <button 
              onClick={onOpenHelp}
              className="text-sm text-winxp-blue hover:underline font-winxp bg-winxp-button-gradient border border-gray-400 rounded-winxp px-2 py-0.5 shadow-winxp-button"
            >
              도움말
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Taskbar; 