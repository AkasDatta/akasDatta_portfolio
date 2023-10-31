import { useState } from 'react';
import './Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3']; 
    return (
        <div>
            <h5 className="card-title font-bold text-3xl mb-4 px-8 pt-4 md:p-8 lg:p-8">EXPERIENCE</h5>
            <div className="vertical-tabs-container px-8 mb-4 lg:mx-80 md:mx-40">
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
        </div>
    );
};

export default Experience;
