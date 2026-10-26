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

## Back up and restore your data

Your habits live only on the device, so back them up now and then (and always before reinstalling the app).

- **Back up:** open **Settings** (the gear at the top right of Today) and tap **Back up my data**. It always makes one file called `habits-backup.json`. On a phone it opens the share sheet: choose **Save to Files**, pick the same folder each time, and tap **Replace** when asked. On a computer it downloads the file.
- **Restore:** in **Settings**, tap **Restore from a backup**, choose `habits-backup.json`, then tap **Replace my data**. You get an **Undo** right afterwards.
- **Moving to a new phone** works the same way: back up on the old one, restore on the new one.

## Changing the app icon

The icon is set by the files in `icons/` (and `favicon.ico`). Replace them with new pictures of the **same names and sizes**, upload them to GitHub, then on an iPhone remove the Home Screen app and add it again, because iOS only reads the icon when the app is added. Removing the app erases its saved data on iPhone, so **back up first and restore afterwards**.

## Good to know

- **A day runs from 3 AM to 3 AM.** Checking something off at 1 AM counts for the day before. Weeks start on Monday and months on the 1st, using the same 3 AM cut-off.
- **Celebrations.** Finishing every daily habit brings up the sloth in the hammock card and turns the ring gold. When the whole to-do list is done (daily, weekly and monthly), the sloth conga line walks over that card. Finishing every weekly (or every monthly) habit fires confetti cannons and shows a trophy card at the top for a few seconds, which then slides away. Skipped habits don't hold any of them back.
- **Any calendar day is a to-do list.** In the Calendar's Month view, tap a date and that day's to-do list opens right under the metrics. Check things off, change amounts, skip, or count a minimum as done, and step to the day before or after. Tap the date again to fold it away.
- **Two kinds of minimum for count habits.** For a daily count habit, the editor asks "On a tough day I can": **Do less** (a smaller number, like 4 of 8 cups for Water) or **Do it easier** (a written easier way, like "Water only" for Wash face, twice a day). With an easier way you log each one as it happens: the big + is the usual way, and the Minimum win button logs one the easier way. Finish the goal with at least one done the easier way and the day counts as a minimum win; all the usual way is a full day. You can correct it later in the Calendar's day list ("Easier way").
- **Your data stays on the device.** Habits are saved in the browser on that phone or computer. They don't sync between devices, and clearing the site's data in the browser settings erases them.
- **First launch shows sample habits.** Open **Settings** (the "..." on Insights) and tap **Start fresh** to clear them.
- **Service workers need HTTPS.** GitHub Pages provides that. Opening `index.html` straight from your files works, but without the offline feature.
- **Try it on your own computer first:** in this folder run `python3 -m http.server`, then open `http://localhost:8000`.
- **Changing the icon:** replace the files in `icons/` with images of the same names and sizes (192, 512, a 512 maskable one, and 180 for iPhone).
