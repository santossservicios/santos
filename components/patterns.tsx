export function BrickPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bricks" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
            <rect width="60" height="30" fill="none" stroke="#3ACBFF" strokeWidth="0.8" />
            <line x1="30" y1="0" x2="30" y2="15" stroke="#3ACBFF" strokeWidth="0.8" />
            <line x1="0" y1="15" x2="60" y2="15" stroke="#3ACBFF" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bricks)" />
      </svg>
    </div>
  );
}

export function StuccoPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="stucco">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="5" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncR type="linear" slope="1.5" intercept="-0.2" />
              <feFuncG type="linear" slope="1.5" intercept="-0.2" />
              <feFuncB type="linear" slope="1.5" intercept="-0.2" />
            </feComponentTransfer>
          </filter>
          <pattern id="stucco-tiles" x="0" y="0" width="200" height="150" patternUnits="userSpaceOnUse">
            <rect width="200" height="150" filter="url(#stucco)" />
            <line x1="0" y1="0" x2="200" y2="0" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="0" y1="150" x2="200" y2="150" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="150" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
            <line x1="200" y1="0" x2="200" y2="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stucco-tiles)" />
      </svg>
    </div>
  );
}

export function DiagonalPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="0" y1="20" x2="20" y2="0" stroke="#3ACBFF" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal)" />
      </svg>
    </div>
  );
}

export function TilePattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tiles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="#3ACBFF" strokeWidth="0.6" />
            <rect x="2" y="2" width="36" height="36" fill="none" stroke="#3ACBFF" strokeWidth="0.3" rx="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tiles)" />
      </svg>
    </div>
  );
}

export function CrosshatchPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="crosshatch" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <line x1="0" y1="16" x2="16" y2="0" stroke="#3ACBFF" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="16" y2="16" stroke="#3ACBFF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crosshatch)" />
      </svg>
    </div>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#3ACBFF" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

export function WallPanelPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wallpanel" x="0" y="0" width="32" height="100%" patternUnits="userSpaceOnUse">
            <rect x="3" y="0" width="26" height="100%" fill="rgba(255,255,255,0.04)" />
            <line x1="3" y1="0" x2="3" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="29" y1="0" x2="29" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <line x1="16" y1="0" x2="16" y2="100%" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="0" y2="100%" stroke="rgba(0,0,0,0.8)" strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wallpanel)" />
      </svg>
    </div>
  );
}
