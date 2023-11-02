import { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      name: 'MyNadezhda',
      position: 'Frontend Developer', 
      date: 'September 2023 - Present',
      details1: '',
      details2: '',
      details3: ''
    },
    {
      name: 'Desh IT',
      position: 'Full Stack Developer(MERN)', 
      date: 'August 2022 - August 2023',
      details1: 'Designed and developed e-commerce, blog, and ad-management web apps.',
      details2: 'Worked as a contributor. Developed functionalities for web apps.',
      details3: 'Designed responsive websites depending on client requirements.'
    },
  ];
  

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
              style={{ borderColor: index === activeTab ? 'green' : '' }}
            >
              <h2>{tab.name}</h2>
              {index === activeTab && <hr className="active-line" />}
            </div>
          ))}
        </div>
        <div className={`tab-content ${activeTab !== null ? 'small-devices-content' : ''}`}>
          <div className="content">
            {activeTab !== null && (
              <>
                <div> 
                  <h1 className='text-xl md:text-xl lg:text-2xl font-bold text-blue-600 mb-2'>{tabs[activeTab].position}</h1>
                </div>
                <div><p className='text-sm'>{tabs[activeTab].date}</p></div>
                <div>{tabs[activeTab].details1}</div>
                <div>{tabs[activeTab].details2}</div>
                <div>{tabs[activeTab].details3}</div>
              </>
            )}
            {activeTab === null && 'Select a tab'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
