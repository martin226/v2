import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export const alt = "Lessons from 2025";
export const size = {
  width: 1200,
  height: 675,
};
export const contentType = "image/png";

function getWordCount() {
  const mdxPath = join(
    process.cwd(),
    "src/app/writing/lessons-from-2025/page.mdx"
  );
  const content = readFileSync(mdxPath, "utf-8");

  const textContent = content
    .replace(/import\s+.*?;?\n/g, "")
    .replace(/export\s+.*?(\{[\s\S]*?\}|;)/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*_~`]/g, "")
    .replace(/\n+/g, " ")
    .trim();

  const words = textContent.split(/\s+/).filter((word) => word.length > 0);
  return words.length;
}

const tableOfContents = [
  "A year that only makes sense in hindsight",
  "The cost of negativity",
  "High agency beats high potential",
  "Leverage is not the same as effort",
  "Games worth playing",
  "Environment changes",
  "Bad advice, good advice, no advice?",
  "Miscellaneous",
  "Outlook for 2026",
];

export default async function Image() {
  const wordCount = getWordCount();
  const readTime = Math.ceil(wordCount / 200);

  const yearGraphPath = join(
    process.cwd(),
    "src/app/writing/lessons-from-2025/year-graph.png"
  );
  const yearGraphBuffer = readFileSync(yearGraphPath);
  const yearGraphBase64 = `data:image/png;base64,${yearGraphBuffer.toString(
    "base64"
  )}`;

  const geistRegularPath = join(
    process.cwd(),
    "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf"
  );
  const geistBoldPath = join(
    process.cwd(),
    "node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf"
  );

  const geistRegular = readFileSync(geistRegularPath);
  const geistBold = readFileSync(geistBoldPath);

  const instrumentSerifResponse = await fetch(
    "https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap"
  );
  const instrumentSerifCss = await instrumentSerifResponse.text();
  const instrumentSerifFontUrl =
    instrumentSerifCss.match(/src: url\(([^)]+)\)/)?.[1];
  const instrumentSerifFontData = await fetch(instrumentSerifFontUrl).then(
    (res) => res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          fontFamily: "Geist Sans",
        }}
      >
        {/* Left side - Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            height: "100%",
            padding: "48px",
            paddingRight: "44px",
            color: "#fafaf9",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: "64px",
              fontFamily: "Instrument Serif",
              fontWeight: 400,
              color: "#fafaf9",
              marginBottom: "8px",
              lineHeight: 1.1,
            }}
          >
            Lessons from 2025
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "20px",
              color: "#a8a29e",
              fontStyle: "italic",
              marginBottom: "24px",
            }}
          >
            Non-Linearity, The Games We Play, Side Questing
          </p>

          {/* Word count and read time */}
          <p
            style={{
              fontSize: "16px",
              color: "#78716c",
              marginBottom: "32px",
            }}
          >
            {wordCount.toLocaleString()} words | {readTime} min. estimated read
          </p>

          {/* Table of Contents */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#78716c",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              Table of Contents
            </p>
            {tableOfContents.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: "#57534e",
                    minWidth: "24px",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    color: "#d6d3d1",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "4px",
            height: "100%",
            backgroundColor: "#000000",
          }}
        />

        {/* Right side - Year Graph */}
        <div
          style={{
            display: "flex",
            width: "50%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            padding: "24px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={yearGraphBase64}
            alt="Year Graph"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist Sans",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist Sans",
          data: geistBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Instrument Serif",
          data: instrumentSerifFontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
