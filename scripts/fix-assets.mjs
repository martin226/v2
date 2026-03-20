import { readFileSync, writeFileSync } from "fs";

const files = [
  "src/app/assets/projects/layoffevaders.webp",
  "src/app/assets/projects/sachs-website.webp",
  "src/app/assets/projects/twirl.webp",
  "src/app/assets/projects/credibility.webp",
  "src/app/assets/projects/sensai.webp",
  "src/app/assets/headshot.png",
];

let fixed = 0;
for (const f of files) {
  const raw = readFileSync(f);
  // Detect if file is stored as base64 text (starts with ASCII printable chars, not binary magic bytes)
  // WebP magic: 0x52 0x49 0x46 0x46 (RIFF) - all printable ASCII, so check more carefully
  // Base64 alphabet is A-Z a-z 0-9 + / = (all 0x2B-0x7A range)
  // Real WebP: RIFF....WEBP - bytes 4-7 are file size (likely has values > 0x7E)
  const b4to7 = Array.from(raw.slice(4, 8));
  const looksLikeBinary = b4to7.some(b => b < 0x09 || (b > 0x0D && b < 0x20) || b > 0x7E);
  if (!looksLikeBinary && raw.length > 1000) {
    console.log(`Fixing ${f} (stored as base64 text, ${raw.length} bytes)...`);
    const decoded = Buffer.from(raw.toString("ascii").trim(), "base64");
    writeFileSync(f, decoded);
    const header = decoded.slice(0, 4).toString("ascii");
    const webp = decoded.slice(8, 12).toString("ascii");
    console.log(`  Fixed: ${decoded.length} bytes, header: ${header} ${webp}`);
    fixed++;
  } else {
    const header = raw.slice(0, 4).toString("hex");
    console.log(`OK: ${f} (${raw.length} bytes, hex: ${header})`);
  }
}
console.log(`\nFixed ${fixed} file(s).`);
