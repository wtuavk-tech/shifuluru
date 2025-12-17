import React from 'react';
import { WorkerEntry } from '../types';
import { Image } from 'lucide-react';

interface TableProps {
  data: WorkerEntry[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-[2400px] divide-y divide-gray-200 text-xs">
          <thead className="bg-[#f7f8fa]">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-40 sticky left-0 bg-[#f7f8fa] z-10 border-r border-gray-100">用户名</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-20">师傅uid</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-20">认证状态</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-32">备注</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-28">接单状态</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-24">是否线下师傅</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-32">地域</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-32">项目</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-24">次要项目</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-32">分成</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-16">品质</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-40">完成率</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-48">订单价值</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-32">在途订单数</th>
              
              {/* New Columns */}
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-32">推荐信息</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-24">评分</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-24">保证金</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-32">缴纳保证金类型</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-24">待缴订单数</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-24">评价</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-24">注册方式</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-48">认证信息</th>
              <th className="px-3 py-2 text-left font-medium text-gray-600 w-32">平台服务费</th>
              <th className="px-3 py-2 text-center font-medium text-gray-600 w-32 sticky right-0 bg-[#f7f8fa] z-10 border-l border-gray-100">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, index) => (
              <tr 
                key={row.id} 
                className={`${index % 2 === 1 ? 'bg-[#E6F7FF]' : 'bg-white'} hover:bg-blue-50 transition-colors`}
              >
                {/* Username */}
                <td className="px-3 py-2 sticky left-0 z-10 bg-inherit border-r border-gray-100">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                      <Image size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{row.name}</div>
                      <div className="text-gray-500 scale-90 origin-left">{row.phone}</div>
                    </div>
                  </div>
                </td>

                <td className="px-3 py-2 text-gray-600">{row.uid}</td>

                <td className="px-3 py-2">
                  {row.isCertified && (
                    <span className="inline-block border border-green-200 text-green-600 bg-green-50 px-1.5 py-0.5 text-[10px] rounded">
                      已认证
                    </span>
                  )}
                </td>

                <td className="px-3 py-2 text-gray-500 max-w-[150px] truncate" title={row.remark}>{row.remark}</td>

                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                  <div className={row.acceptOrders ? '' : 'text-red-500'}>接单状态: {row.acceptOrders ? '是' : '否'}</div>
                  <div className={row.canDispatch ? '' : 'text-red-500'}>可派单: {row.canDispatch ? '是' : '否'}</div>
                </td>

                <td className="px-3 py-2 text-gray-600">{row.isOffline ? '是' : '否'}</td>
                <td className="px-3 py-2 text-gray-600">{row.region}</td>
                <td className="px-3 py-2 text-gray-600">{row.project}</td>
                <td className="px-3 py-2 text-gray-600">{row.subProject}</td>

                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                  <div>类型: {row.splitInfo.type}</div>
                  <div>去除成本: {row.splitInfo.removeCost ? '是' : '否'}</div>
                  <div>比例: {row.splitInfo.ratio}</div>
                </td>

                <td className="px-3 py-2 text-gray-600">{row.quality}</td>

                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                  <div>近30天: {row.completion.last30Days}</div>
                  <div>总完成率: {row.completion.total}</div>
                  <div>近10单完成率: {row.completion.last10}</div>
                </td>

                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                  <div>平均订单价值: {row.orderValue.avg}</div>
                  <div>平均完成订单价值: {row.orderValue.avgCompleted}</div>
                </td>

                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                  <div>当前执行中订单: {row.inTransit.current}</div>
                  <div>近10单当前执行: {row.inTransit.last10}</div>
                </td>

                {/* Referral */}
                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                    <div>推荐人: {row.referral.name}</div>
                    <div className="text-gray-400">推荐奖励金额: {row.referral.commission}</div>
                </td>

                {/* Score */}
                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                    <div>综合评分: {row.score.composite}</div>
                    <div className="text-gray-400">信用分: {row.score.credit}</div>
                </td>

                 {/* Deposit */}
                 <td className="px-3 py-2 text-gray-600 leading-relaxed">
                    <div className="text-blue-500 border border-blue-200 bg-blue-50 px-1 rounded inline-block mb-1">需缴: {row.deposit.required}</div>
                    <div className="text-orange-500 border border-orange-200 bg-orange-50 px-1 rounded inline-block">余额: {row.deposit.paid}</div>
                </td>

                <td className="px-3 py-2 text-gray-600">{row.depositType}</td>
                <td className="px-3 py-2 text-gray-600">{row.pendingOrderCount}</td>
                
                {/* Evaluation */}
                <td className="px-3 py-2 text-[#1890FF] cursor-pointer hover:underline">{row.evaluationStatus}</td>

                {/* Reg Method */}
                <td className="px-3 py-2 text-gray-600">
                    <div>是</div>
                    <div>{row.regMethod}</div>
                </td>

                {/* Cert Info */}
                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                    {row.certInfo.person && (
                        <div className="bg-[#FF4D4F] text-white px-1 rounded inline-block text-[10px] mb-1">
                            认证人: {row.certInfo.person}
                        </div>
                    )}
                    {row.certInfo.time && (
                         <div className="bg-[#FF4D4F] text-white px-1 rounded inline-block text-[10px]">
                            认证时间: {row.certInfo.time}
                        </div>
                    )}
                    {!row.certInfo.person && <span className="text-gray-400 text-[10px]">待审核通过后</span>}
                </td>

                {/* Platform Fee */}
                <td className="px-3 py-2 text-gray-600 leading-relaxed">
                    <div>技术费: {row.platformFee.tech}</div>
                    <div>违约支付: {row.platformFee.penalty}</div>
                </td>

                {/* Actions */}
                <td className="px-3 py-2 text-center sticky right-0 bg-inherit border-l border-gray-100 z-10">
                   <div className="flex flex-col gap-1 items-center">
                     <div className="space-x-2">
                       <a href="#" className="text-[#1890FF] hover:underline">身份</a>
                       <a href="#" className="text-[#1890FF] hover:underline">服务</a>
                       <a href="#" className="text-[#1890FF] hover:underline">修改</a>
                     </div>
                     <div className="space-x-1">
                       <a href="#" className="text-[#1890FF] hover:underline">线下师傅保证金链接</a>
                     </div>
                     <div className="space-x-2">
                       <a href="#" className="text-[#1890FF] hover:underline">设置需交保证金</a>
                       <a href="#" className="text-orange-500 hover:underline">劝退</a>
                     </div>
                     <div>
                       <a href="#" className="text-[#1890FF] hover:underline">查看订单补缴</a>
                     </div>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};