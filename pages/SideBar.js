import React, { useState } from "react";
import sidebar from '../styles/SideBar.module.css'

export const SideBar = () => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
 
  const handleToggle1 = () => {
    if (!isOn2) {
      setIsOn1(prev => !prev);
    }
  };
  
  const handleToggle2 = () => {
    if (!isOn1) {
      setIsOn2(prev => !prev);
    }
  };

  return (
    <div className={sidebar.sidebar}>
      <div className={sidebar.sidebarTop}>
        <ul>
          <li><button className={sidebar.newButton}>+ New Chat</button></li>
          <li><button>Ilham Tampan</button></li>
          <li><button>Ilham Terlalu Tampan</button></li>
          <li><button>Ilham Sangat Tampan</button></li>
        </ul>
      </div>
      <div className={sidebar.sidebarBottom}>
        <ul>
          <li>
            <label className={sidebar.switch}>
              <input type="checkbox" checked={isOn1} onChange={handleToggle1} />
              <span className={sidebar.slider}></span>
            </label>
            <span>   BM</span>
          </li>
        </ul>
        <ul>
          <li>
            <label className={sidebar.switch}>
              <input type="checkbox" checked={isOn2} onChange={handleToggle2} />
              <span className={sidebar.slider}></span>
            </label>
            <span>  KMP</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
