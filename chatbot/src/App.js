import React, { useState, useMemo, useRef } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ChatInput from './components/ChatInput';
import ChatArea from './components/ChatArea';
import { 
  FAQ_DATA, 
  findTopMatches, 
  getCategories, 
  getTopQuestions 
} from './data/faqData';
import './index.css';

function escapeHtml(s) {
  return (s || "").replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[m]));
}

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: 'Hi! I\'m your Shop Assist chatbot. I can help you with questions about orders, shipping, returns, products, and more. What would you like to know?',
      timestamp: new Date().toISOString()
    }
  ]);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const categories = useMemo(() => getCategories(FAQ_DATA), []);
  const topQuestions = useMemo(() => getTopQuestions(FAQ_DATA, categories), [categories]);
  
  const stats = useMemo(() => ({
    total: FAQ_DATA.length,
    categories: new Set(FAQ_DATA.map(r => r.category)).size,
    accuracy: 89.2
  }), []);

  const addMessage = (role, content) => {
    const newMessage = {
      role,
      content,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleAsk = () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    
    addMessage('human', escapeHtml(trimmedQuery));
    setQuery("");
    
    setTimeout(() => {
      generateAnswer(trimmedQuery);
    }, 100);
  };

  const generateAnswer = (userQuery) => {
    const matches = findTopMatches(FAQ_DATA, userQuery, 3);
    const bestMatch = matches[0];
    
    if (!bestMatch || bestMatch.score < 0.1) {
      addMessage('bot', "I couldn't find a strong match for your question. Try rephrasing it or select a category from the sidebar.");
      return;
    }

    const bestRecord = bestMatch.record;
    const scorePercent = Math.round(bestMatch.score * 100);
    
    // Main answer
    let answerHtml = `
      <div>
        <div class="meta">
          Best match · <span class="pill">${bestRecord.category.replace(/_/g, ' ')}</span> · Score ${scorePercent}%
        </div>
        <div style="font-weight: 700; margin: 8px 0; color: var(--text);">
          ${bestRecord.question}
        </div>
        <div style="color: var(--muted); line-height: 1.6;">
          ${bestRecord.answer}
        </div>
      </div>
    `;

    addMessage('bot', answerHtml);

    // Additional suggestions if available
    if (matches.length > 1) {
      const otherMatches = matches.slice(1);
      const suggestionsHtml = `
        <div>
          <div class="meta">Other suggestions</div>
          ${otherMatches.map(match => `
            <div class="bubble" style="margin-top: 8px;">
              <div class="meta">
                Alt ${Math.round(match.score * 100)}% · 
                <span class="pill">${match.record.category.replace(/_/g, ' ')}</span>
              </div>
              <div style="font-weight: 700; margin: 4px 0; color: var(--text);">
                ${match.record.question}
              </div>
              <div style="color: var(--muted); line-height: 1.5;">
                ${match.record.answer}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      addMessage('bot', suggestionsHtml);
    }
  };

  const handleCategoryClick = (category) => {
    const categoryQuestions = FAQ_DATA.filter(r => r.category === category);
    if (categoryQuestions.length > 0) {
      setQuery(categoryQuestions[0].question);
      inputRef.current?.focus();
    }
  };

  const handleQuestionClick = (question) => {
    setQuery(question);
    inputRef.current?.focus();
  };

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };


  return (
    <div className="app">
      <Header 
        onFocusInput={handleFocusInput}
      />
      
      <div className="layout">
        <Sidebar
          stats={stats}
          categories={categories}
          topQuestions={topQuestions}
          onCategoryClick={handleCategoryClick}
          onQuestionClick={handleQuestionClick}
        />
        
        <main className="main-content">
          <ChatArea 
            messages={messages}
          />
          
          <ChatInput
            value={query}
            onChange={setQuery}
            onSend={handleAsk}
            ref={inputRef}
          />
        </main>
      </div>
    </div>
  );
}

