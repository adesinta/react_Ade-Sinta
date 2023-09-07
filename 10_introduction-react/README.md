<h1>(10) Introduction React</h1>

<p>React adalah library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile</p>
<p>Open source yang di maintain oleh facebook</p>
<p>Pada arsitektur MVC (Model-View-Controller), Reactjs hanya akan mengambil peran pada layer view saja. </p>

### Library & Framework untuk membuat UI
- JQuery library
- React JS library
- Angularjs framework
- Vuejs framework
- Nextjs framework

### Alasan menggunakan React
1. Declarative
2. Component-based
3. Learn Once, Write Anywhere
4. Popular 
5. Sudah teruji -> Facebook, netflix, american express, instagram, traveloka, airbnb

### DOM MANIPULATION
<p>Manipulasi dom adalah kunci dari web yang modern dan interaktif. Karena untuk membuat website interaktif, kita perlu mengubah DOM.</p>

### Virtual DOM
<p>Representasi dari UI berbentuk javascript Object yang disimpan pada memori</p>

### Masalah yang dihadapi dengan DOM Manipulation
1. DOM Manipulation secara manual dapat membuat code berantakan. 
2. Sulit untuk mengingat DOM state sebelumnya
3. Jauh lebih lambat daripda operasi javascript pada umumnya. 

### Set Up Development Environment
<h4>Tools yang diperlukan : </h4>
1. Browser -> Google Chrome (Disarankan)
2. Text Editor/IDE -> Visual Studio Code
3. Command Line Shell -> Terminal pada OS, dan CMD / Powershell pada windows.

### Membuat aplikasi React 
- Install Node.js terlebih dahulu
- Buat aplikasi react.js dengan

  ```
  #Membuat react menggunakan cra
  npx create-react-app [nama_project] 

  #Membuat react menggunakan vite
  npm create vite@latest first-react-vite -- --template react
  
  ```

Link Install Tailwind CSS pada Vite (https://tailwindcss.com/docs/guides/vite).