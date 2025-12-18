import React from 'react';
import { Activity, TrendingUp } from 'lucide-react';

interface DataOverviewProps {
  activeTab: string;
}

export const DataOverview: React.FC<DataOverviewProps> = ({ activeTab }) => {
  return (
    <div className="bg-[#E6F7FF] border border-gray-200 shadow-sm rounded-xl py-3 px-5 flex items-center justify-between mb-3 min-h-[60px]">
      {/* Left Title */}
      <div className="flex items-center gap-2 text-[#003a8c] font-bold text-lg min-w-[120px]">
        <Activity className="w-5 h-5 text-[#1890ff]" />
        <span className="text-[#333]">{activeTab} - 数据概览</span>
      </div>

      {/* Center Stats */}
      <div className="flex-1 flex items-center justify-around px-8">
        <div className="flex items-center gap-2">
          <span className="text-[#666] text-sm">今日新增条数:</span>
          <span className="text-xl font-bold text-[#333]">24</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#666] text-sm">当月总计:</span>
          <span className="text-xl font-bold text-[#333]">1,452</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#666] text-sm">环比增长:</span>
          <div className="flex items-center text-[#52C41A]">
            <span className="text-xl font-bold">+12.5%</span>
            <TrendingUp className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Right side - Empty as collapse button is removed */}
      <div className="min-w-[120px]"></div>
    </div>
  );
};