import React from 'react';

const FeatureComparison = ({ 
  title = "Feature Comparison",
  features = [],
  columns = []
}) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'available':
        return <span className="status-indicator status-indicator--available">✓ Available</span>;
      case 'coming-soon':
        return <span className="status-indicator status-indicator--coming-soon">⏳ Coming Soon</span>;
      case 'not-available':
        return <span className="status-indicator status-indicator--not-available">✗ Not Available</span>;
      default:
        return <span>{status}</span>;
    }
  };

  return (
    <div className="feature-comparison">
      <h3>{title}</h3>
      <div className="table-wrapper">
        <table className="sdk-comparison">
          <thead>
            <tr>
              <th>Feature</th>
              {columns.map((column, index) => (
                <th key={index}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td>
                  <strong>{feature.name}</strong>
                  {feature.description && (
                    <div style={{fontSize: '0.875rem', color: 'var(--ifm-color-content-secondary)', marginTop: '0.25rem'}}>
                      {feature.description}
                    </div>
                  )}
                </td>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>
                    {getStatusIcon(feature.support[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeatureComparison;
