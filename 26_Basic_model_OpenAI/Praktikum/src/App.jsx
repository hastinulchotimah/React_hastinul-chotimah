import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/chat";
import Reservasi from "./pages/reservasi";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="reservasi" element={<Reservasi />} />
      </Routes>
    </Router>
  );
}
export default App;
