import sharp from "sharp";
import fs from "node:fs";

const dir = "public/images";

const jobs = [
  ["hero-main.jpg", 1800],
  ["band.jpg", 1800],
  ["cta-main.jpg", 1800],
  ["hero-peek.jpg", 900],
  ["cta-peek.jpg", 900],
  ["intro.jpg", 1400],
  ["help-1.jpg", 1400],
  ["help-2.jpg", 1400],
  ["help-3.jpg", 1400],
  ["how-i-work.jpg", 1400],
  ["specialties.jpg", 1400],
  ["office/office1.jpeg", 1200],
  ["office/office2.jpeg", 1200],
];

for (const [file, width] of jobs) {
  const path = `${dir}/${file}`;
  if (!fs.existsSync(path)) {
    console.log("skip (not found):", file);
    continue;
  }
  const input = fs.readFileSync(path);
  const output = await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 75, mozjpeg: true })
    .toBuffer();
  fs.writeFileSync(path, output);
  console.log(
    file,
    Math.round(input.length / 1024) + " KB ->",
    Math.round(output.length / 1024) + " KB"
  );
}

const mayaPath = `${dir}/maya.png`;
if (fs.existsSync(mayaPath)) {
  const input = fs.readFileSync(mayaPath);
  const output = await sharp(input)
    .resize({ width: 1200, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 85 })
    .toBuffer();
  fs.writeFileSync(mayaPath, output);
  console.log("maya.png", Math.round(input.length / 1024) + " KB ->", Math.round(output.length / 1024) + " KB");
}