import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  const { role, content, timestamp } = message;
  
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderContent = () => {
    if (role === 'human') {
      return <div className="message-text">{content}</div>;
    }

    // Bot message
    return (
      <div 
        className="message-html" 
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  return (
    <div className={`message ${role}`}>
      <div className="message-avatar">
        {role === 'human' ? (
          <div className="avatar human">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ) : (
          <div className="avatar bot">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="11"
                width="18"
                height="11"
                rx="2"
                ry="2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="5"
                r="2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7V11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="message-content">
        {renderContent()}
        {timestamp && (
          <div className="message-timestamp">
            {formatTimestamp(timestamp)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
