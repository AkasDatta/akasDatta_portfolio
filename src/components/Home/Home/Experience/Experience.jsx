import React, { useState } from 'react';
import './Experience.css'; // Create a CSS file for styling

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3']; // Add your tab names here

  return (
    <div className="vertical-tabs-container">
      <div className="vertical-tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <div className="content">{tabs[activeTab]} content</div>
      </div>
    </div>
  );
};

export default VerticalTabs;
