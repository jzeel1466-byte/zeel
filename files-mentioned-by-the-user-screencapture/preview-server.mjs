import { createServer } from "node:http";
import { createReadStream, existsSync, writeFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";

process.stdout.on("error", () => {});
process.stderr.on("error", () => {});

const root = process.cwd();
const preferredPort = Number(process.env.PORT || 4173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

function sendFile(response, filePath) {
  const type = mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream";
  response.writeHead(200, { "Content-Type": type });
  createReadStream(filePath).pipe(response);
}

function resolvePath(url = "/") {
  const requested = url === "/" ? "/preview.html" : decodeURIComponent(url);
  const safePath = normalize(requested).replace(/^(\.\.[/\\])+/, "");
  return join(root, safePath);
}

const server = createServer((request, response) => {
  const filePath = resolvePath(request.url?.split("?")[0]);

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  sendFile(response, filePath);
});

function listen(port) {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && port < preferredPort + 10) {
      listen(port + 1);
      return;
    }
    throw error;
  });

  server.listen(port, "127.0.0.1", () => {
    const address = server.address();
    const activePort = typeof address === "object" && address ? address.port : port;
    writeFileSync(".preview-server-port", String(activePort));
    writeFileSync(".preview-server-pid", String(process.pid));
    if (process.stdout.isTTY) {
      console.log(`Preview server running at http://127.0.0.1:${activePort}`);
    }
  });
}

listen(preferredPort);
