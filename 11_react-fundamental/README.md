<h1>(11) React Fundamental</h1>

### Apa itu JSX?
<p>JSX singkatan dari Javascript XML</p>

### Kenapa menggunakan JSX?
- JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
- Separation of Technology -> Separation of concerns

### JSX vs React.createElement
- Kita tidak harus menggunakan JSX, tapi JSX memudahkan kita menulis aplikasi react
- Syntactic sugar dari fungsi React.createElement(component, prop, ...children) 

### Spesifikasi Jenis Element React
- Kapitalisasi untuk komponen react
- Huruf kecil (lowercase) untuk komponen bawaan. 

### Menaruh expression pada JSX
Kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal. 

### JSX adalah expression
Setelah dikompilasi, ekspresi JSX akan menjadi panggilan fungsi javascript biasa dan menjadi objek javascript
```
function getGreeting(user){
    if(user){
        return <h1>Halo, {formatName(user)}!</h1>
    }
    return <h1>Halo, orang asing</h1>
}
```

### Menentukan atribut dengan JSX
- Tanda kutip untuk menentukan string literal
  ```
  const element = <div tabIndex="0"></div>
  ```
- Kurung kurawal untuk menyematkan ekspresi javascript.
  ```
  const elemen = <img src={user.avatarURL}></img>
  ```
- React DOM menggunakan camelCase sebagai konvensi penamaan
    ```
    // Valid
    <button onClick={handleClick} className="myButton">Click Me</button>

    // Tidak Valid
      <button onClick={handleClick} class="myButton">Click Me</button>
    ```
### Menspesifikasikan Elemen Anak dengan JSX
- Jika tag bersifat kosong (tidak memiliki elemen anak), kita bisa saja menutupnya secara langsung dengan />
  ```
  const element = <img src={user.avatarURL} />
  ```
- Tag JSX dimungkinkan untuk memiliki elemen anak
  ```
  const element = (
    <div>
        <h1>Halo!</h1>
        <h2>Senang melihatmu di sini. </h2>
    </div>
  );
  ```

# React Component
Komponen react adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagai UI.

### Function and class component
```
funtion Welcome(){
    return <h1>Hello, dunia</h1>
}

class Welcome extends React.Component {
    render(){
        return <h1>Hello, Dunia!</h1>
    }
}
```

### Membuat & Merender component
```
function Welcome() {
    return <h1>Hello teman2</h1>
}

const element = <Welcom/>;
ReactDOM.render(
    element,
    document.getElementById('root');
)
```

# Komposisi Komponen & Props
<h4>Props :</h4>

- Singkatan dari properties, membuat kita dapat memberikan argumen / data pada component.
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah. 

### Komposisi Komponen
1. Kontainmen
2. Spesialisasi

# React Lifecycle
<h4>Lifecycle method yang umum : </h4>

1. render()
2. componentDidMount()
3. componentDidUpdate()
4. componentWillUnMount()

### Render()
- fungsi yang paling sering dipakai
- Required pada class component
- Pure function. Tidak boleh ada setState()
  ```
  class Hello extends Component{
    render(){
        return <div>Hello {this.props.name}</div>
    }
  }
  ```

### componentDidMount()
- Dipanggil ketika component sudah dirender untuk pertama kali
- Tempat yang tepat untuk pemanggilan API
- Boleh ada setState()

### componentDidUpdate()
- Dipanggil ketika terjadi update (props atau state berubah)

### componentWillUnmount()
- Dipanggil ketika component akan dihancurkan
- cocok untuk clean up actions

### Lifecycle method yang lainnya
1. shouldComponentUpdate()
2. static getDerivedStateFromProps()
3. getSnapshotBeforeUpdate()

# Render bersyarat dan list
<h4>Render Bersyarat : </h4>
Pada React, kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi anda. 

- Menggunakan if
- inline if dengan operator &&
- inline if-Else dengan ternary conditional operator
- Mencegah komponen untuk rendering

<h4>Render List : </h4>
Kita dapat membangun koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal{}

<h4>Key : </h4>
Key membantu react untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan. 

# Struktur Directory
React tidak memiliki pendapat (unopinionated) tentang bagaimana cara memasukkan file ke folder

- Pengelompokkan berdasarkan fitur atau rute ->
salah satu cara umum untuk menyusun proyek adalah dengan menempatkan CSS, JS bersama didalam folder yang dikelompokkan berdasarkan fitur atau rute. 
- Pengelompokkan berdasarkan jenis file
- Hindari terlalu banyak nesting
- Jangan terlalu memikirkannya