import React from 'react';

const Logo = ({ width = 83, height = 40, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 150"
        className="w-full h-full"
        width={width}
        height={height}
      >
        {/* Monitor frame */}
        <rect x="20" y="20" width="260" height="110" rx="10" fill="#8795a1" />
        <rect x="25" y="25" width="250" height="90" rx="5" fill="#1a1a1a" />

        {/* Scan lines */}
        <g opacity="0.1">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M25 ${30 + i * 10} L275 ${30 + i * 10}`}
              stroke="#00ff00"
              stroke-width="1"
            />
          ))}
        </g>

        {/* Command prompt and text */}
        <text x="35" y="50" fontFamily="monospace" fontSize="14" fill="#00ff00">
          C:\&gt;
        </text>
        <text x="75" y="50" fontFamily="monospace" fontSize="14" fill="#ffffff">
          blank
        </text>
        <text
          x="125"
          y="50"
          fontFamily="monospace"
          fontSize="14"
          fill="#00ff00"
        >
          _
        </text>
        <text
          x="135"
          y="50"
          fontFamily="monospace"
          fontSize="14"
          fill="#ffffff"
        >
          nerd
        </text>

        {/* File extension */}
        <text x="35" y="80" fontFamily="monospace" fontSize="14" fill="#888888">
          file extension:
        </text>
        <text
          x="155"
          y="80"
          fontFamily="monospace"
          fontSize="14"
          fill="#00ff00"
        >
          .ddd
        </text>

        {/* Blinking cursor */}
        <rect x="215" y="70" width="8" height="14" fill="#00ff00">
          <animate
            attributeName="opacity"
            values="1;0;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Computer details */}
        <rect x="135" y="120" width="30" height="10" fill="#8795a1" />
        <circle cx="150" cy="125" r="3" fill="#4a5568" />

        {/* Vents */}
        <g fill="#4a5568">
          {[...Array(5)].map((_, i) => (
            <rect key={i} x={200 + i * 5} y="120" width="2" height="10" />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Logo;
