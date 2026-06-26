# ternura.github.io

Source code for my personal website.

🌐 **https://ternura143.github.io**

## Local development

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # build to dist/
```

## Stack

- [Astro](https://astro.build/) static site framework
- Deployed on GitHub Pages

## CV

The CV is written in LaTeX under `cv/` and compiled to `public/cv.pdf`:

```bash
cd cv && latexmk -pdf cv.tex && cp cv.pdf ../public/cv.pdf
```

## Acknowledgements

This site is built on the beautiful [astro-erudite](https://github.com/jktrn/astro-erudite)
template by [enscribe](https://enscribe.dev), used under the MIT License. Many thanks to the
author for open-sourcing it.

## License

The template code is used under the MIT License (see [`LICENSE`](LICENSE)). All original
website content is Copyright (c) 2026 Zixuan Zhu.
