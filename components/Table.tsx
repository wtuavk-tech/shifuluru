import React from 'react';
import { Image as ImageIcon, Phone, MessageSquare } from 'lucide-react';

interface TableProps {
  activeTab: string;
  data: any[];
}

export const Table: React.FC<TableProps> = ({ activeTab, data }) => {
  const getColumns = () => {
    switch (activeTab) {
      case '完工审核':
        return ['序号', '用户名', '审核状态', '认证时间', '营业执照', '审核人', '审核时间', '审核说明', '操作'];
      case '保证金退款':
      case '师傅提现':
        return ['序号', '申请人', 'UID', '手机号码', '状态', '金额', '账户类型', '是否打款', '出纳时间', '出纳', '出纳意见', '备注', '操作'];
      case '保证金管理':
        return ['序号', '用户名', '师傅uid', '创建时间', '保证金状态', '需缴保证金', '已缴保证金', '综合评分', '信用分', '手机号', '认缴人', '认缴时间', '认缴凭证', '操作'];
      case '执照管理':
        return ['序号', '用户名', '审核状态', '认证时间', '营业执照', '审核人', '审核时间', '审核说明', '操作'];
      case '帮助中心':
        return ['序号', '创建者', '排序', '标题', '内容', '创建时间', '操作'];
      case '订单支付':
        return ['序号', '用户名', '师傅uid', '派单员', '订单号', '支付订单号', '支付方式', '支付状态', '支付金额', '已退金额', '支付平台', '支付时间', '创建时间', '操作'];
      case '退款申请':
      case '抖音退款':
        return ['序号', '退款人', '退款发起时间', '退款状态', '金额', '订单号', '商户退款单号', '退款原因', '退款说明', '退款单号', '退款完成时间', '审核时间', '审核人', '审核意见', '操作'];
      case '订单待办':
        return ['序号', '发起办人', '订单号', '待办人', '状态', '处理进度', '反馈报告', '内容', '创建时间', '师傅待办详情', '操作'];
      case '师傅黑名单':
        return ['序号', '微信头像', '师傅姓名/昵称', '归属省市', '联系方式', '标签', '状态', '备注', '操作'];
      case '试单奖励':
        return ['序号', '订单号', '师傅姓名', '创建时间', '奖励金额', '图片', '审核状态', '审核时间', '审核人', '审核说明', '操作'];
      default:
        return ['用户名', '师傅uid', '认证状态', '备注', '接单状态', '线下师傅', '地域', '项目', '分成', '品质', '完成率', '订单价值', '来源', '操作'];
    }
  };

  const columns = getColumns();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-300">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 text-[11px]">
          <thead className="bg-[#f7f8fa]">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="px-3 py-2 text-left font-medium text-gray-600 whitespace-nowrap border-b border-gray-300">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {data.map((row, idx) => (
              <tr 
                key={idx} 
                className={`${idx % 2 === 1 ? 'bg-[#F0F9FE]' : 'bg-white'} hover:bg-blue-50 transition-colors`}
              >
                {columns.map((col, i) => {
                  if (col === '序号') return <td key={i} className="px-3 py-2.5 border-r border-transparent">{idx + 1}</td>;
                  
                  if (col === '微信头像') {
                    return (
                      <td key={i} className="px-3 py-2.5">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-100">
                          {row.avatar ? (
                            <img src={row.avatar} alt="Avatar" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon size={14} className="text-gray-400" />
                          )}
                        </div>
                      </td>
                    );
                  }

                  if (col === '图片' && activeTab === '试单奖励') {
                     return (
                      <td key={i} className="px-3 py-2.5">
                        <div className="w-10 h-10 bg-gray-100 border border-gray-200 rounded overflow-hidden">
                           <img src={row['图片']} alt="Proof" className="w-full h-full object-cover" />
                        </div>
                      </td>
                     );
                  }

                  if (col === '操作') {
                    if (activeTab === '师傅黑名单') {
                      return (
                        <td key={i} className="px-3 py-2.5 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="text-orange-400 cursor-pointer hover:underline">查看</span>
                            <span className="text-red-500 cursor-pointer hover:underline">删除</span>
                          </div>
                        </td>
                      );
                    }
                    if (activeTab === '试单奖励') {
                        return (
                          <td key={i} className="px-3 py-2.5">
                            <span className="text-blue-500 cursor-pointer hover:underline">审核</span>
                          </td>
                        );
                    }
                    return (
                      <td key={i} className="px-3 py-2.5 text-blue-500 cursor-pointer hover:underline">
                        {activeTab === '完工审核' ? '审核' : '详情'}
                      </td>
                    );
                  }

                  if (col === '联系方式' && activeTab === '师傅黑名单') {
                    return (
                      <td key={i} className="px-3 py-2.5 text-gray-600">
                        <div className="flex items-center gap-1">
                          <Phone size={10} className="text-blue-400" />
                          <span>{row['手机号'] || '15756453421'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare size={10} className="text-green-500" />
                          <span className="text-gray-400">{row.wechatId || 'wx5674etetery'}</span>
                        </div>
                      </td>
                    );
                  }

                  if (col === '标签' && activeTab === '师傅黑名单') {
                    const tags = row.tags || ['黑单', '成单率低'];
                    return (
                      <td key={i} className="px-3 py-2.5">
                        <div className="flex flex-wrap gap-1 max-w-[150px]">
                          {tags.map((tag: string, tIdx: number) => (
                            <span key={tIdx} className="px-1.5 py-0.5 border border-blue-200 text-[#1890FF] bg-blue-50 rounded text-[10px] whitespace-nowrap">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                    );
                  }

                  if (col === '营业执照' || col === '认缴凭证') return (
                    <td key={i} className="px-3 py-2.5"><ImageIcon size={14} className="text-gray-400" /></td>
                  );

                  if (col === '审核状态' || col === '状态' || col === '保证金状态' || col === '退款状态' || col === '支付状态') {
                    const statusText = row[col] || '已通过';
                    let badgeClass = 'border-green-200 bg-green-50 text-green-600';
                    
                    if (['待审核', '待处理', '部分缴纳', '退款中', '待审批'].includes(statusText)) {
                        badgeClass = 'border-orange-200 bg-orange-50 text-orange-500';
                    } else if (['不通过', '失败', '失效'].includes(statusText)) {
                        badgeClass = 'border-red-200 bg-red-50 text-red-500';
                    }

                    return (
                      <td key={i} className="px-3 py-2.5">
                        <span className={`px-2 py-0.5 rounded border text-[10px] ${badgeClass}`}>
                          {statusText}
                        </span>
                      </td>
                    );
                  }
                  
                  const val = row[col] !== undefined ? row[col] : (row['用户名'] || '-');
                  return <td key={i} className="px-3 py-2.5 text-gray-600 truncate max-w-[200px]" title={String(val)}>{val}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};