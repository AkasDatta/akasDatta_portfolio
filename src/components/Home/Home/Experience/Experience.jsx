import { useState } from 'react';
import './Experience.css';
import { FaCaretRight } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      name: 'MyNadezhda',
      fullName: 'Mynadezhda Consultancy Services Private Limited',
      position: 'Frontend Developer', 
      date: 'September 2023 - Present',
      details1: 'Various frontends are responsive design and developed using vanilla JavaScript & RAW CSS.',
      details2: 'Many game development tasks are done using vanilla JavaScript. It shows designs using figma files and other design software.',
      details3: 'Provided 24/7 support to the team in resolving issues.'
    },
    {
      name: 'Desh IT',
      fullName: 'Desh It Training Institute',
      position: 'Full Stack Developer(MERN)', 
      date: 'August 2022 - August 2023',
      details1: 'Designed and developed e-commerce, blog, and ad-management web apps.',
      details2: 'Worked as a contributor. Developed functionalities for web apps.',
      details3: 'Designed responsive websites depending on client requirements.'
    },
  ];
  

  return (
    <div id='experience'>
      <h5 className="card-title font-bold text-3xl mb-4 px-8 pt-4 md:p-8 lg:p-8 text-white">EXPERIENCE</h5>
      <div className="experience-container md:mx-28 lg:mx-44 px-8  bg-[#121212] rounded-3xl p-5 text-white">
        <div className={`experience-sidebar ${activeTab !== null ? 'small-devices' : ''}`}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
              style={{ borderColor: index === activeTab ? 'blue' : '' }}
            >
              <h2>{tab.name}</h2>
              {index === activeTab && <hr className="active-line"/>}
            </div>
          ))}
        </div>
        <div className={`tab-content ${activeTab !== null ? 'small-devices-content' : ''}`}>
          <div className="content text-white">
            {activeTab !== null && (
              <>
                <div> 
                  <h1 className='text-xl md:text-xl lg:text-2xl font-bold text-blue-600'>{tabs[activeTab].position}</h1>
                </div>
                <div>
                  <p className='text-sm my-3 text-white'>{tabs[activeTab].date}</p>
                </div>
                <div>
                  <h1 className='text-xl md:text-2xl lg:text-2xl font-bold text-teal-500'>{tabs[activeTab].fullName}</h1>
                </div>
                <div>
                  <div className='flex my-3'>
                    <FaCaretRight className='text-blue-500 mt-1'></FaCaretRight>
                    <h1 className='mx-2 text-white'>{tabs[activeTab].details1}</h1>
                  </div>
                  <div className='flex'>
                    <FaCaretRight className='text-blue-500 my-1'></FaCaretRight>
                    <h1 className='mx-2 text-white'>{tabs[activeTab].details2}</h1>
                  </div>
                  <div className='flex mt-3'>
                    <FaCaretRight className='text-blue-500 mt-1 pr-1'></FaCaretRight>
                    <h1 className='mx-0 text-white'>{tabs[activeTab].details3}</h1>
                  </div>
                </div>
              </>
            )}
            {/* {activeTab === null && 'Select a tab'} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
