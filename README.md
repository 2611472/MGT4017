# VerdantStep website

A responsive five-page student concept website built with HTML5, CSS3 and vanilla JavaScript.

## Files
- `index.html` — Home
- `shop.html` — Shop and product listing
- `product.html` — Product details (the selected style is passed in the URL)
- `about.html` — Our Story
- `contact.html` — Contact form demonstration
- `style.css` — Shared responsive styling
- `script.js` — Mobile menu, demo bag counter, product selection, sorting and contact-form message

## Test locally
1. Download and unzip the project.
2. Open `index.html` in a browser, or use Visual Studio Code with the Live Server extension.
3. Test every navigation link, the mobile menu, product links, size selector, demo bag counter, shop sorting and contact form.
4. Resize the browser or use developer tools to check the mobile layout.

The bag counter uses browser `localStorage`. The contact form is a front-end demonstration only: it does not send or store messages. Product illustrations are CSS shapes rather than real product photography. The business, products and sustainability statements are a student concept and should not be represented as verified commercial claims.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new public repository, for example `verdantstep-website`.
2. Upload all files from this folder to the repository's root (not inside an extra nested folder).
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish. The site address will appear in the Pages settings and usually follows `https://YOUR-USERNAME.github.io/verdantstep-website/`.
7. Open the published address and test all page links.

All internal links use relative file paths, which makes them suitable for a GitHub Pages project site. If you rename any HTML files, update the links in every page.
