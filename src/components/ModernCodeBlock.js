import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

const ModernCodeBlock = ({ 
  children, 
  language, 
  title, 
  showLineNumbers = false,
  highlight = [],
  metastring = ''
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="modern-code-block">
      {title && (
        <div className="code-block-title">
          <span className="code-block-title__text">{title}</span>
          <button 
            className="code-block-copy-button"
            onClick={handleCopy}
            aria-label="Copy code"
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
              </svg>
            )}
          </button>
        </div>
      )}
      <CodeBlock
        language={language}
        showLineNumbers={showLineNumbers}
        metastring={metastring}
      >
        {children}
      </CodeBlock>
    </div>
  );
};

export default ModernCodeBlock;
