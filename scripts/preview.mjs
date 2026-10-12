// Serves the production build locally the way Netlify does: files from dist/client first,
// everything else through the server function in dist/server.
// (`vite preview` cannot do this, because the Netlify build has no dist/server/server.js.)
import { createServer } from "node:http";
import { createReadStream, existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize, sep } from "node:path";
import { Readable } from "node:stream";
import { fileURLToPath, pathToFileURL } from "node:url";

const dist = fileURLToPath(new URL("../dist/", import.meta.url));
if (!existsSync(join(dist, "nitro.json"))) {
  console.error("No build found. Run `npm run build` first.");
  process.exit(1);
}
const build = JSON.parse(readFileSync(join(dist, "nitro.json"), "utf8"));
const clientDir = join(dist, build.publicDir);
const { default: handler } = await import(pathToFileURL(join(dist, build.serverEntry)).href);

const TYPES = {
  ".css": "text/css",
  ".html": "text/html",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript",
  ".json": "application/json",
  ".mjs": "text/javascript",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
};

const port = Number(process.env.PORT) || 4173;

createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const file = normalize(join(clientDir, decodeURIComponent(url.pathname)));
    if (file.startsWith(clientDir + sep) && existsSync(file) && statSync(file).isFile()) {
      res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
      createReadStream(file).pipe(res);
      return;
    }

    const hasBody = req.method !== "GET" && req.method !== "HEAD";
    const response = await handler(
      new Request(url, {
        method: req.method,
        headers: req.headers,
        body: hasBody ? Readable.toWeb(req) : undefined,
        duplex: hasBody ? "half" : undefined,
      }),
      {},
    );
    res.writeHead(response.status, Object.fromEntries(response.headers));
    if (response.body) Readable.fromWeb(response.body).pipe(res);
    else res.end();
  } catch (error) {
    console.error(error);
    res.writeHead(500).end("Preview server error");
  }
}).listen(port, () => {
  console.log(`Preview of the production build → http://localhost:${port}`);
});
