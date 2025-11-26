import React, { useState } from 'react';
import { ArrowDownToLine, Check } from 'lucide-react';

export const FloppyDiskResume = ({ theme }) => {
  const [status, setStatus] = useState('idle');

  const handleDownload = () => {
    if (status !== 'idle') return;
    setStatus('downloading');

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#'; // Replace with actual resume link
      link.download = 'resume.pdf';
      // link.click(); // Uncomment when real link is ready
      console.log("Download triggered");

      setStatus('done');

      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div
      className={`fixed z-[54] transition-all duration-500
        top-20 left-4
        md:top-10 md:left-10
    `}
    >
      <button
        onClick={handleDownload}
        disabled={status !== 'idle'}
        className="group relative flex flex-col items-center justify-center outline-none"
        aria-label="Download Resume"
      >
        {/* RPG Dialog Box */}
        <div className="absolute left-full ml-4 top-0 bg-white px-3 py-1 border-2 border-gray-800 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] z-20 pointer-events-none flex flex-col items-start gap-0.5 transform rotate-0 group-hover:scale-105 transition-all duration-300">
          <div className="absolute top-2.5 -left-2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-gray-800 border-b-[6px] border-b-transparent"></div>
          <div className="absolute top-2.5 -left-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-white border-b-[6px] border-b-transparent z-10"></div>

          <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-gray-300"></div>
          <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-gray-300"></div>

          <span className="font-pixel text-lg text-gray-800 leading-none tracking-wide whitespace-nowrap">
            RESUME_PDF
            <span className="animate-pulse ml-0.5">▼</span>
          </span>
        </div>

        {/* Tooltip */}
        <div
          className={`
            absolute top-full mt-4 px-3 py-1.5 
            bg-white/90 backdrop-blur-sm border border-white/50 
            text-gray-600 text-xs font-bold font-mono tracking-wide rounded-xl 
            shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-2
            ${status === 'done' ? '!opacity-100 !text-green-600 !translate-y-0' : ''}
        `}
        >
          {status === 'done' ? <Check size={12} /> : <ArrowDownToLine size={12} />}
          {status === 'done' ? 'DOWNLOADED' : 'DOWNLOAD CV'}
        </div>

        {/* Shadow */}
        <div className="absolute -bottom-4 w-10 h-2 bg-black/20 rounded-[100%] blur-sm transition-all duration-300 group-hover:scale-75 group-hover:opacity-10 group-active:scale-110 group-active:opacity-30"></div>

        {/* Disk */}
        <div
          className={`
            relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl shadow-inner overflow-hidden border-2 border-white/50
            transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
            ${status === 'downloading' ? 'translate-y-2 scale-95 rotate-0' : 'group-hover:-translate-y-3 group-hover:rotate-6 rotate-0'}
            ${status === 'done' ? 'rotate-[360deg]' : ''}
          `}
          style={{ backgroundColor: theme.secondary }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10%)', backgroundSize: '4px 4px' }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-lg border-x border-b border-black/5 shadow-sm">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-4 bg-gray-800/80 rounded-[1px]"></div>
          </div>

          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 md:w-10 h-4 md:h-5 bg-[#FDF6E3] rounded shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center transform transition-transform group-hover:scale-110">
            <div className="w-full h-full p-0.5 flex flex-col items-center justify-center gap-[1px]">
              {status === 'idle' ? (
                <>
                  <div className="w-6 md:w-8 h-0.5 bg-gray-300 rounded-full"></div>
                  <div className="w-4 md:w-6 h-0.5 bg-gray-300 rounded-full"></div>
                  <span className="text-[4px] md:text-[5px] font-bold text-gray-400 leading-none mt-[1px]">PDF</span>
                </>
              ) : status === 'downloading' ? (
                <div className="w-3 h-3 border-2 border-t-transparent border-blue-400 rounded-full animate-spin"></div>
              ) : (
                <Check size={10} className="text-green-500" />
              )}
            </div>
          </div>

          <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-black/10 rounded-[1px]"></div>
        </div>
      </button>
    </div>
  );
};
