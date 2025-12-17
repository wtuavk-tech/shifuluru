import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterBarProps {
    onClose?: () => void;
}

// Compact input group for tighter layout
const InputGroup: React.FC<{ label: string; placeholder?: string; width?: string }> = ({ label, placeholder = "请输入内容", width = "w-28" }) => (
  <div className="flex items-center gap-2">
    <label className="whitespace-nowrap text-gray-600 text-xs">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder} 
      className={`border border-gray-300 rounded px-2 py-1 ${width} text-xs focus:outline-none focus:border-blue-500 placeholder-gray-300`}
    />
  </div>
);

const SelectGroup: React.FC<{ label: string; width?: string }> = ({ label, width = "w-24" }) => (
  <div className="flex items-center gap-2">
    <label className="whitespace-nowrap text-gray-600 text-xs">{label}</label>
    <div className="relative">
      <select className={`appearance-none border border-gray-300 rounded px-2 py-1 ${width} text-xs bg-white focus:outline-none focus:border-blue-500 text-gray-400`}>
        <option value="">请选择</option>
      </select>
      <ChevronDown className="absolute right-2 top-1.5 w-3 h-3 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

export const FilterBar: React.FC<FilterBarProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-4 rounded-lg border-b border-gray-200 relative mb-4">
      <div className="flex flex-col gap-3">
        {/* First Line: 8 items */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <InputGroup label="用户名" />
          <InputGroup label="师傅uid" />
          <InputGroup label="地域" />
          <InputGroup label="项目" />
          <InputGroup label="手机号码" />
          <InputGroup label="近30天完成率" />
          <SelectGroup label="注册方式" />
          <SelectGroup label="接单状态" />
        </div>

        {/* Second Line: 5 items + Actions */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
           <SelectGroup label="派单状态" />
           <SelectGroup label="状态" />
           <SelectGroup label="缴纳保证金类型" />
           <InputGroup label="待缴订单数" />
           <SelectGroup label="是否线下师傅" />
           
           {/* Actions Area */}
           <div className="flex items-center gap-2 ml-4">
             <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs transition-colors">
               搜索
             </button>
             <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-3 py-1 rounded text-xs transition-colors">
               重置
             </button>
             {/* New Button strictly after Reset */}
             <button className="bg-[#1890FF] hover:bg-blue-600 text-white px-3 py-1 rounded text-xs shadow-sm transition-colors">
               新增
             </button>
           </div>
        </div>
      </div>
      
      {/* The "Collapse" Tab */}
      {onClose && (
        <div className="absolute -bottom-5 right-4 z-10">
            <div 
                onClick={onClose}
                className="bg-[#1890FF] text-white text-xs px-4 py-0.5 rounded-b-lg cursor-pointer flex items-center shadow-md hover:bg-blue-600 transition-colors"
            >
                收起
            </div>
        </div>
      )}
    </div>
  );
};