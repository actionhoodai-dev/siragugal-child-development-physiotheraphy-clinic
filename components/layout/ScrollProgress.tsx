'use client';

export default function ScrollProgress() {
  return (
    <div 
      id="scroll-progress" 
      className="fixed top-0 left-0 h-1 bg-secondary w-0 z-[9999]" 
      role="progressbar"
      aria-label="Scroll Progress Indicator"
    />
  );
}
