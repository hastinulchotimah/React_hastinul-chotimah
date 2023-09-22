# Resume React Form 
 Form merupakan salah satu hal krusial dalam pengambangan aplikasi website. form dapat digunakan untuk menghandle inputan dari user.
 1. macam-macam form :
 => element <input>
 => element <textarea>
 pada html elment ini mendefenisikan text didalamnya sbg element anak,direact element  ini menggunakan atribut value
 => element <selected>
 pada element ini kita menggunakan kan atribut value ditag selecte.
=> radio button dan checkbox ini salah satu type dari element input

2. controlled component 
=>kita dapat menggabungkan cara menyimpan dan memperbarui state html dan react dengan menggunakan state pada react. kemudian komponen react  yg merender  sebuah form juga mengontrol apa yang trjadi dalam form tersebut pada masukkan pengguna selanjutnya. sebuah element memasukkan form yang nilainya dikontrol oleh react melalui cara seprti ini disebut sebagai "Controlled Component"
=> kita bisa memasukkan array ke atribut value , yang memungkinkan kita memilih beberapa opsi tag select.

3. handle banyak input 
=> ketika kita membutuhkan penanganan banyak element pada controlled component ,kita dapat menambahkan atribut name pada setiap elemen dan membiarkan fungsi hendler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name.

4. Uncontrolled Component
=> adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri, untuk menulis Uncontrolled component ,alih alih menuliskan event handler untuk setiap pembaruan state, jadi kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

5. Nilai default 
=> Atribut default value 
Pada lifecyle rendering react , atribut value pada element form akan menimpa nilai pada DOM . dengan Uncontrolled component seringkali kita ingin  react dapat menentukan nilai awal tetapi  pembaruan berikutnya dilakukan secara Uncontrolled .

6. Tag File Input => dalam react sebuah <input type="file "/> merupakan Uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

# Kesimpulan 
 Form Controlled dan Uncontrolled memiliki kelebihannya sendiri. kita perlu mengevaluasi situasi kita secara spesifik dan memilih pendekatan apa yang cocok untuk kondisi kita.

    Jika formulir sangat sederhana dalam hal umpan balik UI, uncontrolled dengan refs sepenuhnya baik baik saja. kita tidak tidak perlu mendengarkan apa yang dikatakan berbagai artikel bahwa uncontrolled itu "buruk". lagi pula kita selalu dapat bermigrasi ke controlled input. 