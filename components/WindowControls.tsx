import React from 'react';

interface WindowControlsProps {
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  isMaximized?: boolean;
}

const WindowControls: React.FC<WindowControlsProps> = ({ 
  onClose, 
  onMinimize, 
  onMaximize,
  isMaximized = false 
}) => {
  return (
    <div className="flex items-center">
      {/* Windows XP 스타일 창 제어 버튼 - 오른쪽에서 왼쪽으로 닫기, 최대화, 최소화 순 */}
      <div className="flex flex-row-reverse">
        {/* 닫기 버튼 */}
        <button 
          aria-label="Close window"
          onClick={onClose}
          className="w-18 h-18 flex items-center justify-center bg-winxp-button-gradient border border-gray-400 rounded-winxp mr-1 shadow-winxp-button hover:bg-red-600 hover:text-white transition-colors duration-150 focus:outline-none"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.279 0.279C0.651 -0.093 1.256 -0.093 1.628 0.279L5 3.651L8.372 0.279C8.744 -0.093 9.349 -0.093 9.721 0.279C10.093 0.651 10.093 1.256 9.721 1.628L6.349 5L9.721 8.372C10.093 8.744 10.093 9.349 9.721 9.721C9.349 10.093 8.744 10.093 8.372 9.721L5 6.349L1.628 9.721C1.256 10.093 0.651 10.093 0.279 9.721C-0.093 9.349 -0.093 8.744 0.279 8.372L3.651 5L0.279 1.628C-0.093 1.256 -0.093 0.651 0.279 0.279Z" fill="#000"/>
          </svg>
        </button>
        
        {/* 최대화/복원 버튼 */}
        <button 
          aria-label={isMaximized ? "Restore window" : "Maximize window"}
          onClick={onMaximize}
          className="w-18 h-18 flex items-center justify-center bg-winxp-button-gradient border border-gray-400 rounded-winxp mr-1 shadow-winxp-button hover:bg-winxp-button-hover transition-colors duration-150 focus:outline-none"
        >
          {isMaximized ? (
            // 복원 아이콘
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 0H10V7.5H8.75V1.25H2.5V0Z" fill="#000"/>
              <path d="M0 2.5H7.5V10H0V2.5ZM1.25 3.75V8.75H6.25V3.75H1.25Z" fill="#000"/>
            </svg>
          ) : (
            // 최대화 아이콘
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H10V10H0V0ZM1.25 1.25V8.75H8.75V1.25H1.25Z" fill="#000"/>
            </svg>
          )}
        </button>
        
        {/* 최소화 버튼 */}
        <button 
          aria-label="Minimize window"
          onClick={onMinimize}
          className="w-18 h-18 flex items-center justify-center bg-winxp-button-gradient border border-gray-400 rounded-winxp mr-1 shadow-winxp-button hover:bg-winxp-button-hover transition-colors duration-150 focus:outline-none"
        >
          <svg width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="1" fill="#000"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WindowControls; 