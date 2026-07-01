# 🎂 Happy Birthday, Pravya! 💙

A premium, cinematic birthday website — a gift built with pure HTML, CSS, and Vanilla JavaScript. Designed with a dreamy blue aesthetic inspired by skies, clouds, ocean waves, twilight, stars, and moonlight.

---

## ✨ Features

- 🌟 **Animated Loading Screen** — Starry sky with glowing particles
- 💌 **Typewriter Birthday Letter** — Personalised message with elegant typography
- 📸 **Polaroid Scrapbook Gallery** — Photos arranged as tilted polaroid prints
- 🎥 **Cinematic Video Section** — Click-to-play with fullscreen support
- 🌊 **Interactive Blue World** — Clouds, birds, bubbles, waves & shooting stars
- 🎂 **Birthday Cake** — Animated candles with a blow-out interaction
- 💫 **Birthday Wishes Canvas** — Floating confetti-style animation
- 💙 Glassmorphism UI, smooth gradients, and micro-animations throughout
- 📱 **Fully Responsive** — Works on Desktop, Laptop, Tablet, Android & iPhone

---

## 📁 Folder Structure

```
(p)birthday/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # All interactivity
├── .gitignore          # Git ignore rules
├── .nojekyll           # GitHub Pages Jekyll bypass
├── README.md           # This file
└── assets/
    ├── images/         # Photo gallery images (PNG/JPG)
    └── videos/         # Video files (MP4)
```

---

## 🖼️ How to Customize Photos

1. Add your photos to `assets/images/`
2. Open `script.js` and find the `GALLERY_IMAGES` array near the top:

```js
const GALLERY_IMAGES = [
    { src: 'assets/images/YOUR_PHOTO.PNG', caption: 'Your caption here 💙' },
    // Add more...
];
```

3. Replace or add entries — captions are optional.

---

## 🎥 How to Replace Videos

1. Add your `.mp4` video to `assets/videos/`
2. Open `script.js` and find the `GALLERY_VIDEOS` array:

```js
const GALLERY_VIDEOS = [
    { src: 'assets/videos/YOUR_VIDEO.mp4', caption: 'Your caption', thumb: 'assets/images/THUMB.PNG' },
];
```

3. The `thumb` is a thumbnail image shown before playing. Leave it empty `''` for an auto-generated blue gradient.

---

## 💌 How to Edit the Birthday Message

Open `script.js` and find the `BIRTHDAY_LETTER` constant at the top. Edit the text freely:

```js
const BIRTHDAY_LETTER = `Your personalised message goes here...`;
```

---

## 🔁 How to Redeploy After Changes

After making changes, run these commands:

```bash
git add .
git commit -m "Update: describe your changes"
git push origin main
```

GitHub Pages will automatically redeploy within ~60 seconds.

---

## 🚀 Deployment (GitHub Pages)

1. Push the project to a GitHub repository (see setup below)
2. Go to **Settings → Pages** on GitHub
3. Set **Source** to `Deploy from a branch → main → / (root)`
4. Click **Save** — your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 🛠️ Initial GitHub Setup

```bash
git init
git add .
git commit -m "🎂 Initial commit: Pravya's birthday website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## 💙 Made with care by Swaroop
