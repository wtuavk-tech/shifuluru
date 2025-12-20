import React from 'react';
import { Bell, Megaphone } from 'lucide-react';

export const SystemNotice: React.FC = () => {
  // Use a static date to match screenshot or dynamic
  const today = "2025-11-19";

  return (
    <div className="bg-[#111827] text-white text-[13px] py-2 px-3 rounded-lg flex items-center overflow-hidden mb-4 shadow-md h-[48px]">
      {/* Left Badge */}
      <div className="flex-shrink-0 mr-4 bg-[#FF4D4F] text-white px-3 py-1.5 rounded flex items-center gap-2 font-bold shadow-sm select-none">
        <span>主要公告</span>
        <Bell className="w-3.5 h-3.5 fill-current" />
      </div>
      
      {/* Marquee Content */}
      <div className="flex-1 overflow-hidden relative h-6 flex items-center">
        <div className="flex items-center gap-3 w-full">
            <Megaphone className="w-4 h-4 text-[#FF4D4F] flex-shrink-0" />
            <div className="overflow-hidden whitespace-nowrap w-full relative h-6">
                <div className="absolute top-0 left-0 w-full h-full flex items-center">
                   <div className="animate-marquee inline-block text-gray-200">
                      <span className="mr-12">关于 2025 年度秋季职级晋升评审的通知：点击下方详情以阅读完整公告内容。请所有相关人员务必在截止日期前完成确认。</span>
                      <span className="mr-12 text-[#E6F7FF]">温馨提示：系统将于今晚 02:00 进行例行维护，预计耗时 15 分钟，请提前保存数据。</span>
                   </div>
                </div>
            </div>
        </div>
      </div>

      {/* Right Date Badge */}
      <div className="flex-shrink-0 ml-4 hidden sm:block">
        <span className="bg-[#1F2937] border border-gray-700 text-gray-400 px-3 py-1 rounded text-xs font-mono tracking-wide">
          {today}
        </span>
      </div>
    </div>
  );
};