import { ImageResponse } from "next/og";

export const alt = "Sachin Barnwal — Senior Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Values mirror design-system/MASTER.md. ImageResponse cannot read the
// stylesheet, so they are repeated here rather than referenced.
const INK = "#0B0C0E";
const BONE = "#ECE9E2";
const MUTED = "#8E8B85";
const SIGNAL = "#D4FF3F";

// The site's motif in miniature: ticks at random angles on the left settle
// flat and lit on the right. Fixed angles so every render matches.
const TICKS = Array.from({ length: 28 }, (_, i) => ({
  angle: i < 16 ? ((i * 67) % 150) - 75 : 0,
  signal: i >= 16,
}));

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: INK,
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          Senior Product Designer · Fintech and AI
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {TICKS.map((tick, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                width: 22,
                height: 3,
                backgroundColor: tick.signal ? SIGNAL : BONE,
                opacity: tick.signal ? 1 : 0.45,
                transform: `rotate(${tick.angle}deg)`,
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 150,
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            color: BONE,
          }}
        >
          Sachin Barnwal
        </div>
      </div>
    ),
    size,
  );
}
