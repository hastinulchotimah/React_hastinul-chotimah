import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Mengimpor useNavigate

function FormLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  const handleLogin = (event) => {
    event.preventDefault();
    const dummyUser = { username: 'hasti', password: 'password123' };
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/createproduct'); // Navigasi ke halaman "/createproduct"
    } else if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', true);
      navigate('/createproduct'); // Navigasi ke halaman "/createproduct"
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/'); // Navigasi kembali ke halaman utama ("/")
  };

  return (
    <div className="bg-gray-100 p-40">
    {isLoggedIn ? (
      <div className="text-center">
        <h1 className="text-2xl">Welcome, {username}</h1>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <div className="text-center">
        <h1 className="text-2xl">Login</h1>
        <form className="mt-4" onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
      </div>
    )}
  </div>
  );
}

export default FormLogin;
