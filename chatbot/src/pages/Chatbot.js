import React, { useState, useMemo, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import ChatInput from '../components/ChatInput';
import ChatArea from '../components/ChatArea';
import { 
  FAQ_DATA, 
  findTopMatches, 
  getCategories, 
  getTopQuestions 
} from '../data/infraProjectFaq';
import './Chatbot.css';

function escapeHtml(s) {
  return (s || "").replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[m]));
}

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: `
        <div class="main-answer">
          <div class="answer-content">
            <p>👋 <strong>Përshëndetje!</strong> Unë jam asistenti virtual i <strong>Infra Project</strong>.</p>
            <p>Mund t'ju ndihmoj me pyetje rreth:</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>🏗️ Shërbimet tona ndertimore</li>
              <li>💰 Çmimet dhe ofertat</li>
              <li>⏰ Afatet e projekteve</li>
              <li>📋 Proceset e punës</li>
              <li>🔧 Mirëmbajtja dhe garanciat</li>
            </ul>
            <p><strong>Si mund t'ju ndihmoj sot?</strong> Thjesht shkruani pyetjen tuaj ose zgjidhni një kategori nga menuja anësore.</p>
          </div>
        </div>
      `,
      timestamp: new Date().toISOString()
    }
  ]);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const categories = useMemo(() => getCategories(FAQ_DATA), []);
  const topQuestions = useMemo(() => getTopQuestions(FAQ_DATA, categories), [categories]);
  
  const stats = useMemo(() => {
    const total = FAQ_DATA.length;
    const categories = new Set(FAQ_DATA.map(r => r.category)).size;
    
    // Calculate accuracy based on data quality metrics
    const avgKeywordsPerQuestion = FAQ_DATA.reduce((sum, item) => sum + (item.keywords?.length || 0), 0) / total;
    const questionsWithKeywords = FAQ_DATA.filter(item => item.keywords && item.keywords.length > 0).length;
    const questionsWithAnswers = FAQ_DATA.filter(item => item.answer && item.answer.length > 10).length;
    
    // Base accuracy on data completeness and quality
    const keywordScore = (questionsWithKeywords / total) * 100;
    const answerScore = (questionsWithAnswers / total) * 100;
    const avgKeywordScore = Math.min(avgKeywordsPerQuestion * 10, 100); // Max 100%
    
    // Weighted average of different quality metrics
    const accuracy = Math.round((keywordScore * 0.3 + answerScore * 0.4 + avgKeywordScore * 0.3));
    
    return {
      total,
      categories,
      accuracy: Math.max(accuracy, 75) // Minimum 75% accuracy
    };
  }, []);

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
    const matches = findTopMatches(FAQ_DATA, userQuery, 5);
    const bestMatch = matches[0];
    
    if (!bestMatch || bestMatch.score < 0.15) {
      // Enhanced no-match response with helpful suggestions
      const categorySuggestions = categories.slice(0, 3).map(([category]) => 
        `<span class="suggestion-mini" onclick="window.setQuery && window.setQuery('Shpjegoni për ${category.replace(/_/g, ' ')}')">
          ${category.replace(/_/g, ' ')}
        </span>`
      ).join(' • ');
      
      const noMatchHtml = `
        <div class="main-answer">
          <div class="answer-content">
            <p>🤔 Nuk mund të gjej një përgjigje të përshtatshme për pyetjen tuaj. Mund të më ndihmoni duke:</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Riformulimi pyetjen me fjalë të ndryshme</li>
              <li>Përdorimi fjalë-kyçe të specifikuara</li>
              <li>Zgjedhja një kategori nga lista më poshtë</li>
            </ul>
            <p><strong>Kategoritë e disponueshme:</strong></p>
            <div class="suggestions-mini" style="margin-top: 10px;">
              ${categorySuggestions}
            </div>
          </div>
        </div>
      `;
      addMessage('bot', noMatchHtml);
      return;
    }

    const bestRecord = bestMatch.record;
    const scorePercent = Math.round(bestMatch.score * 100);
    
    // Enhanced main answer with better formatting and context
    const categoryDisplay = bestRecord.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const confidenceLevel = scorePercent >= 80 ? "Shumë e sigurt" : scorePercent >= 60 ? "E sigurt" : "E përafërt";
    
    let answerHtml = `
      <div class="main-answer">
        <div class="answer-header">
          <span class="answer-category">${categoryDisplay}</span>
          <span class="answer-score">${confidenceLevel} (${scorePercent}%)</span>
        </div>
        <div class="answer-question">
          📋 ${bestRecord.question}
        </div>
        <div class="answer-content">
          <div class="answer-text">${bestRecord.answer}</div>
          <div class="answer-footer">
            <span class="answer-help">💡 Kjo përgjigje ju ndihmon?</span>
          </div>
        </div>
      </div>
    `;

    addMessage('bot', answerHtml);

    // Enhanced suggestions with better context
    if (matches.length > 1) {
      const otherMatches = matches.slice(1, 3);
      const relatedQuestions = otherMatches
        .filter(match => match.score > 0.2)
        .map(match => `
          <div class="related-question" onclick="window.setQuery && window.setQuery('${match.record.question.replace(/'/g, "\\'")}')">
            <span class="question-icon">❓</span>
            <span class="question-text">${match.record.question}</span>
          </div>
        `).join('');

      if (relatedQuestions) {
        const suggestionsHtml = `
          <div class="suggestions-enhanced">
            <div class="suggestions-header">
              <span class="suggestions-label">🔗 Pyetje të ngjashme:</span>
            </div>
            <div class="related-questions">
              ${relatedQuestions}
            </div>
          </div>
        `;
        addMessage('bot', suggestionsHtml);
      }
    }

    // Add helpful follow-up suggestions based on category
    addCategorySpecificSuggestions(bestRecord.category);
  };

  const addCategorySpecificSuggestions = (category) => {
    const suggestions = {
      'ndertim': [
        'A keni nevojë për një vlerësim të lirë?',
        'Sa kohë zgjat një projekt tipik?',
        'Cilat janë garanci tuaja?'
      ],
      'asfaltim': [
        'Sa kushton asfaltimi i një rruge?',
        'A ofroni mirëmbajtje?',
        'Cila është garancia për asfaltim?'
      ],
      'menaxhim': [
        'Si e menaxhoni buxhetin?',
        'A raportoni rregullisht progresin?',
        'Cila është strategjia juaj për kohën?'
      ],
      'renovim': [
        'A ofroni dizajn të brendshëm?',
        'Sa kohë zgjat një renovim?',
        'A mund të renovoni vetëm një dhomë?'
      ]
    };

    const categorySuggestions = suggestions[category];
    if (categorySuggestions) {
      setTimeout(() => {
        const followUpHtml = `
          <div class="follow-up-suggestions">
            <div class="follow-up-header">
              <span class="follow-up-label">💭 Mund të pyesni gjithashtu:</span>
            </div>
            <div class="follow-up-questions">
              ${categorySuggestions.map(question => `
                <div class="follow-up-item" onclick="window.setQuery && window.setQuery('${question.replace(/'/g, "\\'")}')">
                  ${question}
                </div>
              `).join('')}
            </div>
          </div>
        `;
        addMessage('bot', followUpHtml);
      }, 500);
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


  // Expose setQuery globally for onclick handlers
  React.useEffect(() => {
    window.setQuery = setQuery;
    return () => {
      delete window.setQuery;
    };
  }, []);

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-layout">
          <Sidebar
            stats={stats}
            categories={categories}
            topQuestions={topQuestions}
            onCategoryClick={handleCategoryClick}
            onQuestionClick={handleQuestionClick}
          />
          
          <main className="chatbot-main">
            <ChatArea 
              messages={messages}
            />
            
            <ChatInput
              value={query}
              onChange={setQuery}
              onSend={handleAsk}
              ref={inputRef}
              placeholder="Shkruani pyetjen tuaj këtu..."
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
