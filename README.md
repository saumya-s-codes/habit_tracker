# Habits (installable web app)

A gentle habit tracker with a sloth. It works offline and installs to your home screen.

## What is in this folder

| File | What it does |
| --- | --- |
| `index.html` | The whole app |
| `manifest.webmanifest` | Name, colors and icons for installing |
| `sw.js` | Service worker: lets the app open with no connection |
| `icons/` | App icons (rounded, maskable and the iPhone one) |
| `favicon.ico` | Browser tab icon |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Put it on GitHub Pages

1. On GitHub, create a new **public** repository, for example `habits`.
2. Upload everything in this folder to the repository root (**Add file > Upload files**). Keep the `icons` folder and the files exactly as they are. If your computer hides `.nojekyll`, that's fine, the site works without it.
3. Open **Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then **Save**.
4. After a minute or two your app is live at `https://YOUR-USERNAME.github.io/habits/`.

## Install it on your phone

- **iPhone (Safari):** open the link, tap **Share**, then **Add to Home Screen**.
- **Android (Chrome):** open the link, tap the menu, then **Install app** (or **Add to Home screen**).
- **Computer (Chrome or Edge):** click the install icon at the right end of the address bar.

Open it once while online. After that it also opens with no connection.

## Shipping an update

1. Edit `index.html`.
2. Change `APP_VERSION` (and `APP_UPDATED`) near the top of the script, for example `'1.1.0'` to `'1.1.1'`. That number also tells the service worker to refresh its saved copy. If you forget to change it, phones that already installed the app may keep showing the old version.
3. Commit the change. GitHub Pages redeploys in about a minute.
4. Installed copies update the next time they are opened with a connection. Close and reopen the app once to see the new version. The version shows at the bottom of **Settings**.

## Good to know

- **Your data stays on the device.** Habits are saved in the browser on that phone or computer. They don't sync between devices, and clearing the site's data in the browser settings erases them.
- **First launch shows sample habits.** Open **Settings** (the "..." on Insights) and tap **Start fresh** to clear them.
- **Service workers need HTTPS.** GitHub Pages provides that. Opening `index.html` straight from your files works, but without the offline feature.
- **Try it on your own computer first:** in this folder run `python3 -m http.server`, then open `http://localhost:8000`.
- **Changing the icon:** replace the files in `icons/` with images of the same names and sizes (192, 512, a 512 maskable one, and 180 for iPhone).
