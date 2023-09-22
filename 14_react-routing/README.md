<h1>(14) React Routing</h1>

## Apa itu Router?
Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single page application)

## Apa itu Multi Page Application (MPA)?
MPA juga disebut dengan traditional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru. 

## Apa itu Single Page Application (SPA)?
SPA adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut. 

## Keunggulan SPA dan MPA

| SPA | MPA |
| ----------- | ----------- |
| Waktu loading website jauh lebih cepat | SEO website akan lebih mudah dioptimasi |
| Tidak ada query tambahan ke server | Memudahkanmu untuk mengubah halaman tertentu untuk setiap kebutuhan yang berbeda |
|Front-end yang cepat dan responsif| Menggunakan tools analisis seperti Google analytics yang dapat terintegrasi langsung dengan website|
|Meningkatkan pengalaman pengguna (User Experience)|-|

## Kekurangan SPA dan MPA
| SPA | MPA |
| ----------- | ----------- |
| Tidak bagus dalam hal SEO | Kecepatan download website jauh lebih lama jika dibandingkan dengan SPA |
| Berat saat di load/buka pertama kali. | Perlu mengintegrasikan antara FE dan BE |
|Kurang aman dibanding dengan website biasa|Lebih sering membutuhkan maintenance dan uodate|
|Masalah kompabilitas browser.|Mungkin akan lebih sering menemukan masalah performa pada website.|

## React Router
npm install react-router-dom --save

## React Router Version 5
1. BrowserRouter
2. Switch
3. Route
4. Link


  ####  BrowserRouter
Digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang. 

 #### Route
   Digunakan sebagai pengarah jalannya lalu lintas suatu aplikasi web. 

   Attribute path merupakan url pada browser pada proses routing.

   Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan. 

  #### Switch
   Digunakan untuk membungkus kumpulan beberapa component route. 

   Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok. Jika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component NotFound.

 #### Link
   Digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju. 

   Element kosong <></> tersebut adalah shorthand dari
   ```
   <React.Fragment><React.Fragment/>
   ```
   yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.

-----------
## URL PARAMS
Suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman. 

- /movie/titanic
- /movie/spiderman
- /movie/batman

```
<Route exact path="/movie/:id" component={MovieDetailsContainer}/>
```

### Kegunaan URL Params
1. Paginasi
2. Penyortiran dan penyaringan
3. Pencarian
4. Menggambarkan

```
this.props.match.params
```

### Perbedaan Link dan Redirect
|Link | Redirect |
|-------|--------|
|Dapat digunakan pada kondisi apapun|Lebih sering digunakan pada halaman 404|
|Memberikan history baru pada browser|Menimpa history pada browser|
|Bereaksi dengan click seperti a href|Bereaksi dengan suatu kondisi|
-----

## Hook Routing React
1. useHistory
2. useLocation
3. useParams
4. useRouteMatch

#### useHistory
Memberi akses ke instance riwayat yang dapat digunakan untuk bernavigasi
contoh : 

- length
- go
- goBack
- goForward
- push

|Property|Kegunaan|
|---|---|
|length|(angka) jumlah entri dalam tumpukan riwayat|
|go|(fungsi) memindahkan petunjuk ditumpukan riwayat sebanyak n entri|
|goBack|(fungsi) Setara dengan go(-1)|
|goForward|(fungsi) setara dengan go(1)|
|push|(fungsi) mendorong entri baru ke tumpukan riwayat|
|replace|(fungsi) mengganti entri saat ini di tumpukan riwayat history|

#### useParams
mengembalikan objek pasangan kunci/nilai paramater URL. Gunakan untuk mengakses match.params dari < Route> saat ini

#### useRouteMatch
mencoba mencocokkan URL saat ini dengan cara yang sama seperti < Route>. ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar benar merender < Route>

------
## React Router Version 6
- New update
  
  Terdapat beberapa fitur baru di React 6, berikut diantara : 

  - Penanganan routing berbasis hook
  - Penanganan error lebih baik
  - Pengelolaan routing yang lebih terpusat
  - Perubahan pada konsep penggunaan URL

- Komponen Route secara statis
  
  Menggunakan komponen route untuk mendefinisikan dua rute, yaitu '/home' dan '/about'. ketika path sesuai dengan salah satu rute, komponen terkait (home atau about) akan ditampilkan di dalam aplikasi. 
  ```
  <Routes>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </Routes>
  ```

#### Komponen Route Secara Dinamis
Menggunakan property render dan melakukan pengecekan apakah sudah login
```
<Routes>
    <Route path="/users" render={() => (
        isLoggedIn ? <Users/> : <Redirect to="/login">
    )} />

</Routes>
```

#### Penggunaan Parameter dalam Route
```
<Routes>
    <Route path="/users/:id" component={UserDetails}  />
</Routes>

const UserDetails = ({match}) => {
    const {id} = match.params; // memanggil value dari parameter kita
}
```

#### Penggunaan Nested Route
```
<Routes>
    <Route path="/products" component={Products}>
        <Route path="/products/:id" component={ProductDetails} />
    </Route>
</Routes>
```

#### Penggunaan Link
```
Import {Link} from "react-router-dom"

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link> // Dapat digunakan pada button, link <a>, text pada <li> atau yang lain
          </li>
        ))}
      </ul>
    </div>
  );
}

```