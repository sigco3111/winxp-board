/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'win11-blue': '#0078d4',
        'win11-light-blue': '#50e6ff',
        'win11-gray': '#f3f3f3',
        'win11-dark': '#202020',
        'win11-light': '#ffffff',
        'win11-border': '#e6e6e6',
        'win11-window': 'rgba(255, 255, 255, 0.7)',
        'win11-sidebar': '#fafafa',
        'win11-accent': '#0078d4',
        'win11-taskbar': 'rgba(243, 243, 243, 0.85)',
        'win11-start': 'rgba(243, 243, 243, 0.9)',
        // Windows XP 색상 정의
        'winxp-blue': '#0A246A',      // XP 기본 파란색
        'winxp-blue-light': '#3A6EA5', // XP 밝은 파란색
        'winxp-olive': '#7ba05b',     // XP 올리브 그린
        'winxp-silver': '#b9babc',    // XP 실버
        'winxp-window': '#ECE9D8',    // XP 창 배경색
        'winxp-taskbar-start': '#2A8734', // XP 시작 버튼 녹색
        'winxp-taskbar-from': '#245edc', // XP 작업 표시줄 그라데이션 시작
        'winxp-taskbar-to': '#3a81f3',  // XP 작업 표시줄 그라데이션 끝
        'winxp-border': '#0c5fcb',    // XP 창 테두리 색상
        'winxp-title-active': '#0A246A', // XP 활성 창 제목 표시줄
        'winxp-title-inactive': '#7A96DF', // XP 비활성 창 제목 표시줄
        'winxp-button-hover': '#e3e9ff', // XP 버튼 호버 색상
      },
      fontFamily: {
        'win11': ['Segoe UI', 'Segoe UI Variable', 'system-ui', 'sans-serif'],
        'winxp': ['Tahoma', 'Franklin Gothic', 'Trebuchet MS', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'win11-window': '0 8px 25px rgba(0, 0, 0, 0.15)',
        'win11-taskbar': '0 -2px 10px rgba(0, 0, 0, 0.05)',
        'win11-card': '0 2px 8px rgba(0, 0, 0, 0.12)',
        'win11-button': '0 2px 5px rgba(0, 0, 0, 0.1)',
        'win11-dropdown': '0 4px 15px rgba(0, 0, 0, 0.15)',
        // Windows XP 그림자 효과
        'winxp-window': '2px 2px 3px rgba(0, 0, 0, 0.3)',
        'winxp-button': '1px 1px 1px rgba(0, 0, 0, 0.2)',
        'winxp-inset': 'inset 1px 1px 1px rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        'win11': '30px',
      },
      borderRadius: {
        'win11': '8px',
        'win11-lg': '12px',
        'win11-xl': '16px',
        // Windows XP 모서리 반경
        'winxp': '3px',
        'winxp-lg': '5px',
      },
      backgroundImage: {
        // Windows XP 그라데이션 배경
        'winxp-gradient': 'linear-gradient(to bottom, #245edc, #3a81f3)',
        'winxp-button-gradient': 'linear-gradient(to bottom, #ffffff, #e1e1e1)',
        'winxp-start-gradient': 'linear-gradient(to bottom, #2A8734, #1c5e21)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 