import React from 'react';

const SearchSuggestions = () => {
  const suggestions = [
    {
      category: 'Getting Started',
      items: [
        { text: 'Quick Start Guide', url: '/getting-started/quick-start' },
        { text: 'API Keys Setup', url: '/getting-started/api-keys' },
        { text: 'Authentication', url: '/api/authentication' },
        { text: 'Installation', url: '/getting-started/overview' }
      ]
    },
    {
      category: 'Ad Units',
      items: [
        { text: 'Product Cards', url: '/ad-units/product-card' },
        { text: 'Floating Recommendations', url: '/ad-units/floating-recommendations' },
        { text: 'One Line Ads', url: '/ad-units/one-line-ad' },
        { text: 'Sidebar Ads', url: '/ad-units/sidebar' }
      ]
    },
    {
      category: 'SDKs',
      items: [
        { text: 'Python SDK', url: '/python-sdk/installation' },
        { text: 'TypeScript SDK', url: '/typescript-sdk/installation' },
        { text: 'UI SDK', url: '/ui-sdk/installation' },
        { text: 'React Components', url: '/ui-sdk/installation' }
      ]
    },
    {
      category: 'Examples',
      items: [
        { text: 'AI Assistant Integration', url: '/examples/ai-assistant' },
        { text: 'E-commerce Setup', url: '/examples/ai-assistant' },
        { text: 'Chatbot Integration', url: '/examples/ai-assistant' },
        { text: 'Revenue Optimization', url: '/getting-started/earnings' }
      ]
    }
  ];

  const popularSearches = [
    'API authentication',
    'Install Python SDK',
    'Product recommendations',
    'Ad unit types',
    'Revenue calculator',
    'Quick start',
    'TypeScript examples',
    'Integration guide'
  ];

  return (
    <div className="search-suggestions">
      <div className="search-suggestions__popular">
        <h4>Popular Searches</h4>
        <div className="search-suggestions__tags">
          {popularSearches.map((search, index) => (
            <span key={index} className="search-suggestion-tag">
              {search}
            </span>
          ))}
        </div>
      </div>
      
      <div className="search-suggestions__categories">
        {suggestions.map((category, index) => (
          <div key={index} className="search-suggestion-category">
            <h5>{category.category}</h5>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
