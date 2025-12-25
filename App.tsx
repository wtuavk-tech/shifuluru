import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_DATA, GENERATE_MOCK_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';
import { DataOverview } from './components/DataOverview';
import { NavigationMenu } from './components/NavigationMenu';
import { AddBlacklistModal } from './components/AddBlacklistModal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('师傅库');
  const [showFilters, setShowFilters] = useState(false);
  const [showBlacklistModal, setShowBlacklistModal] = useState(false);

  // Generate 20 records for each specific view
  const currentData = GENERATE_MOCK_DATA(activeTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Optional: Hide filters when switching tabs if you want strictly hidden by default per view
    // setShowFilters(false); 
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-[12px] font-sans">
      <div className="w-full mx-auto">
        
        {/* Scrolling System Notice */}
        <SystemNotice />

        {/* Navigation Menu Grid - Now Controlled */}
        <NavigationMenu activeItem={activeTab} setActiveItem={handleTabChange} />
        
        {/* Data Overview - Controls visibility of FilterBar and Modal */}
        <DataOverview 
          activeTab={activeTab} 
          onToggleFilters={() => setShowFilters(!showFilters)} 
          onAddClick={() => setShowBlacklistModal(true)}
        />
        
        {/* Filter Section - Conditionally rendered, hidden by default */}
        {showFilters && <FilterBar activeTab={activeTab} />}

        {/* Main Content Area - Rounded and Dynamic */}
        <div className="space-y-4 pt-2">
          <Table activeTab={activeTab} data={currentData} />
          <Pagination total={currentData.length * 10} pageSize={20} current={1} />
        </div>

        {/* Modal */}
        {showBlacklistModal && (
          <AddBlacklistModal 
            onClose={() => setShowBlacklistModal(false)}
            onConfirm={() => {
              // Handle confirm logic here (e.g., refresh data)
              setShowBlacklistModal(false);
            }}
          />
        )}

      </div>
    </div>
  );
};

export default App;