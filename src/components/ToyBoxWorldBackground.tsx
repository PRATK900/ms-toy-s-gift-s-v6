import React from 'react';

/**
 * ToyBoxWorldBackground
 * 
 * A completely original, continuous animated background built from scratch for M.S. Toys & Gifts.
 * 
 * Concept: "A Moving Toy-Box World"
 * - Oversized, simple, artful shapes inspired by wooden building blocks, gift ribbons,
 *   jigsaw puzzle pieces, toy wagon wheels, and soft-toy silhouettes.
 * - Bright, saturated, clearly colourful palette:
 *     - Saturated Turquoise: #00B4D8 / #06B6D4
 *     - Cobalt Blue: #1D4ED8
 *     - Coral Red: #EF4444
 *     - Sunny Yellow: #FFC300
 *     - Violet: #7C3AED
 * - Canvas Base: Crisp cool sky azure (#EBF8FF) — strictly ZERO beige, tan, cream, peach, or skin-like tones.
 * - Flat, clean matte finish: strictly NO gloss, NO metallic shine, NO gradients fading into beige,
 *   NO dots, and NO grids.
 * - Continuous, calm, multi-depth slow drift behind the entire page for seamless page-wide continuity.
 * - Respects prefers-reduced-motion with a static, balanced colourful scene.
 */
export const ToyBoxWorldBackground: React.FC = () => {
  return (
    <div
      className="toybox-world fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#EBF8FF]"
      aria-hidden="true"
    >
      {/* Crisp cool cyan-azure foundation (zero beige, zero skin tones) */}
      <div className="absolute inset-0 bg-[#EBF8FF]" />

      {/* =========================================================================
          DEPTH LAYER 1: OVERSIZED STRUCTURAL TOY SHAPES (Slowest drift: 50s - 72s)
          Bold saturated matte architecture framing the viewport
          ========================================================================= */}

      {/* 1. Oversized Coral Red Roman Arch Building Block (Upper-Left) */}
      <div className="absolute -top-16 -left-16 w-[380px] h-[460px] sm:w-[500px] sm:h-[580px] toybox-float-slow-1 opacity-45">
        <svg viewBox="0 0 200 240" className="w-full h-full fill-[#EF4444]">
          {/* Classic toy block arch with hollow inner opening */}
          <path
            d="M 20 230 L 20 100 C 20 48, 60 10, 100 10 C 140 10, 180 48, 180 100 L 180 230 L 136 230 L 136 120 C 136 94, 118 78, 100 78 C 82 78, 64 94, 64 120 L 64 230 Z"
            fillRule="evenodd"
          />
        </svg>
      </div>

      {/* 2. Oversized Cobalt Blue 4-Spoke Wagon Wheel (Upper-Right) */}
      <div className="absolute top-[4%] -right-16 w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] toybox-wheel-spin opacity-40">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#1D4ED8]">
          {/* Classic wooden cartwheel with outer rim, central hub, and 4 circular spoke cutout windows */}
          <path
            d="M 100 10 C 149.7 10, 190 50.3, 190 100 C 190 149.7, 149.7 190, 100 190 C 50.3 190, 10 149.7, 10 100 C 10 50.3, 50.3 10, 100 10 Z
               M 100 82 C 109.9 82, 118 90.1, 118 100 C 118 109.9, 109.9 118, 100 118 C 90.1 118, 82 109.9, 82 100 C 82 90.1, 90.1 82, 100 82 Z
               M 100 32 C 112 32, 122 42, 122 54 C 122 66, 112 76, 100 76 C 88 76, 78 66, 78 54 C 78 42, 88 32, 100 32 Z
               M 100 124 C 112 124, 122 134, 122 146 C 122 158, 112 168, 100 168 C 88 168, 78 158, 78 146 C 78 134, 88 124, 100 124 Z
               M 32 100 C 32 88, 42 78, 54 78 C 66 78, 76 88, 76 100 C 76 112, 66 122, 54 122 C 42 122, 32 112, 32 100 Z
               M 124 100 C 124 88, 134 78, 146 78 C 158 78, 168 88, 168 100 C 168 112, 158 122, 146 122 C 134 122, 124 112, 124 100 Z"
            fillRule="evenodd"
          />
        </svg>
      </div>

      {/* 3. Oversized Sunny Yellow Triangular Gable Roof Block (Middle-Right) */}
      <div className="absolute top-[36%] -right-12 w-[340px] h-[300px] sm:w-[460px] sm:h-[400px] toybox-float-slow-2 opacity-45">
        <svg viewBox="0 0 200 160" className="w-full h-full fill-[#FFC300]">
          {/* Triangular building block with soft rounded vertices */}
          <path d="M 24 145 C 14 145, 9 135, 15 125 L 89 20 C 94 11, 106 11, 111 20 L 185 125 C 191 135, 186 145, 176 145 Z" />
        </svg>
      </div>

      {/* 4. Oversized Saturated Turquoise Arch Block (Lower-Left) */}
      <div className="absolute bottom-[6%] -left-16 w-[360px] h-[420px] sm:w-[480px] sm:h-[540px] toybox-float-slow-3 opacity-45">
        <svg viewBox="0 0 200 240" className="w-full h-full fill-[#00B4D8]">
          <path
            d="M 25 220 L 25 110 C 25 60, 60 20, 100 20 C 140 20, 175 60, 175 110 L 175 220 L 132 220 L 132 125 C 132 102, 118 88, 100 88 C 82 88, 68 102, 68 125 L 68 220 Z"
            fillRule="evenodd"
          />
        </svg>
      </div>

      {/* 5. Oversized Violet Stepped Modular Block (Bottom-Right) */}
      <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] toybox-float-slow-1 opacity-42">
        <svg viewBox="0 0 140 140" className="w-full h-full fill-[#7C3AED]">
          {/* Stepped modular block */}
          <path d="M 15 125 L 15 65 C 15 58, 21 52, 28 52 L 65 52 L 65 28 C 65 21, 71 15, 78 15 L 115 15 C 122 15, 128 21, 128 28 L 128 125 C 128 132, 122 138, 115 138 L 28 138 C 21 138, 15 132, 15 125 Z" />
        </svg>
      </div>

      {/* =========================================================================
          DEPTH LAYER 2: MID-GROUND VIBRANT SHAPES (Moderate drift: 36s - 50s)
          Ribbons, puzzle pieces, soft-toy silhouettes, rockers, and cylinders
          ========================================================================= */}

      {/* 6. Flowing Saturated Turquoise Gift Ribbon (Upper Mid-Section) */}
      <div className="absolute top-[16%] left-[10%] sm:left-[20%] w-[320px] sm:w-[480px] h-[130px] toybox-ribbon-sway opacity-46">
        <svg viewBox="0 0 360 110" className="w-full h-full fill-[#06B6D4]">
          {/* Flowing gift ribbon streamer with notched swallowtail ends */}
          <path d="M 12 35 C 70 8, 130 65, 190 32 C 250 0, 300 48, 350 22 L 338 52 L 352 82 C 298 62, 248 10, 188 45 C 128 80, 68 20, 10 50 L 22 42 Z" />
        </svg>
      </div>

      {/* 7. Violet Interlocking Puzzle Piece (Upper Mid-Left) */}
      <div className="absolute top-[26%] left-[3%] sm:left-[6%] w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] toybox-float-slow-2 opacity-44">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#7C3AED]">
          {/* Interlocking jigsaw puzzle piece with tab & socket */}
          <path d="M 15 15 L 42 15 C 42 6, 58 6, 58 15 L 85 15 L 85 42 C 94 42, 94 58, 85 58 L 85 85 L 58 85 C 58 76, 42 76, 42 85 L 15 85 L 15 58 C 24 58, 24 42, 15 42 Z" />
        </svg>
      </div>

      {/* 8. Cobalt Blue Interlocking Puzzle Piece (Mid-Right) */}
      <div className="absolute top-[48%] right-[5%] sm:right-[9%] w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] toybox-float-slow-1 opacity-42">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#1D4ED8]">
          <path d="M 18 18 L 44 18 C 44 9, 56 9, 56 18 L 82 18 L 82 44 C 91 44, 91 56, 82 56 L 82 82 L 56 82 C 56 91, 44 91, 44 82 L 18 82 L 18 56 C 9 56, 9 44, 18 44 Z" />
        </svg>
      </div>

      {/* 9. Soft-Toy Silhouette (Teddy Head Contour in Coral Red, Mid-Left) */}
      <div className="absolute top-[56%] left-[6%] sm:left-[10%] w-[150px] h-[140px] sm:w-[210px] sm:h-[190px] toybox-float-slow-3 opacity-42">
        <svg viewBox="0 0 120 110" className="w-full h-full fill-[#EF4444]">
          {/* Stylized soft-toy teddy head silhouette with rounded ears */}
          <path
            d="M 60 28 C 40 28, 24 44, 24 64 C 24 84, 40 100, 60 100 C 80 100, 96 84, 96 64 C 96 44, 80 28, 60 28 Z
               M 24 24 C 16 24, 10 30, 10 38 C 10 46, 16 52, 24 52 C 26 52, 28 51, 30 50 C 27 42, 25 33, 27 25 C 26 24, 25 24, 24 24 Z
               M 96 24 C 95 24, 94 24, 93 25 C 95 33, 93 42, 90 50 C 92 51, 94 52, 96 52 C 104 52, 110 46, 110 38 C 110 30, 104 24, 96 24 Z"
          />
        </svg>
      </div>

      {/* 10. Sunny Yellow Rocking Horse Runner (Curved wooden rocker, Central Base) */}
      <div className="absolute top-[44%] left-[38%] w-[210px] sm:w-[320px] h-[80px] toybox-rock-sway opacity-46">
        <svg viewBox="0 0 200 60" className="w-full h-full fill-[#FFC300]">
          {/* Smooth crescent rocker runner curve with rounded ends */}
          <path d="M 12 18 C 55 48, 145 48, 188 18 C 194 24, 188 34, 180 38 C 138 60, 62 60, 20 38 C 12 34, 6 24, 12 18 Z" />
        </svg>
      </div>

      {/* 11. Flowing Coral Red Gift Ribbon (Lower Right) */}
      <div className="absolute bottom-[18%] right-[12%] sm:right-[18%] w-[300px] sm:w-[440px] h-[125px] toybox-ribbon-sway opacity-42">
        <svg viewBox="0 0 340 100" className="w-full h-full fill-[#EF4444]">
          {/* Flowing gift ribbon with notched tails */}
          <path d="M 10 30 C 65 58, 125 10, 185 42 C 245 74, 290 28, 330 50 L 320 22 L 335 -6 C 285 18, 235 60, 175 28 C 115 -4, 55 42, 12 12 Z" />
        </svg>
      </div>

      {/* 12. Cobalt Blue Wooden Column Block (Mid-Right) */}
      <div className="absolute top-[66%] right-[4%] sm:right-[7%] w-[90px] h-[200px] sm:w-[130px] h-[270px] toybox-float-slow-2 opacity-38">
        <svg viewBox="0 0 80 180" className="w-full h-full fill-[#1D4ED8]">
          <rect x="10" y="10" width="60" height="160" rx="30" />
        </svg>
      </div>

      {/* =========================================================================
          DEPTH LAYER 3: ACCENT VIBRANT TOY GEOMETRIES (Subtle drift: 28s - 42s)
          Wheels, rounded cubes, and teddy heads balancing the entire page
          ========================================================================= */}

      {/* 13. Sunny Yellow Wheel Accent (Bottom Center-Left) */}
      <div className="absolute bottom-[5%] left-[22%] sm:left-[28%] w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] toybox-wheel-spin opacity-44">
        <svg viewBox="0 0 160 160" className="w-full h-full fill-[#FFC300]">
          <path
            d="M 80 8 C 119.8 8, 152 40.2, 152 80 C 152 119.8, 119.8 152, 80 152 C 40.2 152, 8 119.8, 8 80 C 8 40.2, 40.2 8, 80 8 Z
               M 80 66 C 87.7 66, 94 72.3, 94 80 C 94 87.7, 87.7 94, 80 94 C 72.3 94, 66 87.7, 66 80 C 66 72.3, 72.3 66, 80 66 Z
               M 80 26 C 89 26, 97 34, 97 43 C 97 52, 89 60, 80 60 C 71 60, 63 52, 63 43 C 63 34, 71 26, 80 26 Z
               M 80 100 C 89 100, 97 108, 97 117 C 97 126, 89 134, 80 134 C 71 134, 63 126, 63 117 C 63 108, 71 100, 80 100 Z
               M 26 80 C 26 71, 34 63, 43 63 C 52 63, 60 71, 60 80 C 60 89, 52 97, 43 97 C 34 97, 26 89, 26 80 Z
               M 100 80 C 100 71, 108 63, 117 63 C 126 63, 134 71, 134 80 C 134 89, 126 97, 117 97 C 108 97, 100 89, 100 80 Z"
            fillRule="evenodd"
          />
        </svg>
      </div>

      {/* 14. Saturated Turquoise Rounded Cube Block (Center Left) */}
      <div className="absolute top-[40%] left-[2%] w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] toybox-float-slow-1 opacity-45">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#00B4D8]">
          <rect x="15" y="15" width="70" height="70" rx="18" />
        </svg>
      </div>

      {/* 15. Violet Teddy Head Silhouette (Upper-Center) */}
      <div className="absolute top-[6%] left-[44%] sm:left-[42%] w-[100px] h-[95px] sm:w-[130px] sm:h-[120px] toybox-float-slow-2 opacity-38">
        <svg viewBox="0 0 120 110" className="w-full h-full fill-[#7C3AED]">
          <path
            d="M 60 28 C 40 28, 24 44, 24 64 C 24 84, 40 100, 60 100 C 80 100, 96 84, 96 64 C 96 44, 80 28, 60 28 Z
               M 24 24 C 16 24, 10 30, 10 38 C 10 46, 16 52, 24 52 C 26 52, 28 51, 30 50 C 27 42, 25 33, 27 25 C 26 24, 25 24, 24 24 Z
               M 96 24 C 95 24, 94 24, 93 25 C 95 33, 93 42, 90 50 C 92 51, 94 52, 96 52 C 104 52, 110 46, 110 38 C 110 30, 104 24, 96 24 Z"
          />
        </svg>
      </div>

      {/* 16. Saturated Turquoise Wagon Wheel Accent (Top Left) */}
      <div className="absolute top-[12%] -left-6 w-[160px] h-[160px] sm:w-[210px] sm:h-[210px] toybox-wheel-spin opacity-40">
        <svg viewBox="0 0 160 160" className="w-full h-full fill-[#00B4D8]">
          <path
            d="M 80 8 C 119.8 8, 152 40.2, 152 80 C 152 119.8, 119.8 152, 80 152 C 40.2 152, 8 119.8, 8 80 C 8 40.2, 40.2 8, 80 8 Z
               M 80 66 C 87.7 66, 94 72.3, 94 80 C 94 87.7, 87.7 94, 80 94 C 72.3 94, 66 87.7, 66 80 C 66 72.3, 72.3 66, 80 66 Z
               M 80 26 C 89 26, 97 34, 97 43 C 97 52, 89 60, 80 60 C 71 60, 63 52, 63 43 C 63 34, 71 26, 80 26 Z
               M 80 100 C 89 100, 97 108, 97 117 C 97 126, 89 134, 80 134 C 71 134, 63 126, 63 117 C 63 108, 71 100, 80 100 Z
               M 26 80 C 26 71, 34 63, 43 63 C 52 63, 60 71, 60 80 C 60 89, 52 97, 43 97 C 34 97, 26 89, 26 80 Z
               M 100 80 C 100 71, 108 63, 117 63 C 126 63, 134 71, 134 80 C 134 89, 126 97, 117 97 C 108 97, 100 89, 100 80 Z"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
