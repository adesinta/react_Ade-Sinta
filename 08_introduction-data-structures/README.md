<h1>(08) Introduction Data Structure</h1>

### Mengapa belajar data structure
<p>Agar dapat mengerti kualitas kode yang dibuat dan efisiensi kode.</p>

<p>Data : cakupan luas yang merujuk semua tipe informasi yang tersimpan dalam memori komputer (string, number, boolean, dll)</p>
<p>Data structur adalah bagaimana menyimpan dan mengorganisir data/value/element didalam memori komputer</p>
<p>Data dapat dikelola dengan berbagai cara</p>

### Basic Data Structure
- Array -> dalam sebuah array jika ingin memasukkan value ke index terakhir bisa menggunakan push.
- Set -> sedangkan set menggunakan add dan tidak mengizinkan duplikasi. dan set berupa objek

### Operasi Data Structure
- Read
- Insert
- Search
- Delete

# Array
<p>Dalam data structure array merupakan structure dasar data paling sederhana atau paling banyak digunakan. </p>

### Reading
- Melihat nilai apa yang terkandung pada indeks tertentu didalam array
- Operasi yang efisien
- Jenis operasi tercepat karena hanya membutuhkan 1 steps
- Setiap cell pada memori memiliki alamat spesifik yang diwakili dengan angka
- Angka yang dimiliki lebih besar dari cell sebelumnya

### Searching
- Mencari apakah nilai tertentu ada didalam array atau tidak
- Kebalikan dari reading
- Ketika melakukan operasi searching pada array komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu
- Komputer tidak bisa tahu begitu saja nilai apa yang terkandung pada setiap memori. 
- Perlu memeriksa setiap cell satu per satu.
- Kurang efisien dibanding dengan reading
- Membutuhkan banyak steps sesuai dengan ukuran array (linear search)

### Insertion
- Efisiensi tergantung dimana kita memasukkan valuenya
- Memasukkan value pada akhir dari array hanya membutuhkan 1 steps yaitu push. 

### Deletion
- Operasi menghilangkan value pada indeks tertentu
- Membutuhkan jumlah N Steps untuk array yang mengandung N data. 


# Set
<p>Data structure sama seperti array, tetapi perbedaannya hanya pada set yang tidak mengizinkan duplicate value dimasukkan kedalamnya.</p>
<p>Dari keempat operasi reading, searching, insertion dan deletion terdapat perbedaan efisiensi pada operasi insertion sedangkan operasi yang lainnya sama seperti array.</p>

### Operasi pada set
- Reading -> menggunakan forEach
- Searching -> menggunakan has method
- Deletion -> menggunakan method delete().
- Insertion 

### Insertion pada set 
- Perlu steps tambahan untuk memastikan bahwa value yang ingin dimasukkan tidak ada didalam set.
- Maka operasi searching akan dijalankan terlebih dahulu untuk melihat valuenya

# Kesimpulan
- Menganalisa jumlah steps adalah sangat penting untuk mengetahui performa dari sebuah data structure disuatu aplikasi. 
- Reading, searching, dan deletion pada array dan set memiliki efisiensi yan gsama yaitu secara berurutan 1 steps, N steps, dan N steps. Terdapat perbedaan pada operasi Insertion, dimana skenarion terbaik pada array yaitu 1 steps sedangkan pada set yaitu N + 1 Steps. 
- Set penting jika kita menginginkan data structure yang terbebas dari duplikasi walaupun lebih lambat dari array pada operasi insertionnya. 
- Namun jika membutuhkan pemeriksaan duplikasi menggunakan array lebih disarankan. 
