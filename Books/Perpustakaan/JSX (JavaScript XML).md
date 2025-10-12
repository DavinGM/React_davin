# Pengertian JSX

`JSX` **(JavaScript XML)** adalah ekstensi sintaksis untuk JavaScript yang memungkinkan Anda menulis kode mirip `HTML` langsung di dalam file JavaScript. Meskipun terlihat seperti `HTML`, `JSX` sebenarnya bukan `string` atau `HTML` sungguhan. `JSX` adalah sintaks khusus yang akan **di-transpile** atau diubah menjadi kode JavaScript murni sebelum dijalankan di browser. 

# Logika JSX dalam Vite


- Sintaks Deklaratif: JSX membuat kode menjadi lebih mudah dibaca dan intuitif. Alih-alih menggunakan fungsi `React. createElement()` yang panjang untuk setiap elemen, Anda bisa menuliskan struktur UI secara deklaratif, layaknya HTML.

- Transformasi: Saat Anda membuat proyek React dengan build tool seperti Vite, kode JSX Anda akan melewati proses transpilation oleh bundler. Proses ini mengubah setiap tag JSX menjadi panggilan fungsi `React.createElement()` yang merupakan JavaScript asli.

- Vite sebagai Transpiler: Vite menggunakan bundler yang sangat cepat, seperti esbuild, untuk mengubah JSX menjadi JavaScript. Ini adalah salah satu alasan mengapa Vite bisa membangun proyek React dengan jauh lebih cepat daripada tools lain seperti Create React App.

- Elemen React: Hasil dari transformasi tersebut adalah objek JavaScript yang disebut React Element. Objek ini berisi informasi tentang jenis elemen (`'div'`, `'h1'`, atau komponen lain), properti (props), dan anak-anak (children) yang dimiliki oleh elemen tersebut.

- Render ke DOM: Setelah JSX diubah menjadi objek JavaScript, React akan menggunakan objek tersebut untuk membangun dan memperbarui DOM *(Document Object Model)* secara **efisien**, yang merupakan cara browser memuat dan menampilkan halaman web.


Misal nya 
```jsx
const nama = "Alice";
const element = <h1>Halo, {nama}</h1>;
```

Saat di-transpile, kode di atas akan menjadi kode JavaScript murni yang setara dengan ini:
```js
const nama = "Alice";
const element = React.createElement("h1", null, "Halo, ", nama);
```
Seperti yang Anda lihat, JSX hanya merupakan "gula sintaksis" yang mempermudah pengembang menulis kode yang kompleks dengan cara yang lebih bersih.

# Penggnaan JSX dengan TypeScript (TSX)

Penggunaan JSX dengan TypeScript (TSX)
Ketika Anda menggunakan `TypeScript` (TS) di proyek React, Anda akan menggunakan file dengan ekstensi `.tsx` (TypeScript XML) alih-alih `.jsx`. 

Pada dasarnya, `TSX` adalah `JSX` dengan tambahan fitur static typing dari TypeScript. 
Fitur-fitur utama TSX:
Pengecekan Tipe: TypeScript dapat memeriksa properti (props) dari komponen Anda untuk memastikan bahwa tipe data yang Anda gunakan sudah benar. Ini mengurangi kemungkinan kesalahan saat pengembangan.

- Penanganan props: Anda dapat mendefinisikan tipe data untuk props dari sebuah komponen menggunakan interface atau type, sehingga kesalahan saat melewati props yang salah akan terdeteksi sebelum aplikasi dijalankan.

- Penanganan state: Demikian pula, tipe data untuk state juga bisa didefinisikan, sehingga membuat aplikasi menjadi lebih terstruktur dan aman dari kesalahan.

- Kejelasan Kode: Dengan pengetikan yang ketat, kode menjadi lebih mudah dipahami dan dikelola, terutama dalam proyek yang besar. 

Contoh Pengguaan TSX

```tsx
// Mendefinisikan tipe data untuk props
interface SalamProps {
  nama: string;
}

// Menggunakan tipe data pada komponen fungsional
function Salam(props: SalamProps): JSX.Element {
  return (
    <h1>Halo, {props.nama}</h1>
  );
}

// Penggunaan komponen
const App = (): JSX.Element => {
  return <Salam nama="Bob" />; // TypeScript akan memastikan props.nama adalah string
};
```
Dalam contoh di atas, jika Anda mencoba memanggil komponen <Salam /> tanpa prop nama atau dengan prop dengan tipe data yang salah, TypeScript akan langsung menampilkan kesalahan pada saat kompilasi. Ini membantu mencegah bug sebelum terjadi pada saat runtime.


