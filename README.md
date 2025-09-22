# Documentation n8n - Tunisian 🇹🇳

A beginner-friendly documentation site for learning n8n with clear steps, examples, and resources. Built with MkDocs Material.

## Quick Start (Windows PowerShell)

```powershell
py -3 -m venv venv
.\venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install mkdocs mkdocs-material mkdocs-macros-plugin
python -m mkdocs serve
```

Open: http://127.0.0.1:8000/repo-name/

## Project Structure

```text
mkdocs.yml
README.md
docs/
  index.md
  introduction.md
  getting-started.md
  installation.md
  first-workflow.md
  examples.md
  resources.md
  assets/
    images/logo.png
    css/custom.css
    js/custom.js
```

## Build and Deploy

- Local build:

  ```powershell
  python -m mkdocs build --clean
  ```

- GitHub Pages: this repo includes a GitHub Actions workflow that builds and deploys to the `gh-pages` branch on pushes to `main`.

Make sure `site_url` in `mkdocs.yml` matches the repo URL:

```text
https://louatizine.github.io/Document/
```

## Troubleshooting

- If PowerShell blocks venv activation:

  ```powershell
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  ```

- If images don’t show, use relative Markdown paths like `![Alt](assets/images/logo.png)`.
- If icons fail, ensure Material emoji extension is enabled in `mkdocs.yml`.

## License

Content © 2025. This repository is for learning and documentation purposes.
