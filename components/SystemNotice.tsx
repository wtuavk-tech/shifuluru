import React from 'react';
import { Bell, Flame, Trophy, Megaphone } from 'lucide-react';

export const SystemNotice: React.FC = () => {
  return (
    <div className="bg-[#FFFBE6] border border-[#FFF1B8] text-[#FA8C16] text-sm py-2 px-4 rounded-lg flex items-center overflow-hidden mb-3 shadow-sm">
      <div className="flex-shrink-0 mr-4 font-bold flex items-center gap-1">
        <Bell className="w-4 h-4" />
        系统公告
      </div>
      <div className="flex-1 overflow-hidden relative h-6">
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <div className="animate-marquee flex items-center gap-12 text-[#595959]">
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-[#FF4D4F]" />
                <span className="font-bold text-[#FF4D4F]">紧急通知：</span>
                系统将于今晚 02:00 进行例行维护，预计耗时 15 分钟，请提前保存数据。
              </span>
              <span className="flex items-center gap-1">
                <Trophy className="w-4 h-4 text-[#FAAD14]" />
                <span className="font-bold text-[#1890FF]">喜报：</span>
                恭喜上海浦东区张师傅获得本月“服务之星”称号，奖励现金 500 元！
              </span>
              <span className="flex items-center gap-1">
                <Megaphone className="w-4 h-4 text-[#52C41A]" />
                <span className="font-bold text-[#52C41A]">新功能上线：</span>
                “一键快找”功能已优化，支持按地域和项目模糊搜索，欢迎体验。
              </span>
            </div>
        </div>
      </div>
    </div>
  );
};