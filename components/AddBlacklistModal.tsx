import React from 'react';
import { Plus } from 'lucide-react';

interface AddBlacklistModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export const AddBlacklistModal: React.FC<AddBlacklistModalProps> = ({ onClose, onConfirm }) => {
  const tags = ['黑单', '少给钱', '不按格式回款', '多算成本', '乱报价', '成单率低'];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-sans">
      <div className="bg-white rounded-lg w-[550px] max-h-[90vh] flex flex-col shadow-xl">
        {/* Header */}
        <div className="px-6 py-4 text-lg font-medium text-gray-800 border-b border-gray-100">
          新增黑名单
        </div>
        
        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          
          {/* Avatar */}
          <div className="flex">
            <label className="w-24 text-right pr-4 pt-2 text-gray-600 flex-shrink-0">
              <span className="text-red-500 mr-1">*</span>微信头像
            </label>
            <div className="w-32 h-32 border border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 bg-gray-50">
              <Plus className="text-gray-400 w-8 h-8" />
            </div>
          </div>

          {/* Proof */}
          <div className="flex">
            <label className="w-24 text-right pr-4 pt-2 text-gray-600 flex-shrink-0">
              <span className="text-red-500 mr-1">*</span>证明截图
            </label>
            <div className="w-32 h-32 border border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 bg-gray-50">
              <Plus className="text-gray-400 w-8 h-8" />
            </div>
          </div>

          {/* Name */}
          <div className="flex items-center">
            <label className="w-24 text-right pr-4 text-gray-600 flex-shrink-0">
              <span className="text-red-500 mr-1">*</span>姓名/昵称
            </label>
            <input 
              type="text" 
              placeholder="请输入内容" 
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all placeholder-gray-300" 
            />
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <label className="w-24 text-right pr-4 text-gray-600 flex-shrink-0">
              <span className="text-red-500 mr-1">*</span>手机号
            </label>
            <input 
              type="text" 
              placeholder="请输入手机号,多个手机号以分割" 
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all placeholder-gray-300" 
            />
          </div>

          {/* WeChat */}
          <div className="flex items-center">
            <label className="w-24 text-right pr-4 text-gray-600 flex-shrink-0">
              <span className="text-red-500 mr-1">*</span>微信号
            </label>
            <input 
              type="text" 
              placeholder="请输入微信号,多个微信号以分割" 
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all placeholder-gray-300" 
            />
          </div>

          {/* Region */}
          <div className="flex items-center">
            <label className="w-24 text-right pr-4 text-gray-600 flex-shrink-0">
              <span className="text-red-500 mr-1">*</span>地域
            </label>
            <input 
              type="text" 
              placeholder="请输入关键词搜索" 
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all placeholder-gray-300" 
            />
          </div>

          {/* Tags */}
          <div className="flex">
            <label className="w-24 text-right pr-4 pt-2 text-gray-600 flex-shrink-0">
              <span className="text-red-500 mr-1">*</span>标签
            </label>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, idx) => (
                  <button 
                    key={idx}
                    className="bg-[#409EFF] text-white px-3 py-1.5 rounded text-xs hover:bg-blue-500 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <input 
                type="text" 
                placeholder="请输入标签，按回车确认" 
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all placeholder-gray-300" 
              />
            </div>
          </div>

          {/* Note */}
          <div className="flex">
            <label className="w-24 text-right pr-4 pt-2 text-gray-600 flex-shrink-0">
              备注
            </label>
            <div className="flex-1 relative">
              <textarea 
                placeholder="请输入备注" 
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-24 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-100 transition-all resize-none placeholder-gray-300"
              ></textarea>
              <div className="absolute right-2 bottom-2 text-gray-300 text-xs select-none">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6H0L6 0V6Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-white rounded-b-lg">
          <button 
            onClick={onClose} 
            className="px-5 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 text-sm transition-colors"
          >
            取消
          </button>
          <button 
            onClick={onConfirm} 
            className="px-5 py-2 bg-[#409EFF] text-white rounded hover:bg-blue-600 text-sm shadow-sm transition-colors"
          >
            确定
          </button>
        </div>
      </div>
    </div>
  );
};