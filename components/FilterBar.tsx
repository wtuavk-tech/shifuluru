import React from 'react';
import { Search, ChevronDown, Clock } from 'lucide-react';

export const FilterBar: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-sm border-b border-gray-200 relative">
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
        
        {/* Add Button - Placed before creator input as requested */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-1.5 rounded text-sm shadow-sm transition-colors font-medium">
          新增
        </button>

        {/* Creator Input */}
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap">录入人</label>
          <input 
            type="text" 
            placeholder="请输入内容" 
            className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500 placeholder-gray-300"
          />
        </div>

        {/* Status Select */}
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap">是否入库</label>
          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded px-3 py-1.5 w-40 bg-white focus:outline-none focus:border-blue-500 text-gray-400">
              <option value="">请选择</option>
              <option value="stocked">已入库</option>
              <option value="unstocked">未入库</option>
            </select>
            <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Date Range */}
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap">录入时间</label>
          <div className="flex items-center border border-gray-300 rounded overflow-hidden w-80">
            <div className="px-2 text-gray-400 border-r border-gray-100">
                <Clock className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="开始日期" 
              className="px-2 py-1.5 w-full focus:outline-none placeholder-gray-300 text-center"
            />
            <span className="text-gray-400 px-1">至</span>
            <input 
              type="text" 
              placeholder="结束日期" 
              className="px-2 py-1.5 w-full focus:outline-none placeholder-gray-300 text-center"
            />
          </div>
        </div>

        {/* Details Input */}
        <div className="flex items-center gap-2">
          <label className="whitespace-nowrap">详情</label>
          <input 
            type="text" 
            placeholder="请输入内容" 
            className="border border-gray-300 rounded px-3 py-1.5 w-48 focus:outline-none focus:border-blue-500 placeholder-gray-300"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 ml-auto">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded text-sm transition-colors">
            搜索
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-4 py-1.5 rounded text-sm transition-colors">
            重置
          </button>
        </div>
      </div>
      
      {/* The "Collapse" Tab hanging from the bottom right */}
      <div className="absolute -bottom-6 right-4">
        <div className="bg-blue-50 text-blue-500 text-xs px-4 py-0.5 rounded-b-lg cursor-pointer flex items-center shadow-sm border border-t-0 border-blue-100 hover:bg-blue-100 transition-colors">
            收起
            <ChevronDown className="w-3 h-3 ml-1 transform rotate-180" />
        </div>
      </div>
    </div>
  );
};