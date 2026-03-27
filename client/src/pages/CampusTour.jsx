import { useEffect, useMemo, useState } from 'react';
import campusImage from '../assets/images/campus.png';

const LOADING_MESSAGES = [
  'Preparing 3D environment...',
  'Loading textures and scene data...',
  'Finalizing interactive controls...',
];

const CampusTour = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const prefetchLink = document.createElement('link');
    prefetchLink.rel = 'prefetch';
    prefetchLink.href = '/college360/Tour.html';
    document.head.appendChild(prefetchLink);

    return () => {
      document.head.removeChild(prefetchLink);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) return undefined;

    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
    }, 1400);

    return () => clearInterval(interval);
  }, [isLoaded]);

  const loadingText = useMemo(() => LOADING_MESSAGES[messageIndex], [messageIndex]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505]">
      <iframe
        title="College 3D Campus Tour"
        src="/college360/Tour.html"
        className={`w-full h-full border-0 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        allow="fullscreen"
        loading="eager"
        onLoad={() => setIsLoaded(true)}
      />

      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="w-[92%] max-w-xl rounded-3xl border border-white/15 bg-white/10 p-6 md:p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]">
            <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/20">
              <img
                src={campusImage}
                alt="Campus preview"
                className="h-40 w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute left-4 bottom-4 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-white/75">Immersive Mode</p>
                <p className="text-lg font-semibold">BMSIT 3D Campus Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#FB6D39] shadow-[0_0_0_8px_rgba(251,109,57,0.22)] animate-pulse" />
              <p className="text-sm md:text-base font-medium tracking-wide text-white/95">{loadingText}</p>
            </div>

            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-1/2 animate-[tourload_2.2s_ease-in-out_infinite] rounded-full bg-[#FB6D39]" />
            </div>

            <p className="mt-4 text-xs md:text-sm text-white/70">
              First load can take a few seconds while 3D assets are downloaded.
            </p>
          </div>
        </div>
      )}

      <style>{`@keyframes tourload { 0% { transform: translateX(-100%); } 50% { transform: translateX(40%); } 100% { transform: translateX(200%); } }`}</style>
    </section>
  );
};

export default CampusTour;
