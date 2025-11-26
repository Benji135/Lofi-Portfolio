import React from 'react';

export const StaggerText = ({ text, visible, className = "" }) => {
  if (!visible) return <span className={`opacity-0 ${className}`}>{text}</span>;
  
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <span 
          key={i}
          className="animate-rubber inline-block"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};
