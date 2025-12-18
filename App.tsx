import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_DATA, GENERATE_MOCK_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';
import { DataOverview } from './components/DataOverview';
import { NavigationMenu } from './components/NavigationMenu';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('师傅库');

  // Generate 20 records for each specific view
  const currentData = GENERATE_MOCK_DATA(activeTab);

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-[12px] font-sans">
      <div className="w-full mx-auto">
        
        {/* Scrolling System Notice */}
        <SystemNotice />

        {/* Navigation Menu Grid - Now Controlled */}
        <NavigationMenu activeItem={activeTab} setActiveItem={setActiveTab} />
        
        {/* Data Overview - Removed collapse logic as per request */}
        <DataOverview activeTab={activeTab} />
        
        {/* Filter Section - Rounded and Dynamic */}
        <FilterBar activeTab={activeTab} />

        {/* Main Content Area - Rounded and Dynamic */}
        <div className="space-y-4 pt-2">
          <Table activeTab={activeTab} data={currentData} />
          <Pagination total={currentData.length * 10} pageSize={20} current={1} />
        </div>

      </div>
    </div>
  );
};

export default App;