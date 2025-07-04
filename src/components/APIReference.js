import React, { useState } from 'react';

const APIReference = ({ 
  endpoint,
  method = 'GET',
  description,
  parameters = [],
  responses = [],
  examples = []
}) => {
  const [activeTab, setActiveTab] = useState('parameters');

  const getMethodClass = (method) => {
    return `api-endpoint--${method.toLowerCase()}`;
  };

  return (
    <div className="api-reference">
      <div className="api-reference__header">
        <div className="api-reference__endpoint">
          <span className={`api-endpoint ${getMethodClass(method)}`}>
            <span className="api-method">{method}</span>
            {endpoint}
          </span>
        </div>
        <p className="api-reference__description">{description}</p>
      </div>

      <div className="api-reference__content">
        <div className="api-reference__tabs">
          <button
            className={`api-reference__tab ${activeTab === 'parameters' ? 'api-reference__tab--active' : ''}`}
            onClick={() => setActiveTab('parameters')}
          >
            Parameters
          </button>
          <button
            className={`api-reference__tab ${activeTab === 'responses' ? 'api-reference__tab--active' : ''}`}
            onClick={() => setActiveTab('responses')}
          >
            Responses
          </button>
          <button
            className={`api-reference__tab ${activeTab === 'examples' ? 'api-reference__tab--active' : ''}`}
            onClick={() => setActiveTab('examples')}
          >
            Examples
          </button>
        </div>

        <div className="api-reference__tab-content">
          {activeTab === 'parameters' && (
            <div className="api-reference__parameters">
              {parameters.length > 0 ? (
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Parameter</th>
                        <th>Type</th>
                        <th>Required</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parameters.map((param, index) => (
                        <tr key={index}>
                          <td>
                            <code>{param.name}</code>
                          </td>
                          <td>
                            <span className="badge badge--info">{param.type}</span>
                          </td>
                          <td>
                            {param.required ? (
                              <span className="badge badge--danger">Required</span>
                            ) : (
                              <span className="badge badge--secondary">Optional</span>
                            )}
                          </td>
                          <td>{param.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No parameters required for this endpoint.</p>
              )}
            </div>
          )}

          {activeTab === 'responses' && (
            <div className="api-reference__responses">
              {responses.map((response, index) => (
                <div key={index} className="api-response">
                  <div className="api-response__header">
                    <span className={`badge ${response.status >= 400 ? 'badge--danger' : 'badge--success'}`}>
                      {response.status}
                    </span>
                    <span className="api-response__description">{response.description}</span>
                  </div>
                  {response.schema && (
                    <pre className="api-response__schema">
                      <code>{JSON.stringify(response.schema, null, 2)}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="api-reference__examples">
              {examples.map((example, index) => (
                <div key={index} className="api-example">
                  <h4>{example.title}</h4>
                  <p>{example.description}</p>
                  <pre>
                    <code>{example.code}</code>
                  </pre>
                  {example.response && (
                    <div className="api-example__response">
                      <h5>Response:</h5>
                      <pre>
                        <code>{JSON.stringify(example.response, null, 2)}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default APIReference;
