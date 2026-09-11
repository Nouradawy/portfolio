import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  /** ms per character */
  speed?: number;
  /** ms before typing starts */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  /** re-run when this key changes */
  runKey?: string | number;
  caret?: boolean;
};

/** Cinematic transcriber-style typing effect with a blinking caret. Print-safe. */
export default function Typewriter({
  text,
  speed = 34,
  delay = 0,
  className,
  style,
  runKey,
  caret = true,
}: TypewriterProps) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOut("");
    setDone(false);
    let idx = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        idx += 1;
        setOut(text.slice(0, idx));
        if (idx >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, delay, runKey]);

  return (
    <span className={className} style={style}>
      {/* Screen animated version */}
      <span className="print:hidden">
        {out}
        {caret && (
          <span
            className="ml-[2px] inline-block w-[2px] align-middle"
            style={{
              height: "0.9em",
              background: "currentColor",
              opacity: done ? 0 : 1,
              animation: done ? "none" : "wu-blink 1s steps(1) infinite",
            }}
          />
        )}
      </span>
      {/* Print-only instant full text */}
      <span className="hidden print:inline">{text}</span>
    </span>
  );
}
