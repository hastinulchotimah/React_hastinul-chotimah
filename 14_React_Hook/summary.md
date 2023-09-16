# Resume React Hook
1. React Hook merupakan fitur baru direact 16.8 , dengan hooks , kita dapat menggunakan state  dan fitur react yang lain tanpa perlu menulis  sebuah kelas
2. hooks dasar 
=> use state
=> use effect
3. aturan hooks
=> hanya panggil hooks tingkat atas, jangan manggil hooks dari dalam loops,conditions, atau  nested function
=> hanya panggil hooks dari fungsi" react , memanggil hooks dari komponen" fungsi react dan dari custom hooks 
4. useEffect 
=> memungkinkan kita melakukan efek samping (side effects) didlm function componen
=> component DidMount, componentDidUpdate dan componentWillUnmount=useEffect
=> ada dua jenis butu pembersihan dan  tidak butuh pembersihan
5. custom hooks => membuat  hook kita sendiri  memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.