import React from 'react';

export const Reveal = ({ 
  children, 
  visible, 
  delay = '', 
  className = '',
  type = 'elastic' 
}) => {
  let animClass = 'reveal-fade';
  if (type === 'elastic') animClass = 'reveal-elastic';
  if (type === 'pop') animClass = 'reveal-pop';
  if (type === 'blur') animClass = 'reveal-blur';
  
  return (
    <div className={`reveal ${animClass} ${visible ? 'reveal-visible' : ''} ${delay} ${className}`}>
      {children}
    </div>
  );
};
