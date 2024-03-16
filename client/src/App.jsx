import React from "react";
import './index.css'
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import LobbyScreen from './components/Lobby/Lobby';
import RoomPage from './components/Room/Room';
import Study from "./components/studymaterial/study";
import Scholarship from "./components/scholarship/Scholarship";
import Homepage from "./components/HomePage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/study" element={<Study />} />
        <Route path="/Lobby" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
