import React, { useState, useEffect, useRef, useCallback } from "react";
import "./App.scss";
import Messages from "./components/Messages";
import Nav from "../Nav";
import Left from "./components/Left";

export const settingsContext = React.createContext({});

export default function App(props) {
  const [settings, setSettings] = useState({
    user: props.user,
    room:
      JSON.parse(localStorage.getItem("hobbi"))[props.userRes] || props.userRes,
  });
  const [data, setData] = useState([]);
  const dataRef = useRef();

  const getData = useCallback(async () => {
    dataRef.current = await JSON.parse(localStorage.getItem("data"));
    setData(dataRef.current);
  }, []);

  const sendMessage = (value, quote, media) => {
    if (!dataRef.current[settings.room]) {
      dataRef.current[settings.room] = [];
    }
    dataRef.current[settings.room].push({
      user: props.user,
      value: value,
      quote: quote || null,
      media: media || null,
      date: Date.now(),
    });
    localStorage.setItem("data", JSON.stringify(dataRef.current));
    getData();
  };

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify({}));
    }
    if (!localStorage.getItem("hobbi")) {
      localStorage.setItem("hobbi", JSON.stringify({}));
    }
    getData();
    window.addEventListener("storage", getData);
    return () => window.removeEventListener("storage", getData);
  }, [getData]);

  return (
    <div>
      <Nav />
      <div className="hidden">fix</div>
      <div className="OldChat">
        <div className="left">
          <Left userRes={props.userRes} name={props.name}/>
        </div>
        <div className="right">
          <Messages messages={data[settings.room]} user={props.user} sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}
