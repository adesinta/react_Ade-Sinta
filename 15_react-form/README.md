<h1>(15) React Form</h1>

### Penggunaan Form
Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user. 

Form banyak dijumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lagi. 

Dalam react akan ada banyak hal kita pelajari dari form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi inputan dsb. Untuk saat ini kita akan belajar basic form. 

### Macam Form
- Element < Input>
- Element < Textarea>
- Element < Select>
- Radio Button
- Checkbox

### Type element input lainnya
- text (default)
- button
- color
- checkbox
- date
- datetime-local
- email
- file
- hidden
- image
- month
- number
- password
- radio
- range
- reset
- search
- submit
- tel
- time
- url
- week

------

## Controlled Component
Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya. 

Sebuah elemen masukan form nilainya dikontrol oleh react melalui cara seperti ini disebut sebagai controlled component

### Tag Text Area
```
const EssayForm = () => {
    const [essay, setEssay] = useSate('Please write an essay about your fav DOM element')

    const handleSubmit = (e) => {
        alert('An essay was Submitted : ' + essay)
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Essay:
                <Textarea 
                    value={essay}
                    onChange={e => setEssay(e.target.value)}
                />
            </label>
            <input type="submit" value="submit"/>
        </form>
    )
} 
```

### Tag Select
```
const EssayForm = () => {
    const [flavor, setFlavor] = useSate('coconut')

    const handleSubmit = (e) => {
        alert('Your fav flavor is : ' + flavor)
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
              Pick your favorite flavor : 
              <select value={flavor} onChange={e => setFlavor(e.target.value)}>
                <option value="grapefruit">GrapeFruit </option>
              </select>
            </label>
            <input type="submit" value="submit"/>
        </form>
    )
} 
```

---
## Uncontrolled Component
Alternatif lain dari controlled, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih alih menulis event handler untuk setiap  pembaruam state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM. 

Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode react dan non-react jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component. 

#### Nilai defult
Pada lifecycle rendering react, atribut value pada element form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ini React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih alih menggunakan value.

#### Tag File Input
Pada HTML, sebuah < input type="file"> memungkinkan pengguna untuk memilih salah satu atau beberapa file dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan Javascript lewat file API. 

Dalam React, sebuah < input type="file"/> merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program. 
```
 const FileInput = () => {
    const fileInput = useRef(null);

    const handleSubmit = (e) => {
        alert(`Selected file - ${fileInput.current.file[0].name}`)
    }

    return(
        <form onSubmit={handleSumit}>
            <label>
                 <input type="file" ref={fileInput}>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
 }
```

----
## Uncontrolled VS Controlled Component

#### Uncontrolled Component
Input yang tidak terkontrol seperti input formulit HTML tradisional. 
```
const Form = () => {
    return (
        <div>
            <input type="text"/>
        </div>
    )
}
```
Kita kemudian bisa mendapatkan nilainya menggunakan ref. Misalnya, ditombol ditambahkan onClickhandler. 
```
const Form = () => {
    const input = useRef('')

    const handleSubmitClick = (e) => {
        const name = input.current.value;

        console.log(name, input)
    }
    return (
        <div>
            <input type="text"/>
            <button onClick={handleSubmitClick}>Sign Up</button>
        </div>
    )
```

Dengan kata lai, Kita harus 'menarik' nilai dari field saat kita membutuhkannya. Ini bisa terjadi ketika formulir disubmit. 

Itu adalah cara paling sederhana untuk mengimplementasikan input formulir. Tentu saja ada kasus yang valid untuk menggunakannya: dalam form sederhana dan saat belajar React. 

Namun, uncontrolled input tidak powerful. 

#### Controlled Component
Sebuah controlled input menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. Kita bisa mengatakan ini adalah cara yang lebih "React way" untuk pendekatan ini (yang tidak harus selalu menggunakannya)
```
<input value={someValue} onChange={handleChange}/>
```
Tetapi nilai input ini harus ada di state yang disimpan di suatu tempat. Biasanya, komponen yang merender input (alias form component) menyimpannya di statenya. Dan bisa dalam state komponen lain, atau di penyimpanan state terpisah (separate state store) seperti Redux.

#### Apa yang membuat elemen "Controlled"?
|Element|Value Property|Change Callback|New Value in callback|
|----|----|-----|-----|
|< input type="text"/>| value="string"| onChange| event.target.value|
|< input type="checkbox"/>| checked={boolean}|onChange|event.target.checked|
|< input type="radio"/>| checked={boolean}| onChange| event.target.checked|
|< textarea/>| value="string"| onChange| event.target.value|
|< select/>| value="option value"| onChange| event.target.value|

#### Kesimpulan
|Fitur|uncontrolled|controlled|
|----|---|---|
|one-time value retrieval (e.g on submit)| v | v |
|validating on submit|v|v|
|instant field validation|x|v|
|conditionally disabling submit button|x|v|
|enforcing input format|x|v|
|several inputs for one piece of data|x|v|
|dynamic inputs|x|v|

--------
## Basic Validation
#### Kenapa Perlu Validasi?
Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan : 
- Mencari input data yang benar dan sesuai format. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi. 
- Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman. 
- Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi. 

#### Tipe Validasi Data Formulir
1. Client-side Validation <br>
   Validasi yang dilakukan pada sisi klien(browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke sever.

   Kelebihan : 
   - user-friendly, karen jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi. <br>
  
  Validasi sisi klient terbagi menjadi :
  - Built-in form validation, yaitu menggunakan fitur validasi langsung dari HTML5. Biasanya, validasi ini tidak membutuhkan js dan memiliki performa yang lebih baik. Tapi tidak dapat dikostumisasi. Kadang pesan errornya cukup kaku. 
  Contohnya : required, minlength, maxlength, min, max, type dan patten. 

  - Menggunakan javascript, ini membuat validasi form dapat dikostumisasi. Tetapi perlu membuatnya sendiri. 

2. Server-side Validation <br>
   Validasi yang  dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirimkan kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna. 

   Berbeda dengan validasi sisi klien, validasi ini tidak user-friendly. Karena, koreksi kesalahan akan dikirimkan, setelah form di-submit. 
