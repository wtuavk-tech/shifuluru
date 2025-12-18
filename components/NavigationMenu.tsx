import React from 'react';

const menuItems = [
  '师傅库', '完工审核', '保证金退款', '师傅提现', '保证金管理',
  '师傅计酬', '师傅执业', '酬劳规则', '城市划线', '执照管理',
  '帮助中心', '订单支付', '退款申请', '抖音退款', '订单待办'
];

interface NavigationMenuProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ activeItem, setActiveItem }) => {
  return (
    <div className="grid grid-cols-8 gap-2 mb-4">
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => setActiveItem(item)}
          className={`
            h-6 border flex items-center justify-center text-[11px] transition-all rounded shadow-sm font-medium
            ${activeItem === item
              ? 'bg-[#1890FF] text-white border-[#1890FF]'
              : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400 hover:text-blue-500'
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};