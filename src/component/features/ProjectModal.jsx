import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Github, Maximize2 } from 'lucide-react';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  if (!isOpen || !project) return null;

  const allImages = [project.image, ...(project.gallery || [])];

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#5D576B]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Window */}
      <div className="relative w-[95vw] max-w-6xl h-[90vh] bg-[#FAF9F6] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        
        {/* Browser Header */}
        <div className="bg-[#EBEBEB] border-b border-gray-200 p-3 sm:p-4 flex items-center justify-between shrink-0 select-none gap-2">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-400 hover:bg-red-500 transition-colors shadow-sm group relative"
            >
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-[8px] font-bold text-red-900">✕</span>
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm hidden sm:block"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm hidden sm:block"></div>
          </div>

          {/* Address Bar */}
          <div className="flex-1 mx-2 sm:mx-12 lg:mx-32 min-w-0">
            <div className="bg-white rounded-lg px-3 py-1.5 text-xs font-mono text-gray-500 text-center shadow-sm border border-gray-100 flex items-center justify-center gap-2 overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></span>
              <span className="truncate">
                https://portfolio.local/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-200 rounded-lg transition-colors shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto overflow-x-hidden flex-1 p-4 sm:p-6 md:p-10 no-scrollbar">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 h-full">
            
            {/* Left: Gallery */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">

              {/* Main Image */}
              <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group flex-shrink-0">
                <img 
                  src={activeImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  IMG_VIEWER_V2
                </div>
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-4 pt-2 no-scrollbar px-1">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-24 sm:w-32 h-16 sm:h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all transform hover:scale-105 ${
                        activeImage === img
                          ? 'border-[#81B29A] ring-4 ring-[#81B29A]/10 shadow-md scale-105'
                          : 'border-transparent opacity-70 hover:opacity-100 hover:shadow-sm'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div className="w-full lg:w-1/3 flex flex-col lg:h-full lg:overflow-y-auto no-scrollbar pb-10">
              <div className="mb-6">
                <h2 className="text-3xl md:text-5xl font-black font-cloudy text-[#5D576B] mb-4 leading-none">
                  {project.title}
                </h2>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                  Project ID: #{project.id.padStart(4, '0')}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600 font-mono shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-base text-gray-600 font-medium mb-10 leading-relaxed">
                <p className="mb-4">{project.description}</p>
                <p>
                  Built with a focus on user experience and clean architecture.
                  The interface mimics classic desktop environments while leveraging modern web technologies.
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Responsive Design System</li>
                  <li>Real-time Data Sync</li>
                  <li>Custom Animation Library</li>
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={project.link}
                  className="group flex items-center justify-center gap-2 bg-[#5D576B] text-white py-4 rounded-2xl font-bold font-cloudy shadow-lg shadow-[#5D576B]/20 hover:bg-[#4A4556] hover:translate-y-[-2px] hover:shadow-xl transition-all"
                >
                  <ExternalLink size={20} className="group-hover:rotate-12 transition-transform" /> 
                  View Live Demo
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    className="group flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-100 py-4 rounded-2xl font-bold font-cloudy hover:bg-gray-50 hover:border-gray-200 transition-all"
                  >
                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#EBEBEB] p-3 px-6 flex justify-between items-center text-[10px] font-mono text-gray-400 border-t border-gray-200 shrink-0">
          <span className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div> CONNECTED
          </span>
          <span>MEM: 64KB OK</span>
        </div>
      </div>
    </div>,
    document.body
  );
};
