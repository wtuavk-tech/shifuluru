import React from 'react';

const menuItems = [
  '师傅库', '完工审核', '保证金退款', '师傅提现', '保证金管理',
  '师傅计酬', '师傅执业', '酬劳规则', '城市划线', '执照管理',
  '帮助中心', '订单支付', '退款申请', '抖音退款', '订单待办', '师傅黑名单'
];

// Ant Design inspired palette to match the screenshot colors
const colorPalette = [
  { bg: 'bg-[#FFFBE6]', border: 'border-[#FFE58F]', text: 'text-[#FAAD14]' }, // Yellow (Gold)
  { bg: 'bg-[#E6F7FF]', border: 'border-[#91D5FF]', text: 'text-[#1890FF]' }, // Blue
  { bg: 'bg-[#F6FFED]', border: 'border-[#B7EB8F]', text: 'text-[#52C41A]' }, // Green
  { bg: 'bg-[#E6FFFB]', border: 'border-[#87E8DE]', text: 'text-[#13C2C2]' }, // Cyan
  { bg: 'bg-[#F9F0FF]', border: 'border-[#D3ADF7]', text: 'text-[#722ED1]' }, // Purple
  { bg: 'bg-[#FFF0F6]', border: 'border-[#FFADD2]', text: 'text-[#EB2F96]' }, // Pink
];

interface NavigationMenuProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ activeItem, setActiveItem }) => {
  return (
    <div className="grid grid-cols-8 gap-3 mb-4">
      {menuItems.map((item, index) => {
        // Cycle through the palette for inactive items to replicate the rainbow look
        const styleIndex = index % colorPalette.length;
        const style = colorPalette[styleIndex];
        const isActive = activeItem === item;

        return (
          <button
            key={item}
            onClick={() => setActiveItem(item)}
            className={`
              h-[42px] border flex items-center justify-center text-[13px] transition-all rounded-lg font-bold tracking-wide
              ${isActive
                ? 'bg-[#FF4D4F] text-white border-[#FF4D4F] shadow-md transform scale-[1.02]'
                : `${style.bg} ${style.border} ${style.text} hover:opacity-80 hover:shadow-sm`
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