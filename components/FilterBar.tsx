import React from 'react';
import { ChevronDown, Search, RotateCcw, Plus } from 'lucide-react';

interface FilterBarProps {
  activeTab: string;
}

const InputGroup: React.FC<{ label: string; placeholder?: string; width?: string }> = ({ label, placeholder = "请输入", width = "w-24" }) => (
  <div className="flex items-center gap-2">
    <label className={`whitespace-nowrap text-gray-600 text-[11px] ${width} text-right flex-shrink-0`}>{label}</label>
    <input 
      type="text" 
      placeholder={placeholder} 
      className="border border-gray-300 rounded px-2 h-7 w-32 text-[11px] focus:outline-none focus:border-blue-500 placeholder-gray-300"
    />
  </div>
);

const SelectGroup: React.FC<{ label: string; width?: string }> = ({ label, width = "w-24" }) => (
  <div className="flex items-center gap-2">
    <label className={`whitespace-nowrap text-gray-600 text-[11px] ${width} text-right flex-shrink-0`}>{label}</label>
    <div className="relative w-32">
      <select className="appearance-none border border-gray-300 rounded px-2 h-7 w-full text-[11px] bg-white focus:outline-none focus:border-blue-500 text-gray-400">
        <option value="">请选择</option>
      </select>
      <ChevronDown className="absolute right-2 top-2 w-3 h-3 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const DateRangeGroup: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-2">
    <label className="whitespace-nowrap text-gray-600 text-[11px] w-24 text-right flex-shrink-0">{label}</label>
    <div className="flex items-center gap-1 border border-gray-300 rounded px-2 h-7 bg-white">
      <input type="text" placeholder="开始日期" className="w-20 text-[11px] focus:outline-none" />
      <span className="text-gray-300">至</span>
      <input type="text" placeholder="结束日期" className="w-20 text-[11px] focus:outline-none" />
    </div>
  </div>
);

export const FilterBar: React.FC<FilterBarProps> = ({ activeTab }) => {
  const renderFilters = () => {
    const buttons = (
      <div className="flex items-center gap-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 h-7 rounded text-[11px] flex items-center gap-1">
          <Search size={12} /> 搜索
        </button>
        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-3 h-7 rounded text-[11px] flex items-center gap-1">
          <RotateCcw size={12} /> 重置
        </button>
        {(activeTab === '师傅库' || activeTab === '帮助中心') && (
          <button className="bg-[#1890FF] text-white px-3 h-7 rounded text-[11px] flex items-center gap-1">
            <Plus size={12} /> 新增
          </button>
        )}
      </div>
    );

    switch (activeTab) {
      case '完工审核':
        return (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <InputGroup label="师傅" />
            <SelectGroup label="状态" />
            {buttons}
          </div>
        );
      case '保证金退款':
      case '师傅提现':
        return (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <InputGroup label="申请人" />
            <InputGroup label="手机号码" />
            <DateRangeGroup label="申请时间" />
            {buttons}
            <DateRangeGroup label="出纳时间" />
            <SelectGroup label="状态" />
          </div>
        );
      case '保证金管理':
        return (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <InputGroup label="用户名" />
            <InputGroup label="师傅uid" />
            <SelectGroup label="保证金状态" />
            {buttons}
            <InputGroup label="手机号码" />
            <DateRangeGroup label="认缴时间" />
          </div>
        );
      case '执照管理':
        return (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <InputGroup label="用户名" />
            {buttons}
          </div>
        );
      case '帮助中心':
        return (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <DateRangeGroup label="申请时间" />
            {buttons}
          </div>
        );
      case '订单支付':
        return (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <DateRangeGroup label="支付时间" />
            <InputGroup label="用户名" />
            <InputGroup label="派单员" />
            {buttons}
            <InputGroup label="师傅uid" />
            <InputGroup label="订单号" />
            <SelectGroup label="支付方式" />
            <SelectGroup label="交易状态" />
          </div>
        );
      case '退款申请':
      case '抖音退款':
        return (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <DateRangeGroup label="申请时间" />
            <InputGroup label="申请人" />
            <InputGroup label="手机号" />
            {buttons}
            <InputGroup label="订单号" />
            <SelectGroup label="状态" />
          </div>
        );
      case '订单待办':
        return (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <InputGroup label="订单号" />
            <InputGroup label="师傅" />
            <SelectGroup label="处理状态" />
            {buttons}
            <SelectGroup label="生效状态" />
          </div>
        );
      default: // Default 师傅库
        return (
          <div className="grid grid-cols-8 gap-x-4 gap-y-3 items-center min-w-[1400px]">
            <InputGroup label="用户名" width="w-20" />
            <InputGroup label="师傅uid" width="w-20" />
            <InputGroup label="地域" width="w-20" />
            <InputGroup label="项目" width="w-20" />
            <InputGroup label="手机号码" width="w-20" />
            <InputGroup label="完成率" width="w-20" />
            <SelectGroup label="注册方式" width="w-20" />
            <SelectGroup label="接单状态" width="w-20" />
            <SelectGroup label="派单状态" width="w-20" />
            <SelectGroup label="状态" width="w-20" />
            <div className="col-start-8 flex justify-end">{buttons}</div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 mb-4 overflow-x-auto shadow-sm">
      {renderFilters()}
    </div>
  );
};