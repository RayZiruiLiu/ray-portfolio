# Ray's portfolio

A minimal static portfolio site. No framework, dependencies, build step, or third-party PDF viewer.

## Files and routes

- `index.html`: responsive home page at `/`, with metadata and your LinkedIn profile link.
- `portfolio/index.html`: immediately redirects to `/RayZiruiLiu_Portfolio.pdf` using native HTML. A fallback link is included.
- `RayZiruiLiu_Portfolio.pdf`: original, full-quality portfolio, served directly to the browser's PDF viewer.
- `favicon.svg`: simple R favicon.
- `serve.mjs`: dependency-free local preview server with PDF byte-range support.

## Local preview

With Node.js installed, run `node serve.mjs` from this folder. Open `http://127.0.0.1:3000`, `/portfolio`, and `/RayZiruiLiu_Portfolio.pdf`.

The PDF opens inline when the browser's PDF viewer is enabled. Personal browser preferences can override this and download PDFs instead.

The LinkedIn URL in `index.html` comes from the portfolio's cover page.

## Update the portfolio

Replace `RayZiruiLiu_Portfolio.pdf` with your new PDF using **exactly the same filename**, then commit and push:

```sh
git add RayZiruiLiu_Portfolio.pdf
git commit -m "Update portfolio PDF"
git push
```

The `/portfolio` link stays unchanged. No PDF processing is performed.

## Git LFS and future hosting

The original PDF exceeds GitHub's regular 100 MB file limit, so it is tracked with Git LFS. Install Git LFS, run `git lfs install`, and use `git lfs pull` after cloning if needed. The working PDF must be the actual PDF, not a Git LFS pointer.

No hosting, deployment, domain, or DNS is configured. When choosing hosting later, publish the static files at the domain root, enable standard directory-index resolution for `/portfolio` (or `/portfolio/`), and ensure Git LFS downloads the actual PDF during checkout. The host must allow the PDF's file size, serve `.pdf` as `application/pdf`, and avoid `Content-Disposition: attachment`. No custom rewrite is needed on a host that supports directory indexes; hosts without this support need a `/portfolio` redirect to the PDF. Verify these routes on the chosen host before publishing.
