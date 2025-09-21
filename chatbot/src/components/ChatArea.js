import React, { useEffect, useRef } from 'react';
import Message from './Message';
import './ChatArea.css';

const ChatArea = ({ messages }) => {
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-area" role="log" aria-live="polite">
      <div className="messages-container">
        {messages.map((message, index) => (
          <Message 
            key={index} 
            message={message} 
          />
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
};

export default ChatArea;
