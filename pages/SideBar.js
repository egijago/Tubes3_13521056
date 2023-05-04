import React, { useState } from "react";
import sidebar from '../styles/SideBar.module.css'

export const SideBar = () => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
 
  const handleToggle1 = () => {
    if (isOn2) {
      setIsOn2(false);
    }
    setIsOn1(prev => !prev);
  };
  
  const handleToggle2 = () => {
    if (isOn1) {
      setIsOn1(false);
    }
    setIsOn2(prev => !prev);
  };

  return (
    <div className={sidebar.sidebar}>
      <div className={sidebar.sidebarTop}>
        <ul>
          <li><button className={sidebar.newButton}>+ New Chat</button></li>
          <li><button>a</button></li>
          <li><button>b</button></li>
          <li><button>c</button></li>
        </ul>
      </div>
      <div className={sidebar.sidebarBottom}>
        <ul>
          <li>
            <label className={sidebar.switch}>
              <input type="checkbox" checked={isOn1} onChange={handleToggle1} />
              <span className={sidebar.slider}></span>
            </label>
            <span className={isOn1 ? sidebar.labelOn : sidebar.labelOff}>   BM</span>
          </li>
        </ul>
        <ul>
          <li>
            <label className={sidebar.switch}>
              <input type="checkbox" checked={isOn2} onChange={handleToggle2} />
              <span className={sidebar.slider}></span>
            </label>
            <span className={isOn2 ? sidebar.labelOn : sidebar.labelOff}>  KMP</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
