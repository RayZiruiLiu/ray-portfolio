# Portfolio PDF

The only public asset is `RayZiruiLiu_Portfolio.pdf`. No home page, HTML, redirects, custom viewer, JavaScript, framework, or build step.

## Local preview

With Python 3 installed, run from this folder:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open **http://127.0.0.1:8000/RayZiruiLiu_Portfolio.pdf**. The standard static-file server returns the PDF directly with `application/pdf`. It is a local preview tool only.

The PDF opens inline when the browser's PDF viewer is enabled. Personal browser preferences can override this and download PDFs instead.

## Update the portfolio

Replace `RayZiruiLiu_Portfolio.pdf` with your new web-ready PDF using **exactly the same filename**, then commit and push:

```sh
git add RayZiruiLiu_Portfolio.pdf
git commit -m "Update portfolio PDF"
git push
```

The `/RayZiruiLiu_Portfolio.pdf` path stays unchanged. Keep replacements under GitHub's regular 100 MB file limit and enable PDF linearization (Fast Web View) when exporting or optimizing.

## GitHub and hosting

The optimized PDF fits GitHub's regular file limit and is now committed as actual PDF bytes, without Git LFS. The earlier original remains in repository history through Git LFS.

The public PDF URL is `https://rayziruiliu-portfolio-c.vercel.app/RayZiruiLiu_Portfolio.pdf`. The repository contains no hosting configuration. Serve the actual PDF with `application/pdf`, without an attachment header. Byte-range support lets browsers take advantage of Fast Web View.

Git LFS pointer text begins with `version https://git-lfs.github.com/spec/v1`; it is not a PDF. Serving that pointer with a PDF Content-Type makes Chrome display "Failed to load PDF document." A valid checkout must contain the actual PDF bytes starting with `%PDF-`.

## Web optimization

- Original: `156555522` bytes (149.3 MiB).
- Optimized: `41189550` bytes (39.3 MiB), approximately 74% smaller.
- 39 pages; Fast Web View enabled.
- Oversized JPEG images selectively resampled and recompressed. General images use about 150 PPI, selected large screen images 130 PPI, and interface content 200 PPI. Fine detail uses higher JPEG quality and full chroma resolution.
- Transparency masks optimized separately, with lossless compression; vector drawing commands, extracted text, embedded fonts, and ICC color profiles preserved. No pages rasterized.
- Representative render, photo, text, diagram, and gradient pages compared at fit-to-screen and 100% scale; independently rendered with Poppler and Chrome's native PDF viewer.

These sizes describe this version; they change when you replace the portfolio.
