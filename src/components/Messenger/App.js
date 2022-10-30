import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.scss";
import Settings from "./components/Settings";
import Chats from "./components/Chats";
import Messages from "./components/Messages";
import Nav from "../Nav";

export const settingsContext = React.createContext({});

export default function App() {
  const [settings, setSettings] = useState({});
  const [data, setData] = useState([]);
  const dataRef = useRef();

  const getData = useCallback(async () => {
    dataRef.current = await JSON.parse(localStorage.getItem("data"));
    setData(dataRef.current);
  }, []);

  const sendMessage = (value, quote, media) => {
    // if (!dataRef.current[settings.room]) {
    //   dataRef.current[settings.room] = [];
    // }
    // dataRef.current[settings.room].push({
    //   user: settings.user,
    //   value: value,
    //   quote: quote || null,
    //   media: media || null,
    //   date: Date.now(),
    // });
    // localStorage.setItem("data", JSON.stringify(dataRef.current));
    // getData();
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify("login", value, "666"),
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify({}));
    }
    getData();
    window.addEventListener("storage", getData);
    return () => window.removeEventListener("storage", getData);
  }, [getData]);

  return (
    <div className="container">
      <settingsContext.Provider value={settings}>
        <Nav />
        <div className="hidden">fix</div>
        <div className="OldChat">
          <div className="left">
            <Chats messages={data} setSettings={setSettings} />
          </div>
          <div className="right">
            {settings.user && settings.room ? (
              <Messages
                messages={data[settings.room]}
                sendMessage={sendMessage}
              />
            ) : (
              <h2>Введите имя и комнату</h2>
            )}
          </div>
        </div>
      </settingsContext.Provider>
    </div>
  );
}
