<h1>(16) Global state and data fetching</h1>

### Kapan saat yang tepat menggunakan redux
1. banyak state yang perlu ditaruh di banyak tempat
2. state pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu. 

### Redux Library dan tools
1. React-Redux
2. Redux toolkit
3. Redux devtools extension 

### Komponen penting di Redux
1. Actions -> untuk memberikan informasi dari aplikasi ke store
2. Reducer -> yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru. 
3. Store -> objek sentral yang menyimpan state pada aplikasi. 

### Memakai dan mengubah state
1. Hooks
2. Connect

- Redux adalah library untuk manajemen state global
- Redux menggunakan struktur one-way data flow
- Redux menggunakan beberapa tipe code. 

----------------------------------

## Redux Thunk
Thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action

### Kenapa perlu redux thunk?
- Untuk menghandle side effect logic yang kompleks
- Untuk logic async seperti request data

---------------
## Data Fetching

Cara untuk fetching data di react : 
1. Fetch Api
2. Axios
3. React Query Library