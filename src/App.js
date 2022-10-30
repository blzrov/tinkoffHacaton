import React from "react";
import "./App.scss";
import Settings from "./pages/register/Settings.jsx";
import Profile from "./pages/register/Profile.jsx";
import Regist from "./components/Regist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Chat from "./components/Messenger/App";

function App() {
  // React.useEffect(() => {
  //   fetch("http://127.0.0.1:8000/getUser/?user_login=Kolya_wolf")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="regist" element={<Regist />} />
          <Route path="chat" element={<Chat />} />
          <Route path="/" element={<Regist />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
