# XML (Extensible Markup Language)


XML (Extensible Markup Language) adalah bahasa markup serba guna yang dirancang untuk menyimpan dan mengangkut data. Berbeda dengan HTML yang berfokus pada cara data ditampilkan, XML berfokus pada struktur dan deskripsi data itu sendiri. Karena dirancang untuk dapat dibaca oleh manusia dan mesin, XML sangat ideal untuk pertukaran data antar sistem.

**Karakteristik utama XML**

- **Dapat diperluas (Extensible):** Anda dapat membuat tag sendiri sesuai kebutuhan untuk mendeskripsikan data. Tidak ada batasan tag yang sudah ditentukan sebelumnya seperti di HTML.
Struktur Hierarkis: Data diatur dalam struktur mirip pohon dengan elemen induk dan anak. Ini membuat data terorganisasi dan mudah dipahami.

- **Fokus pada Data:** XML tidak memiliki kemampuan untuk menampilkan data secara visual. Ia hanya berfungsi sebagai wadah untuk menyimpan dan membawa data dari satu tempat ke tempat lain.

- **Mandiri (Self-descriptive):** Dengan tag yang deskriptif, Anda dapat memahami isi data hanya dengan membaca XML-nya.

**Struktur dasar XML**
Sebuah dokumen XML terdiri dari:
- `Prolog`: Deklarasi opsional yang mendefinisikan versi XML dan pengodean karakter.
- `Elemen`: Memiliki tag pembuka dan penutup, seperti <nama> dan </nama>.
- `Atribut`: Properti tambahan yang disimpan di dalam tag pembuka.

**Contoh struktur XML**

```xml
<?xml version="1..0" encoding="UTF-8"?>
<mahasiswa>
  <data_mahasiswa id="2021001">
    <nama>Budi Santoso</nama>
    <jurusan>Teknik Informatika</jurusan>
    <ipk>3.85</ipk>
  </data_mahasiswa>
  <data_mahasiswa id="2021002">
    <nama>Citra Dewi</nama>
    <jurusan>Sistem Informasi</jurusan>
    <ipk>3.90</ipk>
  </data_mahasiswa>
</mahasiswa>
```

# Perbedaan XML dan HTML

Walaupun `XML` dan `HTML` sama-sama menggunakan tag, keduanya memiliki tujuan dan aturan yang berbeda.

---

## Perbandingan Umum

| Fitur | XML | HTML |
|-------|------|------|
| **Fokus** | Menyimpan dan membawa data. | Menampilkan data di browser. |
| **Tag** | Tidak ada tag yang tetap, kamu bisa membuat tag sendiri. | Menggunakan tag yang sudah ditentukan (*predefined*) seperti `<h1>`, `<p>`, `<img>`. |
| **Aturan** | Sangat ketat — semua tag harus ditutup dan struktur harus rapi. | Lebih fleksibel — beberapa tag tidak harus ditutup. |

---

## Contoh Penggunaan XML

XML digunakan di banyak tempat karena strukturnya yang **terorganisasi** dan **mudah dibaca mesin**.

###  1. RSS Feed
Digunakan untuk mendistribusikan konten blog atau berita secara otomatis.

###  2. Konfigurasi Aplikasi
Banyak aplikasi menggunakan XML untuk menyimpan file konfigurasi (misalnya `AndroidManifest.xml`).

###  3. Pertukaran Data
Sistem yang berbeda dapat saling berkomunikasi dengan bertukar data dalam format XML yang terstandarisasi.

###  4. SVG (Scalable Vector Graphics)
Bahasa berbasis XML untuk membuat gambar vektor yang bisa diskalakan tanpa kehilangan kualitas.

###  5. Android Development
Digunakan untuk mendefinisikan tata letak antarmuka pengguna (UI) aplikasi Android.

---

✨ **Kesimpulan:**
> - XML berfokus pada *penyimpanan dan struktur data*,  
> - sedangkan HTML berfokus pada *penyajian data di browser.*  
>  
> Singkatnya, **XML = data**, **HTML = tampilan.**


