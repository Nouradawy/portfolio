import { access, copyFile, readFile, readdir, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const outputDirs = [path.resolve("dist", "client"), path.resolve("dist")];

async function findBuildOutputDir() {
  for (const dir of outputDirs) {
    try {
      await access(path.join(dir, "assets"), constants.F_OK);
      return dir;
    } catch {
      // Keep trying other known output locations.
    }
  }

  return undefined;
}

async function findClientEntryFile(distDir) {
  const assetsDir = path.join(distDir, "assets");
  const files = await readdir(assetsDir);
  const jsFiles = files.filter((file) => /^index-.*\.js$/.test(file));

  for (const file of jsFiles) {
    const contents = await readFile(path.join(assetsDir, file), "utf8");
    if (/from\s*"\.\/index-[^\"]+\.js"/.test(contents) || /from\s*'\.\/index-[^']+\.js'/.test(contents)) {
      return file;
    }
  }

  return jsFiles[0];
}

async function ensureIndexHtml(distDir) {
  const indexHtml = path.join(distDir, "index.html");
  try {
    await access(indexHtml, constants.F_OK);
    return indexHtml;
  } catch {
    // Fall through and synthesize a static HTML shell from the built bundles.
  }

  const assetsDir = path.join(distDir, "assets");
  const [entryFile, assetFiles] = await Promise.all([
    findClientEntryFile(distDir),
    readdir(assetsDir),
  ]);

  if (!entryFile) {
    throw new Error(`Could not find a client entry bundle in ${assetsDir}`);
  }

  const cssFiles = assetFiles.filter((file) => file.endsWith(".css")).sort();
  const stylesheetLinks = cssFiles
    .map((file) => `    <link rel="stylesheet" href="./assets/${file}">`)
    .join("\n");

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#09090b">
    <title>Noureldin — Full-Stack Software Engineer</title>
${stylesheetLinks}
  </head>
  <body>
    <script type="module" src="./assets/${entryFile}"></script>
  </body>
</html>
`;

  await writeFile(indexHtml, html, "utf8");
  return indexHtml;
}

try {
  const distDir = await findBuildOutputDir();
  if (!distDir) {
    throw new Error(`Could not find a built client output directory in: ${outputDirs.join(", ")}`);
  }

  const indexHtml = await ensureIndexHtml(distDir);
  const fallbackHtml = path.join(distDir, "404.html");
  await copyFile(indexHtml, fallbackHtml);
  console.log(`Created ${path.relative(process.cwd(), fallbackHtml)} for GitHub Pages SPA fallback.`);
} catch (error) {
  console.error("Unable to create GitHub Pages fallback files. Make sure the build completed successfully.");
  console.error(error);
  process.exitCode = 1;
}




