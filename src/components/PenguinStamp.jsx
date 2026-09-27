/* Stenciled Bauhaus penguin — pure shapes in primary colors. */
export default function PenguinStamp({ size = 80 }) {
  return (
    <svg
      viewBox="0 0 100 130"
      width={size}
      height={size * 1.3}
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Body — solid black */}
      <ellipse cx="50" cy="78" rx="36" ry="46" fill="currentColor" />
      {/* Belly — chalk */}
      <ellipse cx="50" cy="82" rx="22" ry="32" fill="#f0ede5" />
      {/* Head — solid black */}
      <circle cx="50" cy="28" r="22" fill="currentColor" />
      {/* Face cut — chalk */}
      <ellipse cx="50" cy="32" rx="14" ry="14" fill="#f0ede5" />
      {/* Beak — red triangle */}
      <polygon points="42,32 58,32 50,42" fill="#d8281a" />
      {/* Eye — yellow dot */}
      <circle cx="50" cy="28" r="2" fill="#f4c130" />
      {/* Feet — red */}
      <rect x="34" y="120" width="14" height="6" fill="#d8281a" />
      <rect x="52" y="120" width="14" height="6" fill="#d8281a" />
    </svg>
  );
}
