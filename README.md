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

Replace `RayZiruiLiu_Portfolio.pdf` with your new PDF using **exactly the same filename**, then commit and push:

```sh
git add RayZiruiLiu_Portfolio.pdf
git commit -m "Update portfolio PDF"
git push
```

The `/RayZiruiLiu_Portfolio.pdf` path stays unchanged. No PDF processing is performed.

## Git LFS and future hosting

The original PDF exceeds GitHub's regular 100 MB file limit, so it is tracked with Git LFS. Install Git LFS, run `git lfs install`, and use `git lfs pull` after cloning if needed. The working PDF must be the actual PDF, not a Git LFS pointer.

No hosting, deployment, domain, or DNS is configured by this project. A GitHub repository is source storage, not a hosted website. When hosting later, publish the actual PDF at `/RayZiruiLiu_Portfolio.pdf`. Retrieve Git LFS objects during checkout, allow the full file size, and serve `application/pdf` without an attachment header.

Git LFS pointer text begins with `version https://git-lfs.github.com/spec/v1`; it is not a PDF. Serving that pointer with a PDF Content-Type makes Chrome display "Failed to load PDF document." A valid checkout must contain the actual PDF bytes starting with `%PDF-`.

## Original integrity

- Size: `156555522` bytes
- SHA-256: `7d1c73599445bb7c7e608316e02d6445690dab066294079c8f069fd542307dc9`

These values describe the original version; they change when you intentionally replace the portfolio.
