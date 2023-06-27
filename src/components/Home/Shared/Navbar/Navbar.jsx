import React, { useState } from 'react';

const Navbar = () => {
  const [activeOption, setActiveOption] = useState('');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const navOptions = [
    { label: 'Home', path: '#' },
    { label: 'About', path: '#' },
    { label: 'Works', path: '#' },
    { label: 'Contact', path: '#' },
  ];

  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions.map((option, index) => (
                <li key={index}>
                  <a
                    href={option.path}
                    className={`${
                      activeOption === option.label ? 'text-white' : ''
                    }`}
                    onMouseEnter={() => handleOptionClick(option.label)}
                    onMouseLeave={() => handleOptionClick('')}
                    onClick={() => handleOptionClick(option.label)}
                  >
                    {option.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl text-white">Akas Datta</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions.map((option, index) => (
              <li key={index}>
                <a
                  href={option.path}
                  className={`${
                    activeOption === option.label ? 'text-white' : ''
                  }`}
                  onMouseEnter={() => handleOptionClick(option.label)}
                  onMouseLeave={() => handleOptionClick('')}
                  onClick={() => handleOptionClick(option.label)}
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
