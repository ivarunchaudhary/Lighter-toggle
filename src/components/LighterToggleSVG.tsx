// LighterToggleSVG.jsx
import React, { useState, useEffect } from "react";

/**
 * LighterToggleSVG
 * - Click (or press Enter / Space) to toggle open/closed.
 * - Lid rotates around the hinge and flame fades/scale when closed.
 * - Accessible role="switch" with aria-checked.
 *
 * If you later get a real SVG with a separate <g> for the lid,
 * you can swap the <g id="lid">...</g> content and keep the same CSS.
 */
export default function LighterToggleSVG({ size = 200 }) {
  const [isOpen, setIsOpen] = useState(true);

  // Toggle theme class example — optional
  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) root.classList.remove("dark-mode");
    else root.classList.add("dark-mode");
  }, [isOpen]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((p) => !p);
    }
  };

  return (
    <div
      role="switch"
      aria-checked={isOpen}
      tabIndex={0}
      onClick={() => setIsOpen((p) => !p)}
      onKeyDown={handleKey}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
      title={isOpen ? "Close lighter (dark mode)" : "Open lighter (light mode)"}
    >
      <svg
        viewBox="0 0 100 120"
        width={size}
        height={(size * 120) / 100}
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#ffd07a" />
            <stop offset="1" stopColor="#ffb84d" />
          </linearGradient>
          <linearGradient id="lidGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#ffd07a" />
            <stop offset="1" stopColor="#ffc25a" />
          </linearGradient>
        </defs>

        {/* Lighter body */}
        <g id="body">
          <rect
            x="28"
            y="40"
            rx="6"
            ry="6"
            width="44"
            height="56"
            fill="url(#bodyGrad)"
            stroke="#000"
            strokeWidth="2.5"
          />
          {/* inner darker side to mimic PNG shading */}
          <rect
            x="62"
            y="40"
            rx="6"
            ry="6"
            width="10"
            height="56"
            fill="#ffb24a"
            opacity="0.85"
          />
        </g>

        {/* Top metal piece (lighter chimney) */}
        <g id="chimney">
          <rect
            x="44"
            y="14"
            width="20"
            height="18"
            rx="2"
            ry="2"
            fill="#eee"
            stroke="#333"
            strokeWidth="1.8"
          />
          {/* holes */}
          <circle cx="50" cy="22" r="1.6" fill="#111" />
          <circle cx="56" cy="22" r="1.6" fill="#111" />
          <circle cx="62" cy="22" r="1.6" fill="#111" />
          <circle cx="50" cy="27" r="1.6" fill="#111" />
          <circle cx="56" cy="27" r="1.6" fill="#111" />
        </g>

        {/* Hinge / pivot circle */}
        <circle cx="42" cy="44" r="4.6" fill="#ff8a59" stroke="#000" strokeWidth="1.6" />

        {/* Lid (animated) - we set transform-box and transform-origin so rotation works */}
        <g
          id="lid"
          style={{
            transformBox: "fill-box",
            transformOrigin: "40px 44px",
            transition: "transform 420ms cubic-bezier(.2,.9,.2,1)",
            transform: isOpen ? "rotate(-38deg) translateY(-4%)" : "rotate(5deg) translateY(6%)",
          }}
        >
          {/* lid shape */}
          <rect
            x="8"
            y="6"
            width="48"
            height="36"
            rx="6"
            ry="6"
            fill="url(#lidGrad)"
            stroke="#000"
            strokeWidth="2.5"
          />
        </g>

        {/* Spark wheel / small grey button */}
        <g id="wheel" transform="translate(66,22)">
          <circle cx="0" cy="0" r="6" fill="#999" stroke="#333" strokeWidth="1.6" />
        </g>

        {/* Flame group — fades & scales based on isOpen */}
        <g
          id="flameGroup"
          style={{
            transition: "opacity 300ms ease, transform 300ms ease",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "scale(1)" : "scale(0.8) translateY(-6px)",
            transformBox: "fill-box",
            transformOrigin: "center bottom",
          }}
        >
          <path
            d="M56 6 C60 0, 72 1, 68 18 C78 14, 78 28, 56 36 C34 28,34 14,44 18 C40 1,52 0,56 6 Z"
            fill="#ff8a5b"
            stroke="#b53b2a"
            strokeWidth="1.2"
          />
          <path
            d="M56 10 C59 6, 67 7, 65 18 C72 15,72 24,56 30 C40 24,40 15,45 18 C43 7,51 6,56 10 Z"
            fill="#ffd07a"
            opacity="0.95"
          />
        </g>

        {/* thin accent line at top of body */}
        <rect x="28" y="40" width="44" height="3" fill="rgba(0,0,0,0.06)" />

        <style>{`
          /* Make sure the SVG responds to pointer and keyboard focus */
          svg:focus { outline: none; }
        `}</style>
      </svg>
    </div>
  );
}
