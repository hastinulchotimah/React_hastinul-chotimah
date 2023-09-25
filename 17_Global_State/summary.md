# Resume Global State Management

	Redux adalah library untuk manajement state global
Redux menggunakan struktur "one-way data flow", dan redux menggunakan beberapa tipe code

1. kapan state yang tepat untuk menggunakan redux?
=> banyak state yang perlu ditaruh dibanyak tempat
=> state pada app sering berubah
=> logic untuk mengubah state kompleks
=> ukuran codebase yang sudah besar, dan dikerjakan oleh banyak orang
=> perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

2. redux libraries dan tools
=> React-Redux
=> React-toolkit
=> Redux DevTools Extension

3. komponem penting di Redux
=> Action
Digunakan untuk memberikan informasi dari aplikasi ke store
=> Reducer
pure JS functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
=> Store
Object sentral yang menyimpan state pada aplikasi

4. memakai dan mengubah state 
=> Hooks
=> Connect

5. Redux Thunk => thunk middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action
 redux thunk diperlukan untuk menghandle side effect logic yang kompleks, dan untuk logic async seperti request data.

6. cara untuk fetching data di react 
=> Fetch API
=> Axios
=> React Query Library