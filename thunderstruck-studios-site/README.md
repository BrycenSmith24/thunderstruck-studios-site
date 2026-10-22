# Thunderstruck Studios — Liberty County 2019

A responsive, no-build-step landing page inspired by modern Roblox game websites. This is an original design and does not use Emergency Response: Liberty County logos or copied artwork. The hero illustration is custom SVG included in `assets/`.

## 1. Update the links first

Open `config.js` and replace the blank values with your official links:

```js
window.SITE_CONFIG = {
  gameUrl: "https://www.roblox.com/games/YOUR_GAME_ID",
  discordUrl: "https://discord.gg/YOUR_INVITE",
  groupUrl: "https://www.roblox.com/communities/YOUR_GROUP_ID"
};
```

Use the real URLs, then remove the `YOUR_...` placeholder text. If a link is left blank, the site displays a small reminder instead of sending visitors to a fake page.

You can edit all text in `index.html` and all styling in `styles.css`. The roadmap intentionally says the project is in development; update that copy to match the real state of your game.

## 2. Upload the folder to GitHub

1. Sign in at [GitHub](https://github.com/) and click **New repository**.
2. Name it something like `thunderstruck-studios-site`. Public is simplest for this workflow.
3. Create the repository. On the repository page, choose **Add file → Upload files**.
4. Upload the *contents* of this folder — `index.html`, `styles.css`, `script.js`, `config.js`, `README.md`, `CNAME`, `robots.txt`, `sitemap.xml`, and the `assets` folder. Keep the folder structure exactly as supplied.
5. Commit the upload.

Do not upload the ZIP itself as the only item; GitHub needs the website files unpacked in the repository.

## 3. Recommended: publish with Cloudflare Pages

This site is static, so it does not need a backend or secret API keys. Cloudflare Pages can host it directly from GitHub.

1. Sign in to [Cloudflare Dashboard](https://dash.cloudflare.com/) and open **Workers & Pages** (the name may vary slightly in the dashboard).
2. Create an application / Pages project and choose **Connect to Git**. Authorize GitHub and select your new repository.
3. Choose **None** for the framework preset. Leave the build command empty. Use `.` as the build output directory (the repository root, where `index.html` lives).
4. Deploy the project. Cloudflare will give you a `*.pages.dev` address to test.
5. In the Pages project, open **Custom domains** and add `tsstudios.site`. Follow the DNS instructions Cloudflare provides. Add `www.tsstudios.site` too if you want the `www` version.
6. If your domain is already managed by Cloudflare DNS, the dashboard can usually create the required record. If it is registered somewhere else, follow Cloudflare's instructions for pointing it to Pages.
7. After DNS and SSL finish provisioning, open `https://tsstudios.site` and test the navigation and buttons.

Cloudflare's dashboard changes occasionally, so follow the exact domain/DNS instructions it shows for your Pages project.

## 4. Alternative: GitHub Pages

You can also host the static site with GitHub Pages:

1. In the repository, open **Settings → Pages**.
2. Under the build/deployment section, publish from the `main` branch and the `/ (root)` folder.
3. Set the custom domain to `tsstudios.site`. The included `CNAME` file contains that domain.
4. Configure DNS at your domain provider using the current GitHub Pages instructions. For an apex domain, GitHub currently specifies A/AAAA records; `www` typically uses a CNAME to your GitHub Pages host. Do not add arbitrary DNS records: use GitHub's official guidance for your repository and domain.
5. Enable **Enforce HTTPS** once it becomes available.

Don't point the domain at both GitHub Pages and Cloudflare Pages at the same time. Pick one hosting provider for the production domain.

## 5. When would a backend be needed?

No backend is required for the current design. A Cloudflare Worker or Pages Function would only be needed for features such as live server status, a protected admin dashboard, dynamic announcements, or a form that saves submissions. Never place private API keys in `config.js` or other browser-side files.

## Project files

- `index.html` — page content and sections
- `styles.css` — responsive design and layout
- `script.js` — mobile navigation, FAQ behavior, configured external links, and link reminders
- `config.js` — place your real Roblox, Discord, and group links here
- `assets/liberty-scene.svg` — original hero scene illustration
- `assets/favicon.svg` — Thunderstruck-style favicon
- `CNAME`, `robots.txt`, `sitemap.xml` — basic domain/SEO files
