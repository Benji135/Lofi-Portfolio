import React, { useState } from 'react';

export const FloppyDiskResume = ({ theme }) => {
  const [status, setStatus] = useState('idle');

  const handleDownload = () => {
    if (status !== 'idle') return;
    setStatus('inserting');
    
    setTimeout(() => setStatus('reading'), 1500);
    setTimeout(() => {
      setStatus('done');
      // Actual download logic here
      console.log("Download triggered");
    }, 3500);
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <div className="flex flex-col items-center transform scale-90 sm:scale-100">
      {/* Floppy disk implementation */}
    </div>
  );
};