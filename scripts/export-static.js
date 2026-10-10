import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

async function exportStatic() {
  const root = process.cwd();
  const serverPath = path.join(root, "dist", "server", "index.mjs");
  const publicHtmlDir = path.join(root, "dist", "public_html");
  const clientAssetsDir = path.join(root, "dist", "client", "assets");
  const targetAssetsDir = path.join(publicHtmlDir, "assets");

  if (!fs.existsSync(serverPath)) {
    console.error("Please run npm run build first.");
    process.exit(1);
  }

  // Ensure public_html folder exists
  fs.mkdirSync(publicHtmlDir, { recursive: true });

  const testPort = 3987;
  console.log("Generating static index.html for Hostinger public_html...");

  const child = spawn("node", [serverPath], {
    env: { ...process.env, PORT: String(testPort) },
    stdio: "ignore",
  });

  // Wait for server to boot
  await new Promise((r) => setTimeout(r, 1200));

  try {
    const res = await fetch(`http://localhost:${testPort}/`);
    const html = await res.text();
    fs.writeFileSync(path.join(publicHtmlDir, "index.html"), html, "utf-8");
    console.log("✓ Saved dist/public_html/index.html");

    // Copy static assets
    if (fs.existsSync(clientAssetsDir)) {
      fs.cpSync(clientAssetsDir, targetAssetsDir, { recursive: true });
      console.log("✓ Copied dist/public_html/assets");
    }

    // Add .htaccess for Hostinger Apache routing
    const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;
    fs.writeFileSync(path.join(publicHtmlDir, ".htaccess"), htaccess, "utf-8");
    console.log("✓ Saved dist/public_html/.htaccess");

    console.log("Static export ready in dist/public_html!");
  } catch (err) {
    console.error("Error generating static HTML:", err);
  } finally {
    child.kill();
  }
}

exportStatic();
