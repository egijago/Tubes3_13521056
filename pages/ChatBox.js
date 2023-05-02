// import React, { useState } from 'react';
// import styles from '../styles/ChatBox.module.css';
// import { TextBox } from './TextBox';

// export const ChatBox = () => {
//   const [messages, setMessages] = useState([]);

//   const addMessage = (message) => {
//     setMessages([...messages, message]);
//   };

//   return (
//     <div className={styles.ChatBox}>
//       <div className={styles.ChatBoxMessages}>
//         {messages.map((message, index) => (
//           <div key={index} className={`${styles.bubble} ${styles[message.sender]}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div className={styles.ChatBoxInput}>
//         <TextBox onSubmit={addMessage} />
//       </div>
//     </div>
//   );
// };




// import React, { useState } from 'react';
// import styles from '../styles/ChatBox.module.css';
// import { TextBox } from './TextBox';

// export const ChatBox = () => {
//   const [messages, setMessages] = useState([]);

//   const sendMessage = (text) => {
//     setMessages([...messages, { text, sender: 'me' }]);
//   };

//   return (
//     <div className={styles.ChatBox}>
//       <div className={styles.Messages}>
//         {messages.map((message, index) => (
//           <div key={index} className={`${styles.bubble} ${styles[message.sender]}`}>
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <TextBox sendMessage={sendMessage} />
//     </div>
//   );
// };


import React, { useState } from 'react';
import styles from '../styles/ChatBox.module.css';
import { TextBox } from './TextBox';

export const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    const newMessage = { text, sender: 'user' };
    setMessages([...messages, newMessage]);
  };

  const renderMessages = () =>
    messages.map((message, index) => (
      <div key={index} className={styles.MessageBubble}>
        {message.text}
      </div>
    ));

  return (
    <div className={styles.ChatBox}>
      <div className={styles.MessageList}>{renderMessages()}</div>
      <TextBox addMessage={addMessage} />
    </div>
  );
};
