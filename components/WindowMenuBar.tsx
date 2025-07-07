import React, { useState, useEffect, useRef } from 'react';
import type { Menu, MenuItem as MenuItemType } from '../types';

/**
 * 서브메뉴 컴포넌트
 * 메뉴 항목에 하위 메뉴가 있을 때 표시되는 컴포넌트
 * @param items 서브메뉴 항목 배열
 * @param closeAllMenus 모든 메뉴를 닫는 함수
 */
const SubMenu: React.FC<{ items: MenuItemType[]; closeAllMenus: () => void }> = ({ items, closeAllMenus }) => {
  return (
    <div className="absolute left-full -top-1 mt-0 w-48 bg-winxp-window border border-gray-400 rounded-winxp shadow-winxp-window py-1 z-20">
      {items.map((item, index) => (
        <MenuItem key={index} item={item} closeAllMenus={closeAllMenus} />
      ))}
    </div>
  );
};

/**
 * 메뉴 항목 컴포넌트
 * 개별 메뉴 항목을 렌더링하며, 서브메뉴가 있는 경우 마우스 호버 시 표시
 * @param item 메뉴 항목 객체
 * @param closeAllMenus 모든 메뉴를 닫는 함수
 */
const MenuItem: React.FC<{ item: MenuItemType; closeAllMenus: () => void }> = ({ item, closeAllMenus }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // 구분선인지 일반 메뉴 항목인지 확인
  if ('label' in item) {
    const hasSubMenu = !!(item.items && item.items.length > 0);

    /**
     * 메뉴 항목 클릭 처리 함수
     * 비활성화된 항목이 아닌 경우 액션 실행 및 메뉴 닫기
     */
    const handleItemClick = () => {
      if (item.disabled) return;
      if (item.action) {
        item.action();
      }
      if (!hasSubMenu) {
        closeAllMenus();
      }
    };

    return (
      <div
        className="relative"
        onMouseEnter={() => hasSubMenu && !item.disabled && setIsSubMenuOpen(true)}
        onMouseLeave={() => hasSubMenu && !item.disabled && setIsSubMenuOpen(false)}
      >
        <button
          onClick={handleItemClick}
          disabled={item.disabled}
          className={`w-full text-left px-3 py-1 text-black text-sm flex justify-between items-center transition-colors duration-100 font-winxp
          ${item.disabled
            ? 'text-gray-400'
            : 'hover:bg-winxp-blue hover:text-white focus:bg-winxp-blue focus:text-white active:bg-winxp-blue-light active:text-white'
          }`}
        >
          <span>{item.label}</span>
          {hasSubMenu && <span className="text-xs">▶</span>}
        </button>
        {isSubMenuOpen && hasSubMenu && !item.disabled && item.items && (
          <SubMenu items={item.items} closeAllMenus={closeAllMenus} />
        )}
      </div>
    );
  }

  // 구분선 렌더링
  return <div className="h-px bg-gray-400 my-1 mx-2" />;
};

/**
 * 메뉴 드롭다운 컴포넌트
 * 상위 메뉴 클릭 시 표시되는 드롭다운 메뉴
 * @param menu 메뉴 객체
 * @param closeAllMenus 모든 메뉴를 닫는 함수
 */
const MenuDropdown: React.FC<{ menu: Menu; closeAllMenus: () => void }> = ({ menu, closeAllMenus }) => {
  return (
    <div className="absolute left-0 mt-1 w-56 bg-winxp-window border border-gray-400 rounded-winxp shadow-winxp-window py-1 z-10">
      {menu.items.map((item, index) => (
        <MenuItem key={index} item={item} closeAllMenus={closeAllMenus} />
      ))}
    </div>
  );
};

interface WindowMenuBarProps {
  menus: Menu[];
  isActive?: boolean;
}

/**
 * 윈도우 메뉴바 컴포넌트
 * 애플리케이션 창 상단에 위치하는 메뉴바 구현
 * @param menus 메뉴 객체 배열
 * @param isActive 창이 활성화 상태인지 여부
 */
const WindowMenuBar: React.FC<WindowMenuBarProps> = ({ menus, isActive = true }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuBarRef = useRef<HTMLDivElement>(null);

  // 메뉴 외부 클릭 감지를 위한 이벤트 리스너
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuBarRef.current && !menuBarRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  /**
   * 메뉴 토글 처리 함수
   * 같은 메뉴를 클릭하면 닫히고, 다른 메뉴를 클릭하면 해당 메뉴가 열림
   * @param menuName 토글할 메뉴 이름
   */
  const handleMenuToggle = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  }

  return (
    <div 
      ref={menuBarRef} 
      data-menu-bar 
      className={`relative flex items-center h-8 ${isActive ? 'bg-winxp-title-active' : 'bg-winxp-title-inactive'} text-white flex-shrink-0 bg-winxp-gradient`}
    >
      {menus.map((menu) => (
        <div key={menu.name} className="relative">
          <button 
            onClick={() => handleMenuToggle(menu.name)}
            className={`px-3 py-0.5 text-sm font-winxp font-bold transition-colors duration-150 ${activeMenu === menu.name ? 'bg-winxp-blue-light text-white' : 'hover:bg-winxp-blue-light hover:text-white'}`}
          >
            {menu.name}
          </button>
          {activeMenu === menu.name && (
            <MenuDropdown menu={menu} closeAllMenus={() => setActiveMenu(null)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default WindowMenuBar;