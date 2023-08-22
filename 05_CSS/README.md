<h1>(05) Cascading Style Sheets "CSS"</h1>
<p>Dapat menghias halaman web. (color, size, font, background, width, height, dll)</p>
<p>Dapat mengatur posisi pada halaman web. (Float, align, display, position, dll)</p>


### Menambahkan file CSS
<p>Ada 3 cara menambahkan file CSS ke dalam HTML</p>

1. External CSS → disisipkan ke dalam tag < head > pada HTML. Ekstensi file CSS adalah .css
2. Internal CSS → membuat < style > didalam bagian < head > atau di dalam < body >
3. Inline CSS → langsung didalam tag yang ingin distyle contoh : 
```
<h1 style="color: #FFFFFF;"> 
    Hello World!!!
</h1>
``` 

### Syntax CSS
```
h1{ color: pink; font-size: 15px; }
```
- h1 → Selector
- color: → Property
- pink; → Value
<p>Gabungan property dan value disebut Declaration</p>

### CSS Selector

1. ID → (#)
   - Setia
   - p elemen hanya dapat memiliki satu tag id
   - Dalam satu halaman tidak boleh ada dua penamaan id yang berbeda
2. Class → (.)
   - Tag class dengan nama yang sama dapat dipakai berulang ulang pada satu halaman
   - Satu elemen boleh memiliki lebih dari satu class yang berbeda-beda

### CSS Grouping
Beberapa selector dapat dikelompokkan dalam satu deklarasi style
```
#File CSS
h1, h2 {

    font-family: poppins;
    color: #FFFFFF;
}
```

### CSS Font
- Font → Menetapkan semua properti font dalam satu deklarasi
- Font-family → Menentukan jenis font teks
- Font-size → Menentukan ukuran font
- Font-weight → Menentukan ketebalan font
- Font-style → Menentukan style font

### CSS background
- Background-color → Menentukan warna background
- Background-image → Menentukan gambar background
- Backgroud-repeat → Menentukan gambar background untuk diulang
- Background-size → Menentukan ukuran gambar pada background
- Background-position → Menentukan posisi awal gambar background

### CSS Link Event
| CSS Link Event     | Fungsi |
| ----------- | ----------- |
| :hover   | Kondisi style ketika mouse berada diatas elemen    |
| :active   | Style ketika link "a" ditekan      |
| :visited  | Style dimana elemen link "a" telah dikunjungi / klik      |

### CSS Display
<p>Menentukan tampilan pada elemen</p>

1. Block → Elemen block selalu dimulai pada baris baru. (Dimulai dari kiri ke kanan).
2. Inline-block → Elemen inline-block membutuhkan lebar sesuai yang diperlukan. 
3. None → Menyembunyikan elemen untuk tidak ditampilkan

### CSS Table
1. Border →  Menambahkan border pada table,th dan td
2. Border-collapse → Membuat border menjadi single border
