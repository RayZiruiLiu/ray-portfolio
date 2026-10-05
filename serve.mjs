// Local preview only. The published site consists of static files.
import http from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const files = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/portfolio', ['portfolio/index.html', 'text/html; charset=utf-8']],
  ['/portfolio/', ['portfolio/index.html', 'text/html; charset=utf-8']],
  ['/portfolio/index.html', ['portfolio/index.html', 'text/html; charset=utf-8']],
  ['/RayZiruiLiu_Portfolio.pdf', ['RayZiruiLiu_Portfolio.pdf', 'application/pdf']],
  ['/favicon.svg', ['favicon.svg', 'image/svg+xml']],
  ['/favicon.ico', ['favicon.svg', 'image/svg+xml']],
]);
const server = http.createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  const entry = files.get(new URL(req.url, 'http://localhost').pathname);
  if (!entry) { res.writeHead(404).end('Not found'); return; }
  try {
    const path = fileURLToPath(new URL(entry[0], import.meta.url));
    const { size } = await stat(path);
    const headers = { 'Content-Type': entry[1], 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache' };
    if (entry[1] === 'application/pdf') headers['Content-Disposition'] = 'inline; filename="RayZiruiLiu_Portfolio.pdf"';
    let start = 0, end = size - 1, status = 200;
    if (req.headers.range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if (match && (match[1] || match[2])) {
        start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]));
        end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
      } else { start = size; }
      if (start >= size || end < start) { res.writeHead(416, { 'Content-Range': `bytes */${size}` }).end(); return; }
      status = 206;
      headers['Content-Range'] = `bytes ${start}-${end}/${size}`;
    }
    headers['Content-Length'] = end - start + 1;
    res.writeHead(status, headers);
    if (req.method === 'HEAD') { res.end(); return; }
    const stream = createReadStream(path, { start, end });
    stream.on('error', () => res.destroy());
    res.on('close', () => stream.destroy());
    stream.pipe(res);
  } catch { res.writeHead(500).end('Unable to read file'); }
});
server.listen(3000, '127.0.0.1', () => console.log('Portfolio preview: http://127.0.0.1:3000'));
