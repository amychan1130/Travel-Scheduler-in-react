import React from 'react';
import { ReactComponent as EmptyStateIllustration } from '../icons/Asset 26.svg';

function EmptyState() {
  return (
    <div className="empty-state-container">
      <h3>   </h3>
      <h3>   </h3>
      <h3>   </h3>
      <h3>   </h3>
      <EmptyStateIllustration />
      <p className="empty-state-text">Your scheduler is empty</p>
    </div>
  );
}

export default EmptyState;
