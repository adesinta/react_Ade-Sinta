<h1>(12) Event Handling</h1>

### State
<p>Data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.</p>

### State
1. Data yang bisa dimodifikasi menggunakan setState
2. Setiap terjadi modifikasi akan terjadi render ulang
3. Bersifat Asynchronous
4. Dipakai dalam class

### Props VS State
- Props bersifat read-only dan tidak dapat diubah
- State datanya dapat diubah dengan cara asynchronous dan dapat diubah dengan menggunakan this.setState

### Statefull Component
<p>Memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki lifecycle</p>

### Stateless Component
<p>Tidak memiliki state hanya prop. Umumnya component ini dibuat dengan function karena codenya lebih ringkas</p>

### Komponen Statefull dan Stateless memiliki banyak nama berbeda
1. Smart component & Dump component
2. Container component & Presentational component. 

### Perbedaan statefull dan stateless
| Stateless Component | Statefull Component |
| --- | ----------- |
| Tidak tahu tentang aplikasi | Mengerti tentang aplikasi |
| Tidak melakukan data fetching (pengambilan data) | Melakukan data fetching  |
|Tujuan utamanya adalah visualisasi | Berinteraksi dengan aplikasi |
|Dapat digunakan kembali|Tidak dapat digunakan kembali |
|Hanya berkomunikasi dengan induk langsungnya| Meneruskan status dan data ke anak anaknya|

### Event Handling
<p>Suatu metode untuk menangani sebuah event atau aksi yang diberikan pengguna kepada suatu komponen. </p>

### Event
<p>Suatu peristiwa yang dipicu oleh pengguna pada suatu komponen</p>

### Contoh List Event
1. Clipboard Events 
   - Promise terpenuhi
2. Form Events
   - onChange
   - onSubmit
3. Mouse Events
   - onClick
   - onDoubleClick
   - onMouseOver
4. Generic Events
   - onError
   - onLoad
