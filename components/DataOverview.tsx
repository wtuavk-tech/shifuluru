import React from 'react';
import { Activity, Search } from 'lucide-react';

interface DataOverviewProps {
  onToggleFilter: () => void;
  isFilterVisible: boolean;
}

export const DataOverview: React.FC<DataOverviewProps> = ({ onToggleFilter, isFilterVisible }) => {
  return (
    <div className="bg-[#E6F7FF] border border-gray-200 shadow-sm rounded-lg py-3 px-5 flex items-center justify-between mb-3 min-h-[60px]">
      {/* Left Title */}
      <div className="flex items-center gap-2 text-[#003a8c] font-bold text-lg min-w-[120px]">
        <Activity className="w-5 h-5 text-[#1890ff]" />
        <span className="text-[#333]">数据概览</span>
      </div>

      {/* Center Stats */}
      <div className="flex-1 flex items-center justify-around px-8">
        <div className="flex items-center gap-2">
          <span className="text-[#666] text-sm">录单:</span>
          <span className="text-xl font-bold text-[#333]">128</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#666] text-sm">今日派单:</span>
          <span className="text-xl font-bold text-[#333]">42</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#666] text-sm">今日业绩:</span>
          <span className="text-xl font-bold text-[#00a854]">12850.0</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#666] text-sm">收款率:</span>
          <span className="text-xl font-bold text-[#333]">98.5%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#666] text-sm">退款:</span>
          <span className="text-xl font-bold text-[#f5222d]">450.5</span>
        </div>
      </div>

      {/* Right Filter Toggle */}
      <div className="min-w-[120px] flex justify-end">
        <button 
          onClick={onToggleFilter}
          className="flex items-center gap-1 text-[#1890FF] hover:text-[#096DD9] font-medium transition-colors focus:outline-none text-sm"
        >
          <Search className="w-4 h-4" />
          {isFilterVisible ? '收起高级筛选' : '点这高级筛选'}
        </button>
      </div>
    </div>
  );
};