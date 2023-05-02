import React, { useState } from "react";
import sidebar from '../styles/SideBar.module.css'

export const SideBar = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prev => !prev);
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
              <input type="checkbox" checked={isOn} onChange={handleToggle} />
              <span className={sidebar.slider}></span>
            </label>
          </li>
          <li>
            <label className={sidebar.switch}>
              <input type="checkbox" checked={isOn} onChange={handleToggle} />
              <span className={sidebar.slider}></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
