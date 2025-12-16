import React from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f0f2f5] p-6 font-sans">
      <div className="max-w-[1600px] mx-auto space-y-4">
        
        {/* Header Title */}
        <h1 className="text-xl font-bold text-gray-800 mb-4">师傅录入</h1>
        
        {/* Filter Section (Now includes Add button) */}
        <FilterBar />

        {/* Main Content Area */}
        <div className="space-y-4 pt-2">
          <Table data={MOCK_DATA} />
          <Pagination total={2802} pageSize={15} current={1} />
        </div>

      </div>
    </div>
  );
};

export default App;