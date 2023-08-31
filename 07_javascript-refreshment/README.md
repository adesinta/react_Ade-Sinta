<h1>(07) Javascript refreshment</h1>

<p>Javascript adalah bahasa pemrograman yang high-level, scripting, untyped dan interpreted</p>

### Declarations
<p>Proses pembuatan variabel untuk menyimpan data</p>

- Var
- Let -> digunakan saat kita membutuhkan nilai yang dapat diubah
- Const -> digunakan saat kita membutuhkan nilai yang tidak bisa di "reassign".

### Scoping
<p>Menentukan dimana variabel, fungsi dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel</p>

1. Global Scope -> saat mendeklarasikan variabel, variabel tersebut dapat diakses pada setiap kondisi termasuk didalam function ataupun didalam block. 
2. Function Scope -> mendeklarasikan variabel didalam function dan tidak dapat diakses saat diluar function tersebut
3. Block scope -> saat mendeklarasikan variabel, variabel didalamnya tidak dapat diakses diluar block kecuali variabel var. 

### Hoisting
<p>Membuat beberapa jenis variabel atau fungsi dapat diakses atau digunakan dalam kode sebelum dideklarasikan</p>

### Values & References
<p>JS memiliki 2 kategori tipe data : </p>

1. Primitive -> Meneruskan nilai
2. Object -> disebut sebagai collection atau reference type.

### Primitive
<p>Unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman </p>

- String
- Boolean
- Number
- BigInt (ES11)
- Undefined
- Null
- Symbol (ES6)

### Objects
<p>unit yang menyimpan properti dan fungsi (method)</p>

- Object
- Array
- Function
- Date
- Set
- Map
- Weak Set
- Weak Map

### Destructuring
<p>Ekspresi dari javascript yang memungkinkan untuk menyalin nilai dari array, atau properti dari objek ke dalam variabel yang berbeda</p>

### Spread Syntax
<p>Dapat digunakan ketika semua elemen dari objek atau array perlu dimasukkan ke dalam semacam daftar</p>

### Method pada array
<p>Fungsi yang terkait dengan objek, membuat programnya se-sederhana mungkin sesuai kegunaan masing-masing. </p>

1. Concat -> Menggabungkan dua atau lebih array, mengembalikan salinan array yang digabungkan
2. Map -> membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array.
3. Foreach -> Memanggil fungsi untuk setiap elemen array. Melakukan looping dan loopingan itu kita lakukan operasi didalamnya atau melanjutkan fungsi didalamnya. 
4. Slice -> Memilih bagian array, dan mengembalikan array baru. 
5. Filter -> Membuat array baru dengan setiap elemen dalam array yang lulus seleksi.
6. Reduce -> Melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan)

### Control Flow
Normal flow → pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan. 

Control flow → mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita.

Untuk melakukan control flow, dibutuhkan : 

- Pengulangan (Looping/iterasi) → For, While, Do While.
- Pengkondisian (Percabangan) → If … Else, Switch, Block, Try..Catch, Break, Continue, Throw.

### Function
Function adalah sebuah objek. Karena memiliki **properti** dan juga **method**. 

Function digunakan untuk melakukan serangkaian komputasi / prosedur yang dapat digunakan berulang kali.

### Class 
**class** adalah prototype dari suatu object yang akan kita buat. 

**constructor** adalah method didalam class yang akan selalu terpanggil pertama kali ketika membuat object.

**method** adalah sebuah fungsi yang berada didalam class.

**attributes** adalah kumpulan variabel yang membentuk object yang dimiliki oleh suatu class. 

**extend** digunakan untuk membuat kelas anak dari kelas induk. Kelas anak mewarisi semua atribut dan metode dari kelas induk.

### Async-wait

- Synchronous mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan. 
- Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses. 
- Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau fungsi yang dieksekusi setelah fungsi lain selesai dijalankan. 
- Promise adalah objek yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronous dimasa mendatang. 
- Asynchronous function adalah sebuah fungsi yang bekerja secara asynchronous yang menghasilkan promis sebagai return valuenya, tetapi cara penulisan code-nya menggunakan penulisan yang synchronous (standar)
- Await adalah sebuah keyword yang terdapat pada async function yang tujuannya menghentikan eksekusi sambil menunggu promisenya selesai. 


### DOM (Document Object Model)
Dom adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah project. 

### Dom Selection Method

1. getElementById() 
2. getElementByTagName()
3. getElementByClassName()
4. querySelector()
5. querySelectorAll()

### Dom Manipulation
1. element.innerHTML -> untuk merubah isi dari tag yang sudah kita seleksi
2. element.style.< propertyCSS > -> untuk merubah style dari tag yang sudah kita seleksi
3. element.setAttribute() -> untuk mengelola/memanipulasi attribute yang sudah kita seleksi
4. element.classList.add() -> untuk mengelola / memanipulasi class yang sudah kita seleksi.

### Dom Events
1. onClick -> digunakan ketika pengguna mengklik mouse
2. onChange -> digunakan dalam kombinasi dengan validasi bidang input.
3. onBlur -> digunakan ketika ada meninggalkan kolom input.
4. onmouseover -> digunakan ketika pengguna mengarahkan mouse ke atas pada suatu objek
5. onmouseout -> Digunakan ketika pengguna mengarahkan mouse keluar pada suatu objek
6. onCopy -> digunakan ketika pengguna mengcopy suatu objek.