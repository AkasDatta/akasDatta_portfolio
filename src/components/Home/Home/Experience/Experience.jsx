// const Experience = () => {
//     return (
//         <div>
//             <h5 className="card-title font-bold text-3xl mb-4 px-8 pt-4 md:p-8 lg:p-8">EXPERIENCE</h5>
//         </div>
//     );
// };

// export default Experience;


import { useState } from 'react';
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
