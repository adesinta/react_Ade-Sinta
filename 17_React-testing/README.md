<h1>(17) React Testing</h1>

### Apa itu Testing?
Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita. 

### Manfaat Testing
- Mengurangi bug pada aplikasi
- Ketika aplikasi kita mempunyai coverage yang baik, kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya. 

### Kategori Testing
1. Rendering component tress
2. Menjalankan aplikasi lengkap

### Rekomendasi Tools
1. Jest
2. React Testing Library

-------
## Create Basic Testing With RTL

## Render dan Debug
Fungsi render RTL akan merender file JSX apapun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen react yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti hasil dari fungsi render RTL

React testing library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render

### Memilih Elemen
React testing library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. 

salah satu contohnya ialah getByText untuk memilih teks dari elemen yang sudah dipilih. 

-----
## Testing custom Hook
Library yang digunakan : 
React hooks testing library

```
npm install -D @testing-library/react-hooks
```