import React from 'react';
import { WorkerEntry } from '../types';

interface TableProps {
  data: WorkerEntry[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-[#f7f8fa]">
            <tr>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600 tracking-wide w-16">
                序号
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600 tracking-wide w-32">
                创建人
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600 tracking-wide w-32">
                来源
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600 tracking-wide">
                详情
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600 tracking-wide w-32">
                备注
              </th>
              <th scope="col" className="px-4 py-3 text-center font-semibold text-gray-600 tracking-wide w-24">
                状态
              </th>
              <th scope="col" className="px-4 py-3 text-left font-semibold text-gray-600 tracking-wide w-48">
                创建时间
              </th>
              <th scope="col" className="px-4 py-3 text-center font-semibold text-gray-600 tracking-wide w-48">
                操作
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, index) => (
              <tr 
                key={row.id} 
                className={`
                  ${index % 2 === 0 ? 'bg-white' : 'bg-[#f2f8ff]'} 
                  hover:bg-[#e6f1ff] transition-colors
                `}
              >
                <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                  {index + 1}
                </td>
                <td className="px-4 py-3 whitespace-nowrap font-bold text-gray-800">
                  {row.creator}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                  {row.source}
                </td>
                <td className="px-4 py-3 text-gray-500">
                  <div className="line-clamp-2 max-w-xl text-xs leading-5">
                    {row.details}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-500 text-xs">
                  {row.remark || '-'}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-center">
                  <span
                    className={`inline-flex px-2 py-0.5 text-xs font-medium rounded border ${
                      row.status === 'stocked'
                        ? 'bg-green-50 text-green-600 border-green-200'
                        : 'bg-orange-50 text-orange-500 border-orange-200'
                    }`}
                  >
                    {row.status === 'stocked' ? '已入库' : '未入库'}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-gray-500 font-mono text-xs">
                  {row.createdAt}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-center">
                  <div className="flex justify-center space-x-3 text-xs">
                    <button className="text-blue-500 hover:text-blue-700 font-medium">备注</button>
                    <button className="text-blue-500 hover:text-blue-700 font-medium">修改</button>
                    <button className="text-blue-500 hover:text-blue-700 font-medium">是否入库</button>
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