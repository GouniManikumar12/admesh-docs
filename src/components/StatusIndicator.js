import React from 'react';

const StatusIndicator = ({ 
  status,
  label,
  size = 'medium',
  showLabel = true
}) => {
  const getStatusClass = () => {
    switch (status) {
      case 'available':
      case 'online':
      case 'active':
        return 'status-indicator--available';
      case 'coming-soon':
      case 'pending':
        return 'status-indicator--coming-soon';
      case 'not-available':
      case 'offline':
      case 'inactive':
        return 'status-indicator--not-available';
      case 'beta':
        return 'status-indicator--beta';
      case 'deprecated':
        return 'status-indicator--deprecated';
      default:
        return 'status-indicator--unknown';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'available':
      case 'online':
      case 'active':
        return '✓';
      case 'coming-soon':
      case 'pending':
        return '○';
      case 'not-available':
      case 'offline':
      case 'inactive':
        return '×';
      case 'beta':
        return 'β';
      case 'deprecated':
        return '!';
      default:
        return '?';
    }
  };

  const getStatusLabel = () => {
    if (label) return label;
    
    switch (status) {
      case 'available':
        return 'Available';
      case 'online':
        return 'Online';
      case 'active':
        return 'Active';
      case 'coming-soon':
        return 'Coming Soon';
      case 'pending':
        return 'Pending';
      case 'not-available':
        return 'Not Available';
      case 'offline':
        return 'Offline';
      case 'inactive':
        return 'Inactive';
      case 'beta':
        return 'Beta';
      case 'deprecated':
        return 'Deprecated';
      default:
        return 'Unknown';
    }
  };

  return (
    <span className={`status-indicator status-indicator--${size} ${getStatusClass()}`}>
      <span className="status-indicator__icon">{getStatusIcon()}</span>
      {showLabel && (
        <span className="status-indicator__label">{getStatusLabel()}</span>
      )}
    </span>
  );
};

export default StatusIndicator;
