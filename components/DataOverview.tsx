import React from 'react';
import { Activity, Search } from 'lucide-react';

interface DataOverviewProps {
  onToggleFilter: () => void;
  isFilterVisible: boolean;
}

export const DataOverview: React.FC<DataOverviewProps> = ({ onToggleFilter, isFilterVisible }) => {
  return (
    <div className="bg-[#E6F7FF] border border-[#91D5FF] rounded-sm p-4 flex items-center justify-between mb-3">
      {/* Left Title */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-[#0050B3] font-bold text-lg">
          <Activity className="w-6 h-6" />
          数据概览
        </div>
      </div>

      {/* Center Stats */}
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">未审核数:</span>
          <span className="text-2xl font-bold text-[#333]">158</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">今日入库数:</span>
          <span className="text-2xl font-bold text-[#1890FF]">126</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">昨日入库数:</span>
          <span className="text-2xl font-bold text-[#52C41A]">79.7%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">当月入库数:</span>
          <span className="text-2xl font-bold text-[#FA8C16]">12850</span>
        </div>
      </div>

      {/* Right Filter Toggle */}
      <div>
        <button 
          onClick={onToggleFilter}
          className="flex items-center gap-1 text-[#1890FF] hover:text-[#096DD9] font-medium transition-colors focus:outline-none"
        >
          <Search className="w-4 h-4" />
          {isFilterVisible ? '收起高级筛选' : '点这高级筛选'}
        </button>
      </div>
    </div>
  );
};