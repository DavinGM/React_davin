
# Beriku Beberapa aturan tak tertulis di dalam React Js

### Aturan Tak Tertulis
<!-- buat table -->

| Aturan | Deskripsi | Contoh
| --- | --- | --- |
| 1 | Untuk Nama components menggunakan Kapital di awal dan kata tengah  | `NamaComponent`     
| 2 | untuk Nama Layout Menguunakan akhiran Inisial  | `HeroLayout`, `SectionLayout`, `FooterLayout` |
| 3 | Nama File tidak di sarankan menggunakan simbol `_` atau pun `-`| `Hero_section`❌ `HeroSection`✅ |


### Daftar Kesalahan Pemula

**Const di dalma JSX**

| Situasi                                             | Boleh? | Contoh                              |
| --------------------------------------------------- | ------ | ----------------------------------- |
| `const` di dalam fungsi (const function)            | ✅      | `const x = ...` di dalam komponen   |
| Dua `const` di satu baris                           | 🚫     | `const const x = ...`               |
| `const` di dalam blok `{}`                          | ✅      | bisa di if, for, function           |
| Re-declare const dengan nama sama di blok yang sama | 🚫     | `const a = 1; const a = 2;` (error) |
