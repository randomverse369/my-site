import { ImageResponse } from "next/og";

export const alt = "Sachin Barnwal — Senior Product Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Values mirror design-system/MASTER.md. ImageResponse cannot read the
// stylesheet, so they are repeated here rather than referenced.
const GROUND = "#F7F5F2";
const INK = "#1A1C1E";
const SUBTLE = "#6B7076";
const ACCENT = "#B8422E";

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
          backgroundColor: GROUND,
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: SUBTLE,
          }}
        >
          Senior Product Designer · AI
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: INK,
          }}
        >
          <span>Hi I&apos;m Sachin.</span>
          <span>Sr. Designer &amp;</span>
          <span>AI Enthusiast.</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ display: "flex", width: 64, height: 2, backgroundColor: ACCENT }} />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: SUBTLE,
            }}
          >
            7+ Years of Experience
          </div>
        </div>
      </div>
    ),
    size,
  );
}
