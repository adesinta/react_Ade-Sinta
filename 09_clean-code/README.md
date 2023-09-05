<h1>(09) Clean Code</h1>

<p>Cleand Code adalah istilah untuk kode yang mudah dibaca, dipahami dan diubah oleh programmer</p>

> "Working code isn't necessary good code. Your code also need to be easy to read, understand and modify" ~Brandon Gregory

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand" ~Martin Fowler

### Alasan Mengapa "Clean Code"
  - Work collaboration
  - Feature Development
  - Faster Development

### Karakteristik "Clean Code"
> "There are only hard things in computer science: cache invalidation and naming things" ~Martin Fowler

1. Mudah dipahami
2. Mudah dieja dan dicari
3. Singkat namun mendeskripsikan konteks
4. Konsisten
5. Hindari penambahan konteks yang tidak perlu
6. Hindari terlalu banyak penggunaan komentar
7. Good Function
8. Gunakan konvensi
9. Formatting

### Saran Formatting
- Lebar baris code 80 - 120 karakter.
- Satu class 300 - 500 baris.
- Baris code yang berhubungan saling berdekatan.
- Dekatkan fungsi dengan pemanggilnya.
- Deklarasi variabel berdekatan dengan penggunanya.
- Perhatikan indentasi.
- Menggunakan prettier atau formatter. 

### Prinsip "Clean Code"
1. KISS (Keep It So Simple)
   <p>Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst</p>

    <p>Tips Untuk Selalu KISS : </p>

    - Fungsi atau class harus kecil.
    - Fungsi dibuat untuk melakukan satu tugas saja.
    - Jangan gunakan terlalu banyak argumen pada fungsi
    - Harus diperhatikan untuk mencapai kondisi yang seimbang.
    - Kecil dan jumlahnya minimal

2. DRY (Don't Repeat Yourself)
   <p>Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang</p>

3. REFACTORING
   <p>Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara Refactor. </p>

  