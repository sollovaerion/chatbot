import React from 'react';
import './Sidebar.css';

const Sidebar = ({ 
  stats, 
  categories, 
  topQuestions, 
  onCategoryClick, 
  onQuestionClick 
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="description">
          <p>Asistenti virtual i Infra Project me algoritme të avancuara për përputhjen e pyetjeve. Klikoni kategori ose pyetje për të filluar.</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Pyetje & Përgjigje</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{stats.categories}</div>
            <div className="stat-label">Kategoritë</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">{stats.accuracy}%</div>
            <div className="stat-label">Saktësia</div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Kategoritë</h3>
          <div className="categories">
            {categories.map(([category, count]) => (
              <div 
                key={category} 
                className="category-item"
                onClick={() => onCategoryClick(category)}
              >
                <span className="category-name">
                  {category.replace(/_/g, ' ')}
                </span>
                <span className="category-count">{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Pyetje të Popullarizuara</h3>
          <div className="top-questions">
            {topQuestions.map((question, index) => (
              <button 
                key={index} 
                className="question-button"
                onClick={() => onQuestionClick(question.question)}
                title={question.question}
              >
                {question.question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

