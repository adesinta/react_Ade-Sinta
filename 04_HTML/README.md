<h1>(04) HTML "Hypertext Markup Language"</h1>

<p>HTML → adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web. </p>
<p>Back-end →  Bagian website yang tidak dapat berinteraksi langsung atau dilihat oleh user. Contohnya : database</p>
<p>Front-End → Bagian website yang berinteraksi langsung atau dapat dilihat oleh user. </p>
<p>Front-end →  sebuah bagian dari website yang membuat tampilan menarik kepada user. Menggunakan HTML, CSS, dan JS.</p>

### Kegunaan HTML
- Membuat struktur dari halaman website.
- Mengatur tampilan dan isi dari halaman web.
- Membuat tabel dengan tag HTML table.
- Membuat form HTML.
- Membuat gambar dengan canvas.
- Mempublikasikan halaman website secara online.

### HTML Editors
- Vscode
- Notepad
- Sublime
- Notepad++
- Atom

### Dokumentasi HTML
| <! DOCTYPE html>      | Mendefinisikan dokumen ini sebagai HTML 5 |
| ----------- | ----------- |
| < html >    | Elemen root dari halaman HTML     |
| < head >   | Berisi informasi meta tentang dokumen        |
| < title >   | Menentukan judul untuk dokumen       |
| < body >   | Berisi konten halaman yang terlihat        |

### Struktur halaman HTML
```
<html>
    <head>
        <title>Title page HTML</title>
    </head>
    <body>
        <div>
            Content HTML
        </div>
    </body>
</html>
```

### Contoh Tag HTML
```
<div>
    Content HTML
</div>
```

### Tag Heading & Paragraph
```
#Heading dibagi dari heading 1-6
<h1>
    Content HTML
</h1>
<p>Paragpaph</p>
```

### Styling pada Paragraph HTML
```
<Strong>Membuat text lebih tebal</strong>
<em>Text menjadi italic</em>
<s>Membuat text dengan garis tercoret</s>
<br/> Line break, atau membuat baris baru. 
```

### Tag Link
```
<a href="link">judul link</a>
```

### Tag Image
```
<img src="logo-alterra.png"/>
```

### List HTML
1. Ordered List → List yang berurut (< ol >)
2. Unordered List → List tak terurut (< ul >)

Setiap list item pada Ordered List dan Unordered List dideklarasikan menggunakan tag < li >.

### Tag Table HTML 
- Membuat table pada HTML menggunakan tag < table ></ table >
- Setiap baris table di deklarasikan menggunakan < tr ></ tr >
- Setiap kolom table dideklarasikan menggunakan < td ></ td >
- Untuk kolom pada tabel header menggunakan < th ></ th >

### Tag Form
```
<form>
    <fieldset>
        <legend>Personal Information</legend>
        <div>
            <label for="full-name">Full Name</label>
            <input type="text" placeholder="Full name.."> 
        </div>
    </fieldset>
</form>
```