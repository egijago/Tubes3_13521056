import { useState } from 'react';
import styles from '../styles/TextBox.module.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function TextBox() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const inputEl = e.target.elements.message;
    const message = inputEl.value.trim();
    if (message) {
      setMessages([...messages, { sender: 'me', message }]);
      inputEl.value = '';
    }
  };

  return (
    <div className={styles.chatbox}>
      <div className={styles.messageContainer}>
        {messages.map((msg, idx) => (
          <div key={idx} className={styles.bubbleContainer}>
            <div className={`${styles.bubble} ${msg.sender === 'me' ? styles.right : styles.left}`}>
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className={styles.form}>
        <input type="text" name="message" placeholder="Type a message..." className={styles.input} />
        <button type="submit" className={styles.sendButton}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
}
