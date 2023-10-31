import { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = ['MyNadezhda consultancy', 'Desh IT'];

  return (
    <div>
      <h5 className="card-title font-bold text-3xl mb-4 px-8 pt-4 md:p-8 lg:p-8">EXPERIENCE</h5>
      <div className="experience-container md:mx-28 lg:mx-44 px-8">
        <div className={`experience-sidebar ${activeTab !== null ? 'small-devices' : ''}`}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
              {index === activeTab && <hr className="active-line" />}
            </div>
          ))}
        </div>
        <div className={`tab-content ${activeTab !== null ? 'small-devices-content' : ''}`}>
          <div className="content">
            {activeTab !== null ? tabs[activeTab] + ' content' : 'Select a tab'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
