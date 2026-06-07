/**
 * Ported from the original AnimatePing.jsx — kept name and behaviour intact,
 * only the brand color is mapped to the new electric token.
 */
export function AnimatePing() {
  return (
    <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 items-center justify-center md:flex">
      <div className="absolute h-12 w-12 animate-ping rounded-full border border-magenta opacity-30" />
    </div>
  );
}
