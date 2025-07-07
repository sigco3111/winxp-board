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
        {/* 닫기 버튼 - XP 스타일 X 버튼 */}
        <button 
          aria-label="Close window"
          onClick={onClose}
          className="w-[22px] h-[22px] flex items-center justify-center bg-winxp-button-gradient border border-gray-400 rounded-none mr-1 shadow-winxp-button hover:bg-red-500 hover:text-white active:shadow-winxp-inset focus:outline-none"
        >
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 2L9.5 9" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M9.5 2L2.5 9" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        
        {/* 최대화/복원 버튼 - XP 스타일 사각형 버튼 */}
        <button 
          aria-label={isMaximized ? "Restore window" : "Maximize window"}
          onClick={onMaximize}
          className="w-[22px] h-[22px] flex items-center justify-center bg-winxp-button-gradient border border-gray-400 rounded-none mr-1 shadow-winxp-button hover:bg-winxp-button-hover active:shadow-winxp-inset focus:outline-none"
        >
          {isMaximized ? (
            // 복원 아이콘 - XP 스타일
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 1H10V7" stroke="black" strokeWidth="1.5" strokeLinecap="square"/>
              <rect x="1" y="4" width="6" height="6" stroke="black" strokeWidth="1.5"/>
            </svg>
          ) : (
            // 최대화 아이콘 - XP 스타일
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="9" height="9" stroke="black" strokeWidth="1.5"/>
            </svg>
          )}
        </button>
        
        {/* 최소화 버튼 - XP 스타일 밑줄 버튼 */}
        <button 
          aria-label="Minimize window"
          onClick={onMinimize}
          className="w-[22px] h-[22px] flex items-center justify-center bg-winxp-button-gradient border border-gray-400 rounded-none mr-1 shadow-winxp-button hover:bg-winxp-button-hover active:shadow-winxp-inset focus:outline-none"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6H9" stroke="black" strokeWidth="1.5" strokeLinecap="square"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WindowControls; 