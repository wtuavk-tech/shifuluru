import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
    onClose?: () => void;
}

// Updated InputGroup: Fixed label width (w-28), Fixed height (h-7) for alignment
const InputGroup: React.FC<{ label: string; placeholder?: string }> = ({ label, placeholder = "请输入内容" }) => (
  <div className="flex items-center gap-2 w-full">
    <label className="whitespace-nowrap text-gray-600 text-xs w-28 text-right flex-shrink-0">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder} 
      className="border border-gray-300 rounded px-2 h-7 w-full text-xs focus:outline-none focus:border-blue-500 placeholder-gray-300"
    />
  </div>
);

// Updated SelectGroup: Fixed label width (w-28), Fixed height (h-7) for alignment
const SelectGroup: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-2 w-full">
    <label className="whitespace-nowrap text-gray-600 text-xs w-28 text-right flex-shrink-0">{label}</label>
    <div className="relative w-full">
      <select className="appearance-none border border-gray-300 rounded px-2 h-7 w-full text-xs bg-white focus:outline-none focus:border-blue-500 text-gray-400">
        <option value="">请选择</option>
      </select>
      <ChevronDown className="absolute right-2 top-2 w-3 h-3 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

export const FilterBar: React.FC<FilterBarProps> = () => {
  return (
    <div className="bg-white p-4 rounded-lg border-b border-gray-200 relative mb-4 overflow-x-auto">
      <div className="grid grid-cols-8 gap-x-4 gap-y-3 min-w-[1600px] items-center">
        {/* Row 1 Items */}
        <InputGroup label="用户名" />
        <InputGroup label="师傅uid" />
        <InputGroup label="地域" />
        <InputGroup label="项目" />
        <InputGroup label="手机号码" />
        <InputGroup label="近30天完成率" />
        <SelectGroup label="注册方式" />
        <SelectGroup label="接单状态" />

        {/* Row 2 Items - Strictly aligned with columns above */}
        <SelectGroup label="派单状态" />
        <SelectGroup label="状态" />
        <SelectGroup label="缴纳保证金类型" />
        <InputGroup label="待缴订单数" />
        <SelectGroup label="是否线下师傅" />
        
        {/* Actions Area - Aligned to the right of the page (Column 8) */}
        <div className="col-start-8 flex items-center justify-end gap-2 w-full">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 h-7 rounded text-xs transition-colors whitespace-nowrap flex items-center justify-center">
            搜索
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-3 h-7 rounded text-xs transition-colors whitespace-nowrap flex items-center justify-center">
            重置
            </button>
            <button className="bg-[#1890FF] hover:bg-blue-600 text-white px-3 h-7 rounded text-xs shadow-sm transition-colors whitespace-nowrap flex items-center justify-center">
            新增
            </button>
        </div>
      </div>
    </div>
  );
};