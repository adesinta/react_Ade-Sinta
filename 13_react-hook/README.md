<h1>(13) React Hook</h1>
<p>Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas. </p>

### Motivasi
- Kesulitan untuk menggunakan kembali statefull logic antar komponen
- Komponen kompleks menjadi sulit untuk di mengerti
- Kelas membingunkan manusia dan mesin

### Hooks pada React
1. Hooks Dasar
   - useState
   - useEffect
   - useContext
2. Hooks Tambahan
   - useReducer
   - useCallback
   - useMemo
   - useRef
   - useImperativeHandle
   - useLayoutEffect
   - useDebugValue

## Aturan pada Hooks
1. Hanya panggil hooks di tingkat atas -> Jangan memanggil hooks dari dalam loops, conditions, atau nested functions
2. Hanya panggil hooks dari fungsi fungsi react

### useEffect ()
- Effect hook memungkinkan kita melakukan efek samping (side Effect) didalam function component
- componentDidMount, componentDidUpdate, dan componentWillUnmount = useEffect
- Ada dua jenis : butuh pembersihan dan tidak butuh pembersihan. 

### Create Custom Hook
Membuat hook kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi. 