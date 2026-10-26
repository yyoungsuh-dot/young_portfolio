/**
 * Play/pause glyphs lifted from khagwal.com/interactions' controls.svg
 * sprite (dark glass circle + white glyph). The sprite is a single
 * 144x72 svg with the play button at x 0-72 and the pause button at
 * x 72-144; each icon below just points its viewBox at its half so the
 * original path coordinates never need to be hand-shifted.
 */
function ControlSprite({ viewBox, className }: { viewBox: string; className?: string }) {
  return (
    <svg viewBox={viewBox} fill="none" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36Z"
        fill="#5D5D63"
        fillOpacity=".72"
      />
      <path
        d="M32.948 47.773 46.89 38.68c1.37-.893 2.056-1.34 2.293-1.906a2 2 0 0 0 0-1.548c-.237-.566-.923-1.013-2.293-1.906l-13.942-9.093c-1.61-1.05-2.415-1.575-3.081-1.53a2 2 0 0 0-1.466.793C28 24.024 28 24.985 28 26.907v18.186c0 1.922 0 2.883.401 3.417a2 2 0 0 0 1.466.793c.666.045 1.471-.48 3.081-1.53Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M108 72c19.882 0 36-16.118 36-36S127.882 0 108 0 72 16.118 72 36s16.118 36 36 36Z"
        fill="#5D5D63"
        fillOpacity=".72"
      />
      <path
        d="M96.102 25.224C96 25.605 96 26.07 96 27v18c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.121 2.122C98.606 49 99.07 49 100 49c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.122C104 46.395 104 45.93 104 45V27c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C101.395 23 100.93 23 100 23s-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122ZM112.102 25.224C112 25.605 112 26.07 112 27v18c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122c.381.102.846.102 1.776.102s1.395 0 1.776-.102a3 3 0 0 0 2.122-2.122C120 46.395 120 45.93 120 45V27c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C117.395 23 116.93 23 116 23s-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122Z"
        fill="#fff"
      />
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return <ControlSprite viewBox="0 0 72 72" className={className} />;
}

export function PauseIcon({ className }: { className?: string }) {
  return <ControlSprite viewBox="72 0 72 72" className={className} />;
}
