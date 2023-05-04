import { useState, useEffect, useRef } from 'react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import foo from './foo';

import styles from '../styles/ChatBox.module.css';

export function ChatBox({id}) {
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);


  const handleSendMessage = (e) => {
    e.preventDefault();
    const inputEl = e.target.elements.message;
    const message = inputEl.value.trim();
    if (message) {
      setMessages([...messages, { sender: 'me', message }]);
      inputEl.value = '';
    }
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div>
      <div id={id}className={styles.chatbox}>
        <div ref={messageContainerRef} className={styles.messageContainer}>
          {messages.map((msg, idx) => (
            <div key={idx} className={styles.bubbleContainer}>
              <div className={`${styles.bubble} ${msg.sender === 'me' ? styles.right : styles.left}`}>
                {msg.message}
              </div>
              <div className={`${styles.bubble} ${msg.sender === 'me' ? styles.left : styles.right}`}>
                {foo()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.TextBox}>
      <form onSubmit={handleSendMessage} className={styles.form}>
        <input
          type="text"
          name="message"
          placeholder="Type a message..."
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          <FontAwesomeIcon icon={faPaperPlane} className={styles.faPaperPlane} />
        </button>
      </form>
    </div>
    </div>
  );
}


// import { useState, useEffect, useRef } from "react";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "../styles/ChatBox.module.css";

// export function ChatBox({ chat, onClose, onSendMessage }) {
//   const [message, setMessage] = useState("");
//   const messageContainerRef = useRef(null);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (message) {
//       onSendMessage(message);
//       setMessage("");
//     }
//   };

//   useEffect(() => {
//     if (chat && chat.messages && messageContainerRef.current) {
//       messageContainerRef.current.scrollTo({
//         top: messageContainerRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [chat?.messages]);
  

//   return (
//     <div>
//       <div className={styles.chatbox}>
//         <div className={styles.chatboxHeader}>
//           <button className={styles.closeButton} onClick={onClose}>
//             X
//           </button>
//         </div>
//         <div ref={messageContainerRef} className={styles.messageContainer}>
//         {chat?.messages?.map((msg, idx) => (
//             <div key={idx} className={styles.bubbleContainer}>
//               <div
//                 className={`${styles.bubble} ${
//                   msg.sender === "me" ? styles.right : styles.left
//                 }`}
//               >
//                 {msg.message}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={styles.TextBox}>
//         <form onSubmit={handleSendMessage} className={styles.form}>
//           <input
//             type="text"
//             name ="message"
//             placeholder="Type a message..."
//             className={styles.input}
//         />
//         <button type="submit" className={styles.sendButton}>
//           <FontAwesomeIcon icon={faPaperPlane} className={styles.faPaperPlane} />
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }




// import { useState } from 'react';
// import styles from '../styles/ChatBox.module.css';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { TextBox } from './TextBox';


// export function ChatBox() {
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = (message) => {
//     setMessages([...messages, { sender: 'me', message }]);
//   };

//   return (
//     <div className={styles.chatbox}>
//       <div className={styles.messageContainer}>
//         {messages.map((msg, idx) => (
//           <div key={idx} className={styles.bubbleContainer}>
//             <div className={`${styles.bubble} ${msg.sender === 'me' ? styles.right : styles.left}`}>
//               {msg.message}
//             </div>
//           </div>
//         ))}
//       </div>
//       <TextBox onSendMessage={handleSendMessage} />
//     </div>
//   );
// }








// import { useState } from 'react';
// import styles from '../styles/ChatBox.module.css';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { TextBox } from './TextBox';


// export function ChatBox() {
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     const inputEl = e.target.elements.message;
//     const message = inputEl.value.trim();
//     if (message) {
//       setMessages([...messages, { sender: 'me', message }]);
//       inputEl.value = '';
//     }
//   };

//   return (
//     <div className={styles.chatbox}>
//       <div className={styles.messageContainer}>
//         {messages.map((msg, idx) => (
//           <div key={idx} className={styles.bubbleContainer}>
//             <div className={`${styles.bubble} ${msg.sender === 'me' ? styles.right : styles.left}`}>
//               {msg.message}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

















































































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


// import React, { useState } from 'react';
// import styles from '../styles/ChatBox.module.css';
// import { TextBox } from './TextBox';

// export const ChatBox = () => {
//   const [messages, setMessages] = useState([]);

//   const addMessage = (text) => {
//     const newMessage = { text, sender: 'user' };
//     setMessages([...messages, newMessage]);
//   };

//   const renderMessages = () =>
//     messages.map((message, index) => (
//       <div key={index} className={styles.MessageBubble}>
//         {message.text}
//       </div>
//     ));

//   return (
//     <div className={styles.ChatBox}>
//       <div className={styles.MessageList}>{renderMessages()}</div>
//       <TextBox addMessage={addMessage} />
//     </div>
//   );
// };
