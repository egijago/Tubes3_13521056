
// import { useState } from 'react';
// import styles from '../styles/TextBox.module.css';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// export function TextBox({ onSendMessage }) {

//   const [message, setMessage] = useState('');

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     const trimmedMessage = message.trim();
//     if (trimmedMessage) {
//       onSendMessage(trimmedMessage);
//       setMessage('');
//     }
//   };

//   return (
//     <div className={styles.TextBox}>
//       <form onSubmit={handleSendMessage} className={styles.form}>
//         <input
//           type="text"
//           name="message"
//           placeholder="Type a message..."
//           className={styles.input}
//           // value={message}
//           // onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit" className={styles.sendButton}>
//           <FontAwesomeIcon icon={faPaperPlane} className={styles.faPaperPlane} />
//         </button>
//       </form>
//     </div>
//   );
// }


// // import { useState } from 'react';
// // import styles from '../styles/TextBox.module.css';
// // import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// // export function TextBox() {
// //   const [messages, setMessages] = useState([]);

// //   const handleSendMessage = (e) => {
// //     e.preventDefault();
// //     const inputEl = e.target.elements.message;
// //     const message = inputEl.value.trim();
// //     if (message) {
// //       setMessages([...messages, { sender: 'me', message }]);
// //       inputEl.value = '';
// //     }
// //   };

// //   return (
// //     <div className={styles.TextBox}>
// //       <form onSubmit={handleSendMessage} className={styles.form}>
// //         <input type="text" name="message" placeholder="Type a message..." className={styles.input} />
// //         <button type="submit" className={styles.sendButton}>
// //           <FontAwesomeIcon icon={faPaperPlane} className={styles.faPaperPlane}/>
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }










// // import React, { useState } from 'react';
// // import styles from '../styles/TextBox.module.css';

// // export const TextBox = () => {
// //   const [text, setText] = useState('');

// //   const handleTextChange = (event) => {
// //     setText(event.target.value);
// //   };

// //   return (
// //     <div className={styles.TextBox} >
// //       <input type="text" value={text} onChange={handleTextChange} placeholder="Send a message."/>
// //     </div>
// //   );
// // };



















// // import React, { useState } from 'react';
// // import styles from '../styles/TextBox.module.css';

// // export const TextBox = () => {
// //   const [text, setText] = useState('');
// //   const [messages, setMessages] = useState([]);

// //   const handleTextChange = (event) => {
// //     setText(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (text.trim() !== '') {
// //       setMessages([...messages, { text, sender: 'me' }]);
// //       setText('');
// //     }
// //   };

// //   return (
// //     <div className={styles.TextBox} >
// //       <form onSubmit={handleSubmit}>
// //         <input 
// //           type="text" 
// //           value={text} 
// //           onChange={handleTextChange} 
// //           placeholder="Send a message."/>
// //       </form>
// //       <div>
// //         {messages.map((message, index) => (
// //           <div key={index} className={`${styles.bubble} ${styles[message.sender]}`}>
// //             {message.text}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };



















// // import React, { useState } from 'react';
// // import styles from '../styles/TextBox.module.css';

// // export const TextBox = ({ sendMessage }) => {
// //   const [text, setText] = useState('');

// //   const handleTextChange = (event) => {
// //     setText(event.target.value);
// //   };

// //   const handleKeyDown = (event) => {
// //     if (event.key === 'Enter' && text.trim() !== '') {
// //       sendMessage(text);
// //       setText('');
// //     }
// //   };

// //   return (
// //     <div className={styles.TextBox} >
// //       <input type="text" value={text} onChange={handleTextChange} onKeyDown={handleKeyDown} placeholder="Send a message."/>
// //     </div>
// //   );
// // };
