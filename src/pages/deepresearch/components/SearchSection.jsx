import React from 'react';
import { Search, Brain, RefreshCw } from 'lucide-react';
import { ResearchTopics } from '../utils/types';

const SearchSection = ({ 
  searchQuery, 
  setSearchQuery, 
  isSearching, 
  handleSearch 
}) => {
  return (
    <div className="search-section">
      <h2 className="section-title">Research Query</h2>
      <div className="search-input-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Enter a detailed market analysis research query..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <div className="search-icon">
            <Brain size={20} />
          </div>
        </div>
        <button 
          className={`search-button ${isSearching ? 'disabled' : ''}`}
          onClick={handleSearch}
          disabled={isSearching || !searchQuery.trim()}
        >
          {isSearching ? <RefreshCw size={20} className="icon spinning" /> : <Search size={20} className="icon" />}
          {isSearching ? 'Researching...' : 'Research'}
        </button>
      </div>
      
      <div className="suggested-topics">
        <div className="topic-label">Suggested topics:</div>
        <button className="topic-tag" onClick={() => setSearchQuery('Consumer trends in eco-friendly stationery')}>
          Consumer trends in eco-friendly stationery
        </button>
        <button className="topic-tag" onClick={() => setSearchQuery('Gen Z campus life product preferences')}>
          Gen Z campus life product preferences
        </button>
        <button className="topic-tag" onClick={() => setSearchQuery('Holiday gift market forecast 2025')}>
          Holiday gift market forecast 2025
        </button>
      </div>
    </div>
  );
};

export default SearchSection; 