#    Deploy React + Vite ke GitHub Pages

Dokumen ini berisi panduan lengkap untuk men-*deploy* project **React JS (Vite)** ke **GitHub Pages** — mulai dari instalasi hingga website tampil online.

---

## 🧩 1. Masuk Ke project React yang ingin kamu Deploy

Jalankan perintah:
```bash
cd nama_project
```

Setelah kamu masuk ke project lakukan Instal `gh-pages`
```bash
npm install gh-pages --save-dev
```

edit `vite.config,js` jadi seperti ini 
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React_kamu/', // sesuai NAMA repo GitHub kamu
})

```

## 2. Buka `package.json` 

edit di paling atas file tambahkan `"homepage"`
```json
"homepage": "https://user.github.io/React_kamu/",
"name" : "react_kamu"
...
```

Edit bagian `"script"` tambahkan `"deploy"
```json
"deploy": "vite build && gh-pages -d dist"
```
Full nya seperti ini 
```json
{
  "homepage": "https://user.github.io/React_kamu/",
  "name": "react-davin",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "vite build && gh-pages -d dist" //ini yang di tambah
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "gh-pages": "^6.3.0",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
}
```

## 3.inisialisai Git dan upload ke github kamu

jika belum lakukan ini dulu:
```bash
git init
```
```bash
git add .
```
```bash
git commit -m "commit pertama"
```
```bash
git branch -M main
```
```bash
git remote add origin //github.com/user/React_kamu.git
```
```bash
git push -u origin main 
```

Jika sudah cukup ketikan ini 

```bash
npm run deploy
```
tunggu sampai muncul pesan
```nginx
Published
```
atau
```bash
vite v7.1.9 building for production...
✓ 32 modules transformed.
dist/index.html                   0.49 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-D8b4DHJx.css    1.39 kB │ gzip:  0.71 kB
dist/assets/index-pd8pbb3c.js   195.27 kB │ gzip: 61.14 kB
✓ built in 2.38s
Published
```

## 4. aktifkan Githu pages

masuk ke  Repository kamu lalu buka `setting`
di pojok kiri sidebar cari bagian `pages`

Lalu ubah:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

Klik Save

biasa nya di atas github akan kasih kamu link pages secara otomatis seperti ini 

```url
https://username.github.io/React_kamu/
```

dan **selesai** kamu bisa cek di browser untuk meliat react kamu jalan di github

## 5. Bonus Troubleshooting (buat kamu yang belum bisa tampil)

di Browser kamu `https://username.github.io/React_kamu/` coba tekan
`ctrl + F12` untuk bukan console.log jika muncul erorr seperti ini 
```pgsql
Failed to load resource: the server responded with a status of 404
```

Solusi nya 

- Pastikan base di `vite.config.js` sudah sesuai `nama repo`
perhatikan bagian ini `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React_kamu/', // sesuai NAMA repo GitHub kamu
})

```
- Hapus folder dist/
- Jalankan ulang:
```bash
npm run deploy
```

> jika masih Erorr kamu bisa lakukan issue di Directory ini untuk menjawab masalah kamu 

