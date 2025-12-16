import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  total: number;
  pageSize: number;
  current: number;
}

export const Pagination: React.FC<PaginationProps> = ({ total, pageSize, current }) => {
  return (
    <div className="flex items-center justify-center gap-3 text-sm text-gray-600 py-4 mt-2">
      <span className="text-gray-500">共 {total} 条</span>
      
      <div className="relative">
        <select className="appearance-none border border-gray-300 rounded px-2 py-1 pr-6 bg-white focus:outline-none focus:border-blue-500 cursor-pointer">
          <option>15条/页</option>
          <option>30条/页</option>
          <option>50条/页</option>
        </select>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
           <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      </div>

      <div className="flex items-center space-x-1">
        <button className="p-1 rounded bg-gray-100 text-gray-400 hover:bg-gray-200 disabled:opacity-50">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 rounded bg-blue-500 text-white font-medium flex items-center justify-center">
          1
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 flex items-center justify-center">
          2
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 flex items-center justify-center">
          3
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 flex items-center justify-center">
          4
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 flex items-center justify-center">
          5
        </button>
        <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 flex items-center justify-center">
          6
        </button>
        <span className="px-2 text-gray-400">...</span>
        <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 flex items-center justify-center">
          187
        </button>
        <button className="p-1 rounded bg-gray-100 text-gray-400 hover:bg-gray-200">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span>前往</span>
        <input 
          type="text" 
          defaultValue="1"
          className="w-10 h-8 border border-gray-300 rounded text-center focus:outline-none focus:border-blue-500"
        />
        <span>页</span>
      </div>
    </div>
  );
};