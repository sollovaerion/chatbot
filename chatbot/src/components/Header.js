import React from 'react';
import './Header.css';

const Header = ({ onFocusInput }) => {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1>Shop Assist · FAQ Chatbot</h1>
      </div>
      <div className="header-actions">
        <button 
          className="btn primary"
          onClick={onFocusInput}
          title="Ask a question"
        >
          Ask a question
        </button>
      </div>
    </header>
  );
};

export default Header;
