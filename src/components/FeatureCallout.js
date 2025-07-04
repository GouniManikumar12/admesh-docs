import React from 'react';

const FeatureCallout = ({ 
  type = 'info',
  title,
  children,
  icon,
  action
}) => {
  const getCalloutClass = () => {
    switch (type) {
      case 'success':
        return 'feature-callout--success';
      case 'warning':
        return 'feature-callout--warning';
      case 'danger':
        return 'feature-callout--danger';
      case 'primary':
        return 'feature-callout--primary';
      default:
        return 'feature-callout--info';
    }
  };

  const getDefaultIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'warning':
        return '!';
      case 'danger':
        return '×';
      case 'primary':
        return '•';
      default:
        return 'i';
    }
  };

  return (
    <div className={`feature-callout ${getCalloutClass()}`}>
      <div className="feature-callout__header">
        <div className="feature-callout__icon">
          {icon || getDefaultIcon()}
        </div>
        <h3 className="feature-callout__title">{title}</h3>
      </div>
      <div className="feature-callout__content">
        {children}
      </div>
      {action && (
        <div className="feature-callout__action">
          {action}
        </div>
      )}
    </div>
  );
};

export default FeatureCallout;
