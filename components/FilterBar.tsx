import React from 'react';
import { ChevronDown, Search, RotateCcw, Plus } from 'lucide-react';

interface FilterBarProps {
  activeTab: string;
}

const InputGroup: React.FC<{ label: string; placeholder?: string; width?: string; inputWidth?: string }> = ({ 
  label, 
  placeholder = "请输入", 
  width = "w-fit", 
  inputWidth = "w-24" 
}) => (
  <div className="flex items-center gap-1 flex-shrink-0">
    <label className={`whitespace-nowrap text-gray-600 text-[11px] ${width} text-right flex-shrink-0`}>{label}</label>
    <input 
      type="text" 
      placeholder={placeholder} 
      className={`border border-gray-300 rounded px-1.5 h-7 ${inputWidth} text-[11px] focus:outline-none focus:border-blue-500 placeholder-gray-300`}
    />
  </div>
);

const SelectGroup: React.FC<{ label: string; width?: string; selectWidth?: string }> = ({ 
  label, 
  width = "w-fit", 
  selectWidth = "w-24" 
}) => (
  <div className="flex items-center gap-1 flex-shrink-0">
    <label className={`whitespace-nowrap text-gray-600 text-[11px] ${width} text-right flex-shrink-0`}>{label}</label>
    <div className={`relative ${selectWidth}`}>
      <select className="appearance-none border border-gray-300 rounded px-1.5 h-7 w-full text-[11px] bg-white focus:outline-none focus:border-blue-500 text-gray-400">
        <option value="">请选择</option>
      </select>
      <ChevronDown className="absolute right-1.5 top-2 w-3 h-3 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const DateRangeGroup: React.FC<{ label: string }> = ({ label }) => (
  <div className="flex items-center gap-1 flex-shrink-0">
    <label className="whitespace-nowrap text-gray-600 text-[11px] w-fit text-right flex-shrink-0">{label}</label>
    <div className="flex items-center gap-0.5 border border-gray-300 rounded px-1.5 h-7 bg-white">
      <input type="text" placeholder="开始日期" className="w-16 text-[11px] focus:outline-none" />
      <span className="text-gray-300">-</span>
      <input type="text" placeholder="结束日期" className="w-16 text-[11px] focus:outline-none" />
    </div>
  </div>
);

export const FilterBar: React.FC<FilterBarProps> = ({ activeTab }) => {
  const renderFilters = () => {
    const buttons = (
      <div className="flex items-center gap-1 flex-shrink-0 ml-auto">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 h-7 rounded text-[11px] flex items-center gap-1 whitespace-nowrap">
          <Search size={12} /> 搜索
        </button>
        <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-600 px-2.5 h-7 rounded text-[11px] flex items-center gap-1 whitespace-nowrap">
          <RotateCcw size={12} /> 重置
        </button>
        {(activeTab === '师傅库' || activeTab === '帮助中心') && (
          <button className="bg-[#1890FF] text-white px-2.5 h-7 rounded text-[11px] flex items-center gap-1 whitespace-nowrap">
            <Plus size={12} /> 新增
          </button>
        )}
      </div>
    );

    const baseContainerClass = "flex items-center flex-nowrap gap-x-2.5 w-full overflow-hidden";

    switch (activeTab) {
      case '完工审核':
        return (
          <div className={baseContainerClass}>
            <InputGroup label="师傅" />
            <SelectGroup label="状态" />
            {buttons}
          </div>
        );
      case '保证金退款':
      case '师傅提现':
        return (
          <div className={baseContainerClass}>
            <InputGroup label="申请人" />
            <InputGroup label="手机号码" />
            <DateRangeGroup label="申请时间" />
            <DateRangeGroup label="出纳时间" />
            <SelectGroup label="状态" />
            {buttons}
          </div>
        );
      case '保证金管理':
        return (
          <div className={baseContainerClass}>
            <InputGroup label="用户名" />
            <InputGroup label="师傅uid" />
            <SelectGroup label="保证金状态" />
            <InputGroup label="手机号码" />
            <DateRangeGroup label="认缴时间" />
            {buttons}
          </div>
        );
      case '执照管理':
        return (
          <div className={baseContainerClass}>
            <InputGroup label="用户名" />
            {buttons}
          </div>
        );
      case '帮助中心':
        return (
          <div className={baseContainerClass}>
            <DateRangeGroup label="申请时间" />
            {buttons}
          </div>
        );
      case '订单支付':
        return (
          <div className={baseContainerClass}>
            <DateRangeGroup label="支付时间" />
            <InputGroup label="用户名" />
            <InputGroup label="派单员" />
            <InputGroup label="师傅uid" />
            <InputGroup label="订单号" />
            <SelectGroup label="支付方式" />
            <SelectGroup label="交易状态" />
            {buttons}
          </div>
        );
      case '退款申请':
      case '抖音退款':
        return (
          <div className={baseContainerClass}>
            <DateRangeGroup label="申请时间" />
            <InputGroup label="申请人" />
            <InputGroup label="手机号" />
            <InputGroup label="订单号" />
            <SelectGroup label="状态" />
            {buttons}
          </div>
        );
      case '订单待办':
        return (
          <div className={baseContainerClass}>
            <InputGroup label="订单号" />
            <InputGroup label="师傅" />
            <SelectGroup label="处理状态" />
            <SelectGroup label="生效状态" />
            {buttons}
          </div>
        );
      case '师傅黑名单':
        return (
          <div className={baseContainerClass}>
            <InputGroup label="师傅姓名/昵称" />
            <InputGroup label="手机号" />
            <SelectGroup label="状态" />
            {buttons}
          </div>
        );
      default: // Default 师傅库
        return (
          <div className={baseContainerClass}>
            <InputGroup label="用户名" inputWidth="w-20" />
            <InputGroup label="UID" inputWidth="w-16" />
            <InputGroup label="地域" inputWidth="w-20" />
            <InputGroup label="项目" inputWidth="w-20" />
            <InputGroup label="手机" inputWidth="w-24" />
            <InputGroup label="完成率" inputWidth="w-16" />
            <SelectGroup label="注册" selectWidth="w-20" />
            <SelectGroup label="接单" selectWidth="w-16" />
            <SelectGroup label="派单" selectWidth="w-16" />
            <SelectGroup label="状态" selectWidth="w-16" />
            {buttons}
          </div>
        );
    }
  };

  return (
    <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 mb-4 shadow-sm overflow-hidden">
      {renderFilters()}
    </div>
  );
};