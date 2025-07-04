import React, { useState } from 'react';

const InteractiveDemo = ({ 
  title = "Interactive Demo",
  description = "Try out the AdMesh SDK with live examples",
  examples = []
}) => {
  const [activeExample, setActiveExample] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const runExample = async (example) => {
    setIsLoading(true);
    setResult(null);
    
    // Simulate API call
    setTimeout(() => {
      setResult({
        success: true,
        data: example.mockResponse || {
          recommendations: [
            {
              id: 'demo-1',
              title: 'Stripe Payment Processing',
              reason: 'Perfect for handling online payments with advanced features',
              price: 'Free + 2.9% per transaction',
              rating: 4.8,
              features: ['Global payments', 'Advanced fraud protection', 'Developer-friendly APIs']
            },
            {
              id: 'demo-2', 
              title: 'Vercel Hosting Platform',
              reason: 'Ideal for deploying modern web applications',
              price: 'Free tier available',
              rating: 4.9,
              features: ['Edge network', 'Automatic scaling', 'Git integration']
            }
          ]
        }
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="interactive-demo">
      <div className="interactive-demo__header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
      <div className="interactive-demo__content">
        <div className="interactive-demo__tabs">
          {examples.map((example, index) => (
            <button
              key={index}
              className={`interactive-demo__tab ${activeExample === index ? 'interactive-demo__tab--active' : ''}`}
              onClick={() => setActiveExample(index)}
            >
              {example.name}
            </button>
          ))}
        </div>
        
        {examples[activeExample] && (
          <div className="interactive-demo__example">
            <div className="interactive-demo__code">
              <pre>
                <code>{examples[activeExample].code}</code>
              </pre>
              <button 
                className="interactive-demo__run-button"
                onClick={() => runExample(examples[activeExample])}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Running...
                  </>
                ) : (
                  'Run Example'
                )}
              </button>
            </div>
            
            {(result || isLoading) && (
              <div className="interactive-demo__result">
                <h4>Result:</h4>
                {isLoading ? (
                  <div className="loading-skeleton" style={{height: '100px', width: '100%'}}></div>
                ) : result?.success ? (
                  <div className="interactive-demo__success">
                    <pre>{JSON.stringify(result.data, null, 2)}</pre>
                  </div>
                ) : (
                  <div className="interactive-demo__error">
                    <p>Error: {result?.error || 'Something went wrong'}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveDemo;
