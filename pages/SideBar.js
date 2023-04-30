import React from "react";
import sidebar from '../styles/SideBar.module.css'
// import button from '../styles/Button.module.css'

export const SideBar = () => {
    return (
      <div className={sidebar.sidebar}>
        <ul>
            <li><button className={sidebar.newButton}>+ New Chat</button></li>
            <li><button>Ilham Tampan</button></li>
            <li><button>Ilham Terlalu Tampan</button></li>
        </ul>
      </div>
    );
  };
  