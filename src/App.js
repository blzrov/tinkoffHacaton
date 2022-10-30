import React from "react";
import "./App.scss";
import Settings from "./pages/register/Settings.jsx";
import Profile from "./pages/register/Profile.jsx";
import Regist from "./components/Regist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat2 from "./components/Messenger2/App";
import Chat from "./components/Messenger/App";

function App() {
  const [userLogin, setUserLogin] = React.useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="profile" element={<Profile user={userLogin} />} />
          <Route path="settings" element={<Settings />} />
          <Route path="regist" element={<Regist setUser={setUserLogin} />} />
          <Route path="chat" element={<Chat user={userLogin} />} />
          <Route path="chat2" element={<Chat2 user={userLogin} />} />
          <Route path="/" element={<Regist setUser={setUserLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
