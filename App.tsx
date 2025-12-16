import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';
import { DataOverview } from './components/DataOverview';

const App: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-6 font-sans">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Scrolling System Notice */}
        <SystemNotice />
        
        {/* Data Overview & Filter Toggle */}
        <DataOverview 
            isFilterVisible={isFilterOpen} 
            onToggleFilter={() => setIsFilterOpen(!isFilterOpen)} 
        />
        
        {/* Filter Section (Conditionally rendered) */}
        {isFilterOpen && (
            <FilterBar onClose={() => setIsFilterOpen(false)} />
        )}

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