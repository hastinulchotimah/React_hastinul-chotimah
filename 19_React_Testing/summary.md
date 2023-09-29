# Resume React Testing

1. Testing adalah proses memverifikasi bahwa test assertions kita benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug dikode kita
2. Manfaat Testing 
=>ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
=> Mnegurangi bug pada aplikasi, walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.
3. kategori testing
=> Rendering component trees didalam environment  tes yang sudah disederhanakan dan ditegaskan pada keluarannya.kita akan fokus pada bagian ini.
=> Menjalalankan Aplikasi lengkap didalam envoironment peramban (browser) asli. ini dikenal sebagai tes "end-to-end".
4. rekomendasi tools
=> jest ->test runner pada javascript yang memungkinkan anda mengakses DOM melalui jsDom.
=> React Testing library -> merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya.
=> Install -> jika kita menginstal react menggunakan  create-react-app, jest (dan react testing library) akan secara default sudah terinstall.
5. render dan bug 
=> fungsi render RTL akan merender file jsx apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen react yang akan kita test. untuk menyakinkan bahwa file jsx sudah terender, kita bisa menggunakan fungsi debug RTL. selalu gunakan fungsi debug RTL apabila kita tidak yakin seprti apahasil dari fungsi RTL
6. Memilih elemen
=> salah satu contohnya ialah getByText untuk memilih teks dari elemen yang suah dipilih.
7. kategori testing
=> LabelText: getLabelText: <label for ="search"/>
=> PlaceholderText: getByPlaceholderText:<input placeholder=""search"/>
=> AltText: getByAltText:<img alt="profile"/>
=> DisplayValue: getByDisplayValue: <input value="JavaScript"/>
8. testing custom hook
=>library yang digunakan adalah React Hooks Testing Library