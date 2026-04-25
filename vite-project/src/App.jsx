import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Navbar search={searchQuery} setSearch={setSearchQuery} />

      <Routes>
        <Route path="/" element={<Home search={searchQuery} />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}