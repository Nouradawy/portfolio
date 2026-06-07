import { existsSync, writeFileSync } from "node:fs";

const funcDir = ".vercel/output/functions/__server.func";

// Ensure the function output has a package.json with "type": "module"
// (Nitro stops generating it when noExternals is used)
const pkgPath = funcDir + "/package.json";
if (!existsSync(pkgPath)) {
  writeFileSync(pkgPath, JSON.stringify({ type: "module" }) + "\n");
  console.log("Created package.json for function output");
}
