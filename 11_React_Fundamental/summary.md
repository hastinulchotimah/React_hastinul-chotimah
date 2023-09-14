# Resume react fundamental
 1. Jsx
 => singkatan dari java script xml, jsx dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI, dan jsx ini tidak wajib tetapi dengan adanya jsx kita lebih mudah menulis aplikasi react.
 => jsx merupakan ekspresi yang akan menjadi panggilan fungsi javascript biasa dan menjadi object javascript.

 2. Komponen React 
 => komponen react adalah bagian dari kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan behavior, dan state sebagai UI.

3. komposisi komponen dan props
=> Props adalah singkatan dari properties, membuat kita dapat memberikan argumen/ data pada component react, props membantu membuat komponen menjadi lebih dinamis, props dioper ke komponen yang sama seperti memberikan atribut  pada tag html, props pada componen adalah read-only dan tidak dapat diubah.
=> komposisi nya ada 2 yaitu "KONTAINMEN" & "SPESIALISASI"

4. React Lifecycle method umum
=> render () -->fungsi yang sering dipakai, reqired pada component, pure function. tidak boleh ada pada setState().
=>componentDidMount() --> dipanggil ketika component sudah dirender untuk pertama kali, tempat yang tepay untuk pemanggilan API, dan boleh ada setState().
=>componentDidUpdate() --> dipanggil ketika terjadi perubahan update atau state
=>componentWillUnmount() -->  dipanggil ketika componet  akan dihancurkan cocok untuk clean up actions

5. Render bersyarat  dan list 
=> pada react kita dapat membuat kompinen yang berbeda yang mencakup perilaku yang dibutuhkan, lalu kita dapat merender banya beberapa bagian saja berdasarkan state dari aplikasi anda.
=> menggunakan if, inline if dengan operator &&, inline if-else dengan ternary conditional operator, mencegah komponen untuk rendering
=> render list membangung koleksi dari beberapa elemen dan menyertakan nya dalam JSX menggunakan tanda kurung kurawal{}
=> key membantu react untuk mengidentifikasi item mana yang telah diubah,ditambahkan, atau dihilangkan.

6. Struktur Direktori
=>React tidak memiliki pendapat (unopinionated) tentang bagaimana cara memasukkan file ke folder.
=> hindari terlalu banyak nesting

