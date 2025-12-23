import React from 'react';

const menuItems = [
  '师傅库', '完工审核', '保证金退款', '师傅提现', '保证金管理',
  '师傅计酬', '师傅执业', '酬劳规则', '城市划线', 
  '执照管理', '帮助中心', '订单支付', '退款申请', '抖音退款', 
  '订单待办', '师傅黑名单', '试单奖励'
];

interface NavigationMenuProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ activeItem, setActiveItem }) => {
  return (
    <div className="grid grid-cols-9 gap-3 mb-4">
      {menuItems.map((item) => {
        const isActive = activeItem === item;
        return (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`
              h-[34px] flex items-center justify-center text-[13px] transition-all rounded-lg font-bold tracking-wide border
              ${isActive
                ? 'bg-[#1890FF] text-white border-[#1890FF] shadow-md transform scale-[1.02]' 
                : 'bg-[#F0F9FE] text-[#1890FF] border-[#91D5FF] hover:bg-[#BAE7FF] hover:shadow-sm'
              }
            `}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};