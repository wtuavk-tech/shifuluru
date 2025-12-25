import React from 'react';
import { Activity, Search, Plus } from 'lucide-react';

interface DataOverviewProps {
  activeTab: string;
  onToggleFilters: () => void;
  onAddClick?: () => void;
}

export const DataOverview: React.FC<DataOverviewProps> = ({ activeTab, onToggleFilters, onAddClick }) => {
  const isBlacklist = activeTab === '师傅黑名单';

  // Stats for the Blacklist view as seen in the screenshot
  const blacklistStats = [
    { label: '今日黑名单数:', value: '12', color: 'text-[#333]' },
    { label: '当月黑名单单数:', value: '158', color: 'text-[#1890FF]' },
    { label: '上月黑名单数:', value: '142', color: 'text-[#52C41A]' },
    { label: '环比率:', value: '+11.2%', color: 'text-[#FA8C16]' },
  ];

  // Generic stats for other views
  const genericStats = [
    { label: '今日新增条数:', value: '24', color: 'text-[#333]' },
    { label: '当月总计:', value: '1,452', color: 'text-[#1890FF]' },
    { label: '环比增长:', value: '+12.5%', color: 'text-[#52C41A]' },
  ];

  const currentStats = isBlacklist ? blacklistStats : genericStats;

  return (
    <div className="bg-[#F0F8FF] border border-gray-200 shadow-sm rounded-xl px-5 flex items-center justify-between mb-3 h-[60px]">
      {/* Left: Title Section */}
      <div className="flex items-center gap-2 min-w-[140px]">
        <Activity className="w-5 h-5 text-[#1890ff]" />
        <span className="text-[#333] text-[18px] font-bold font-sans">数据概览</span>
      </div>

      {/* Center: Evenly Distributed Stats */}
      <div className="flex-1 flex items-center justify-around px-10">
        {currentStats.map((stat, index) => (
          <div key={index} className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[#5A5E66] text-[12px] font-normal font-sans">
              {stat.label}
            </span>
            <span className={`${stat.color} text-[16px] font-bold font-mono`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Right: Action Button */}
      <div className="flex items-center flex-shrink-0 gap-3">
        {isBlacklist && (
          <div 
            onClick={onAddClick}
            className="flex items-center gap-1 text-white text-[13px] font-medium cursor-pointer hover:bg-blue-600 transition-colors bg-[#1890FF] px-4 py-1.5 rounded-lg shadow-sm"
          >
            <Plus size={14} />
            <span className="font-sans">新增</span>
          </div>
        )}
        <div 
          onClick={onToggleFilters}
          className="flex items-center gap-1.5 text-[#1890FF] text-[13px] font-medium cursor-pointer hover:opacity-80 transition-opacity bg-[#D9ECFF] px-4 py-1.5 rounded-lg border border-[#B8D9FF]"
        >
          <Search size={14} />
          <span className="font-sans">点这高级筛选</span>
        </div>
      </div>
    </div>
  );
};